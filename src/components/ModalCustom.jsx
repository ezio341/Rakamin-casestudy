import {Modal, ModalBody, ModalHeader, ModalFooter, Button, Image} from 'react-bootstrap'
import Close from "../icons/x.svg"

export default function ModalCustom({show, setShow, Footer, HeaderIcon, title, Body, closable}){
  return (
    <Modal centered contentClassName="border-0 radius-10 p-4" show={show} onHide={()=>setShow(false)}>
    <ModalHeader className="border-0 pt-0 px-0 pb-4">
      <div className="d-flex align-items-center justify-content-between w-100">
        <div className="d-flex align-items-center gap-2">
          {
            HeaderIcon &&
            <Image src={HeaderIcon} height={16} width={16}/>
          }
          <div className="s-18 font-weight-700 lh-1">
            {title}
          </div>
        </div>
        {
          closable &&
          <div>
          <Button className="p-0" variant="transparent" onClick={()=>setShow(false)}><Image src={Close} height={24} width={24}/></Button>
          </div>
        }
      </div>
    </ModalHeader>
    <ModalBody className="s-14 font-weight-400 px-0 pt-0 pb-4">
      {Body}
    </ModalBody>
    <ModalFooter className="border-0 pb-0 px-0 pt-0">
      {Footer}
    </ModalFooter>
  </Modal>
  )
}