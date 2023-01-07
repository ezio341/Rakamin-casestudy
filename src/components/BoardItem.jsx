import { Row, Col, Image, Button } from "react-bootstrap";
import More from '../icons/more-horizontal.svg'
import Progress from "./Progress";

export default function boardItem({title, progress}){
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
          <Button variant="transparent" className="p-0">
            <Image src={More} height={24} width={24}/>
          </Button>
        </Col>
      </Row>
    </div>
  )
}