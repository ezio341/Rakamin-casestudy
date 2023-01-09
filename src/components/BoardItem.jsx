import { Row, Col, Image, Dropdown, Button, Form } from "react-bootstrap";
import More from '../icons/more-horizontal.svg'
import Progress from "./Progress";
import ArrowRight from "../icons/arrow-right.svg"
import ArrowLeft from "../icons/arrow-left.svg"
import Edit from "../icons/edit.svg"
import Delete from "../icons/bin.svg"
import ArrowRightPrimary from "../icons/arrow-right-primary.svg"
import ArrowLeftPrimary from "../icons/arrow-left-primary.svg"
import EditPrimary from "../icons/edit-primary.svg"
import DeleteDanger from "../icons/bin-danger.svg"
import AlertDanger from "../icons/alert-danger.svg"
import { useState } from "react";
import ModalCustom from "./ModalCustom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoItems, editTodoItems, moveTodoItems } from "../features/todoItem/todoItemAction";

export default function BoardItem({title, progress, groupId, itemId}){ 
  const dispatch = useDispatch()
  const {userToken} = useSelector(state=>state.auth)
  const todoGroup = useSelector(state=>state.todoGroup)
  const [deleteModalShow, setDeleteModalShow] = useState(false)
  const [EditTaskModalShow, setEditTaskModalShow] = useState(false)
  const [settings, setSettings] = useState([
    {
      text: 'Move Right',
      icon: ArrowRight,
      iconAlt: ArrowRightPrimary,
      active: false,
      activeVariant: 'primary',
      onClick: ()=>{
        dispatch(moveTodoItems({
          groupId, itemId, bearerToken: userToken,
          targetTodoId: todoGroup.data[todoGroup.data.findIndex(data=>data.id===groupId)+1].id
        }))
      },
      disabled: todoGroup.data.findIndex(item=>item.id===groupId)===todoGroup.data.length -1
    },
    {
      text: 'Move Left',
      icon: ArrowLeft,
      iconAlt: ArrowLeftPrimary,
      active: false,
      activeVariant: 'primary',
      onClick: ()=>{
        dispatch(moveTodoItems({
          groupId, itemId, bearerToken: userToken,
          targetTodoId: todoGroup.data[todoGroup.data.findIndex(data=>data.id===groupId)-1].id
        }))
      },
      disabled: todoGroup.data.findIndex(item=>item.id===groupId)===0
    },
    {
      text: 'Edit',
      icon: Edit,
      iconAlt: EditPrimary,
      active: false,
      activeVariant: 'primary',
      onClick: ()=>{setEditTaskModalShow(true)},
      disabled: false
    },
    {
      text: 'Delete',
      icon: Delete,
      iconAlt: DeleteDanger,
      active: false,
      activeVariant: 'danger',
      onClick: ()=>setDeleteModalShow(true),
      disabled: false
    },

  ])

  const swapSetting = (id, obj) =>{
    let newSettings = settings.map((setting, i)=>{
      if(id===i){
        return obj
      }
      return setting
    })
    setSettings(newSettings)
  }

  const onClickSaveTask = (evt)=>{
    evt.preventDefault()
    const form = evt.currentTarget
    let [name, progress_percentage] = [evt.target[0].value, evt.target[1].value]
    if(!form.checkValidity()){
      evt.stopPropagation()
    }else{
      dispatch(editTodoItems(
        {
          groupId,
          bearerToken: userToken,
          data: {
            name, progress_percentage
          },
          itemId
        }
      ))
      setEditTaskModalShow(false)
    }
  }

  const onDeleteItem=()=>{
    dispatch(deleteTodoItems({groupId, bearerToken:userToken, itemId}))
    setDeleteModalShow(false)
  }
  return (
    <div className="board-item">
      <div className="title s-14 font-weight-700">
        {title}
      </div>
      <Row className="align-items-center mt-3">
        <Col>
          <Progress percent={progress}/>
        </Col>
        <Col xs="auto" md="auto">
          <Dropdown>
            <Dropdown.Toggle variant="transparent" className="p-0">
              <Image src={More} height={24} width={24}/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {
                settings.map((setting, i)=>(
                  !setting.disabled &&
                  <Dropdown.Item className={`s-14 font-weight-600 py-0 my-2 hover-${setting.activeVariant}` }
                  onClick={(e)=>setting.onClick(e)} 
                  onMouseEnter={()=>{swapSetting(i, {...setting, active: true})}}
                  onMouseLeave={()=>{setSettings(settings.map(setting=>({...setting, active: false})))}}
                  key={i}>
                    <span className="me-2">
                      <Image src={setting.active? setting.iconAlt: setting.icon}/>
                    </span>
                    {setting.text}
                  </Dropdown.Item>
                ))
              }
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      {/* Modal delete item */}
      <ModalCustom 
        Body={'Are you sure want to delete this task? your action can’t be reverted.'}
        Footer={
          <>
            <Button onClick={()=>setDeleteModalShow(false)} className="me-2 m-0 text-neutral-90 shadow" variant="white">Cancel</Button>
            <Button onClick={onDeleteItem} className="m-0 shadow" variant="danger">Delete</Button>
          </>
        }
        HeaderIcon={AlertDanger}
        show={deleteModalShow}
        setShow={setDeleteModalShow}
        title="Delete Task"
        closable
      />

      {/* Modal Edit Task */}
      <ModalCustom 
        Body={
          <Form onSubmit={onClickSaveTask}>
          <Form.Group className="mb-3" controlId="taskName">
            <Form.Label className='s-12 font-weight-700'>Task Name</Form.Label>
            <Form.Control defaultValue={title} type="text" placeholder="Type your task" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="progress">
            <Form.Label className='s-12 font-weight-700'>Progress</Form.Label>
            <Form.Control defaultValue={progress} type="number" max={100} min={0} placeholder="70%" />
          </Form.Group>
          <div className="d-flex justify-content-end gap-2">
            <Button onClick={()=>setEditTaskModalShow(false)} className="m-0 text-neutral-90 shadow" variant="white">Cancel</Button>
            <Button type="submit" className="m-0 shadow">Save Task</Button>
          </div>
        </Form>
        }
        show={EditTaskModalShow}
        setShow={setEditTaskModalShow}
        title="Edit Task"
        closable
      />
    </div>
  )
}