import Checklist from '../icons/checklist.svg'
import { Row, Col, Image, ProgressBar } from "react-bootstrap";

export default function Progress({percent}){
  return (
    <Row className="align-items-center">
      <Col>
        <span>
          <ProgressBar now={percent}/>
        </span>
      </Col>
      <Col xs="auto" md="auto" className="ps-0 pe-1">
        {
          percent === 100 ?
          <Image src={Checklist} height={16} width={16}/>
          :
          <span className="text-neutral-70 s-12 font-weight-400">{percent}%</span>
        }
      </Col>
    </Row>  
  )
}