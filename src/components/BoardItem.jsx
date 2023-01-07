import { Row, Col, Image, Dropdown } from "react-bootstrap";
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
import { useState } from "react";

export default function BoardItem({title, progress}){
  const [settings, setSettings] = useState([
    {
      text: 'Move Right',
      icon: ArrowRight,
      iconAlt: ArrowRightPrimary,
      active: false,
      activeVariant: 'primary',
      onClick: ()=>{console.log('move right')}
    },
    {
      text: 'Move Left',
      icon: ArrowLeft,
      iconAlt: ArrowLeftPrimary,
      active: false,
      activeVariant: 'primary',
      onClick: ()=>{console.log('move right')}
    },
    {
      text: 'Edit',
      icon: Edit,
      iconAlt: EditPrimary,
      active: false,
      activeVariant: 'primary',
      onClick: ()=>{console.log('move right')}
    },
    {
      text: 'Delete',
      icon: Delete,
      iconAlt: DeleteDanger,
      active: false,
      activeVariant: 'danger',
      onClick: ()=>{console.log('move right')}
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
            {/* <Button variant="transparent" className="p-0">
              
            </Button> */}
          <Dropdown>
            <Dropdown.Toggle variant="transparent" className="p-0">
              <Image src={More} height={24} width={24}/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {
                settings.map((setting, i)=>(
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
    </div>
  )
}