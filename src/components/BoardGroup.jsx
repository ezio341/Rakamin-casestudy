import BoardTag from "./Tag"
import BoardItem from "./BoardItem"
import ButtonIcon from "./ButtonIcon"
import PlusIcon from '../icons/plus-circle.svg'
import {useEffect, useState} from 'react'
import ModalCustom from "./ModalCustom"
import { Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { createTodoItems, getTodoItems } from "../features/todoItem/todoItemAction"
import { getTodos } from "../features/todoGroup/todoGroupAction"

export default function BoardGroup({id, variant, description, title}){
  const [createTaskShow, setCreateTaskModalShow] = useState(false)
  const {data, loading, error} = useSelector(state=>state.todoItem)
  const group = useSelector(state=>state.todoGroup)
  const groupData = group.data
  const {userToken} = useSelector(state=>state.auth)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(!data.length && userToken){
      setTimeout(
        ()=>dispatch(getTodoItems({groupId: id, bearerToken: userToken})),
        50
      )
    }
  },[])
  const onClickSaveTask = (evt)=>{
    evt.preventDefault()
    const form = evt.currentTarget
    let [name, progress_percentage] = [evt.target[0].value, evt.target[1].value]
    if(!form.checkValidity()){
      evt.stopPropagation()
    }else{
      dispatch(createTodoItems(
        {
          groupId: id,
          bearerToken: userToken,
          data: {
            name, progress_percentage
          }
        }
      ))
      setCreateTaskModalShow(false)
    }
  }

  return (
    <div className={`board-group ${variant}`}>
      <BoardTag text={title} variant={variant}/>
      <div className="s-12 font-weight-700 py-2 ms-1">
        {description}
      </div>
      {
        /* if board item empty */
        !data.filter(item=>item.todo_id===id).length ?
        <div className="px-3 py-2 bg-neutral-20 s-14 font-weight-400 radius-4 border border-neutral-40 text-neutral-70">
          No Task
        </div>
        :
        data.filter(item=>item.todo_id===id).map((item, i)=>(
          <div className="mb-2 pb-1" key={i}>
            <BoardItem itemId={item.id} groupId={id} title={item.name} progress={item.progress_percentage}/>
          </div>
        ))
      }
      <div className="mt-2">
      <ButtonIcon onClick={()=>setCreateTaskModalShow(true)} variant="transparent" text="New Task" icon={PlusIcon} noPadding/>
      </div>

      {/* Modal Create Task */}
      <ModalCustom 
        Body={
        <Form onSubmit={onClickSaveTask}>
          <Form.Group className="mb-3" controlId="taskName">
            <Form.Label className='s-12 font-weight-700'>Task Name</Form.Label>
            <Form.Control required type="text" placeholder="Type your task" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="progress">
            <Form.Label className='s-12 font-weight-700'>Progress</Form.Label>
            <Form.Control required type="number" max={100} min={0} placeholder="70%" />
          </Form.Group>
          <div className="d-flex justify-content-end gap-2">
            <Button onClick={()=>setCreateTaskModalShow(false)} className="m-0 text-neutral-90 shadow" variant="white">Cancel</Button>
            <Button type="submit" className="m-0 shadow">Save Task</Button>
          </div>
        </Form>
        }
        show={createTaskShow}
        setShow={setCreateTaskModalShow}
        title="Create Task"
        closable
      />
    </div>
  )
}