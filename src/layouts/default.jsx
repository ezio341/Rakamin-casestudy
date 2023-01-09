import {Button, Container, Form} from 'react-bootstrap'
import ButtonIcon from '../components/ButtonIcon'
import PlusIcon from '../icons/plus.svg'
import ModalCustom from '../components/ModalCustom'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import AuthStatus from '../components/AuthStatus'
import { useDispatch, useSelector } from 'react-redux'
import { createTodoGroup } from '../features/todoGroup/todoGroupAction'

export default function DefaultLayout(){
  const [createGroupModalShow, setCreateGroupModalShow] = useState(false)
  const dispatch = useDispatch()
  const {userToken} = useSelector(state=>state.auth)

  const onSubmitGroup = (evt) =>{
    evt.preventDefault()
    const form = evt.currentTarget
    let [title, description] = [evt.target[0].value, evt.target[1].value]
    if(!form.checkValidity()){
      evt.stopPropagation()
    }else{
      dispatch(createTodoGroup(
        {
          bearerToken: userToken,
          data: {
            title, description
          }
        }
      ))
      setCreateGroupModalShow(false)
    }
  }

  return (
    <>
    <header className='bg-primary-surface d-flex align-items-center px-3 border-bottom border-1 border-neutral-40'>
      <div className='d-flex align-items-center me-auto flex-wrap'>
        <span className='s-18 font-weight-700 pe-2 me-1'>
          Product Roadmap
        </span>
        <ButtonIcon onClick={()=>setCreateGroupModalShow(true)} className="d-none d-sm-block" icon={PlusIcon} iconH={12} iconW={12} text="Add New Group" variant="primary"/>
      </div>
      <div className='justify-content-end'>
        <AuthStatus/>
      </div>
    </header>
      <Container fluid className='content px-sm-3 px-0'>
        <div className='pt-3 ps-3 d-block d-sm-none'>
        <ButtonIcon onClick={()=>setCreateGroupModalShow(true)} icon={PlusIcon} iconH={12} iconW={12} text="Add New Group" variant="primary"/>
        </div>
        {/* {props.children} */}
        <Outlet/>
      </Container>
    <footer className='bg-primary-surface d-flex align-items-center justify-content-center'>
      developed by Arga
    </footer>

      {/* Modal Create Task */}
      <ModalCustom 
        Body={
          <Form onSubmit={onSubmitGroup}>
          <Form.Group className="mb-3" controlId="taskName">
            <Form.Label className='s-12 font-weight-400'>Title</Form.Label>
            <Form.Control type="text" placeholder="Type your new group" />
          </Form.Group>
          <Form.Group className="mb-4" controlId="progress">
            <Form.Label className='s-12 font-weight-400'>Description</Form.Label>
            <Form.Control as='textarea' placeholder="Your group description" />
          </Form.Group>
          <div className='d-flex justify-content-end gap-2'>
            <Button onClick={()=>setCreateGroupModalShow(false)} className="me-2 m-0 text-neutral-90 shadow" variant="white">Cancel</Button>
            <Button type='submit' className="m-0 shadow">Save Task</Button>
          </div>
          </Form>
        }
        show={createGroupModalShow}
        setShow={setCreateGroupModalShow}
        title="Add New Group"
      />
    </>
  )
}