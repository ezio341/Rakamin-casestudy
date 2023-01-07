import { Row, Col, ProgressBar, Image, Button } from "react-bootstrap";
import Checklist from '../icons/checklist.svg'
import More from '../icons/more-horizontal.svg'

export default function boardItem({title, progress}){
  return (
    <div className="board-item">
      <div className="title">
        {title}
      </div>
      <Row className="align-items-center">
        <Col>
          <span>
            <ProgressBar now={progress}/>
          </span>
        </Col>
        <Col xs="auto" md="auto" className="ps-0 pe-1">
          {
            progress === 100 ?
            <Image src={Checklist} height={16} width={16}/>
            :
            <span className="text-neutral-70 s-12 font-weight-400">{progress}%</span>
          }
        </Col>
        <Col xs="auto" md="auto">
          <Button variant="transparent" className="p-0">
            <Image src={More} height={24} width={24}/>
          </Button>
        </Col>
      </Row>
    </div>
  )
}