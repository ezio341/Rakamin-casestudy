import { Button, Image } from "react-bootstrap";

export default function ButtonIcon({text, icon, variant, noPadding, iconH=16, iconW=16, className}){
  return (
    <Button className={`${className} ${variant==='transparent'?`text-neutral-90`:''} ${noPadding?'p-0':''} s-12 font-weight-400 d-flex align-items-center`} variant={variant}>
      <Image className="me-2" src={icon} height={iconH} width={iconW}/>
      <span className="s-12 font-weight-700">
        {text}
      </span>
    </Button>
  )
}