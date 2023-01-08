import BoardTag from "./Tag"
import BoardItem from "./BoardItem"
import ButtonIcon from "./ButtonIcon"
import PlusIcon from '../icons/plus-circle.svg'
import {useState} from 'react'
import ModalCustom from "./ModalCustom"
import { Button, Form } from "react-bootstrap"

export default function BoardGroup({boardItem, variant, duration, title}){
  const [createTaskShow, setCreateTaskModalShow] = useState(false)

  return (
    <div className={`board-group ${variant}`}>
      <BoardTag text={title} variant={variant}/>
      <div className="s-12 font-weight-700 py-2 ms-1">
        {duration}
      </div>
      {
        /* if board item empty */
        !boardItem.length ?
        <div className="px-3 py-2 bg-neutral-20 s-14 font-weight-400 radius-4 border border-neutral-40 text-neutral-70">
          No Task
        </div>
        :
        boardItem.map((item, i)=>(
          <div className="mb-2 pb-1" key={i}>
            <BoardItem title={item.title} progress={item.progress}/>
          </div>
        ))
      }
      <div className="mt-2">
      <ButtonIcon onClick={()=>setCreateTaskModalShow(true)} variant="transparent" text="New Task" icon={PlusIcon} noPadding/>
      </div>

      {/* Modal Create Task */}
      <ModalCustom 
        Body={
          <Form>
          <Form.Group className="mb-3" controlId="taskName">
            <Form.Label className='s-12 font-weight-700'>Task Name</Form.Label>
            <Form.Control type="text" placeholder="Type your task" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="progress">
            <Form.Label className='s-12 font-weight-700'>Progress</Form.Label>
            <Form.Control type="number" max={100} min={0} placeholder="70%" />
          </Form.Group>
        </Form>
        }
        Footer={
          <>
            <Button onClick={()=>setCreateTaskModalShow(false)} className="me-2 m-0 text-neutral-90 shadow" variant="white">Cancel</Button>
            <Button className="m-0 shadow">Save Task</Button>
          </>
        }
        show={createTaskShow}
        setShow={setCreateTaskModalShow}
        title="Create Task"
        closable
      />
    </div>
  )
}