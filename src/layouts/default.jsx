import {Button, Container, Form} from 'react-bootstrap'
import ButtonIcon from '../components/ButtonIcon'
import PlusIcon from '../icons/plus.svg'
import ModalCustom from '../components/ModalCustom'
import { useState } from 'react'

export default function DefaultLayout(props){
  const [createGroupModalShow, setCreateGroupModalShow] = useState(false)

  return (
    <>
    <header className='bg-primary-surface d-flex align-items-center px-3 border-bottom border-1 border-neutral-40'>
      <span className='s-18 font-weight-700 pe-2 me-1'>
        Product Roadmap
      </span>
      <ButtonIcon onClick={()=>setCreateGroupModalShow(true)} className="px-3 py-1 radius-8" icon={PlusIcon} iconH={12} iconW={12} text="Add New Group" variant="primary"/>
    </header>
      <Container fluid className='content px-sm-3 px-0'>
        {props.children}
      </Container>
    <footer className='bg-primary-surface d-flex align-items-center justify-content-center'>
      developed by Arga
    </footer>

      {/* Modal Create Task */}
      <ModalCustom 
        Body={
          <Form>
          <Form.Group className="mb-3" controlId="taskName">
            <Form.Label className='s-12 font-weight-400'>Task Name</Form.Label>
            <Form.Control type="text" placeholder="Type your task" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="progress">
            <Form.Label className='s-12 font-weight-400'>Progress</Form.Label>
            <Form.Control type="number" max={100} min placeholder="70%" />
          </Form.Group>
        </Form>
        }
        Footer={
          <>
            <Button onClick={()=>setCreateGroupModalShow(false)} className="me-2 m-0 text-neutral-90 shadow" variant="white">Cancel</Button>
            <Button className="m-0 shadow">Save Task</Button>
          </>
        }
        show={createGroupModalShow}
        setShow={setCreateGroupModalShow}
        title="Add New Group"
      />
    </>
  )
}