import { Button, Image } from "react-bootstrap";

export default function ButtonIcon({text, icon, variant, noPadding}){
  return (
    <Button className={`${variant==='transparent'?`text-neutral-90`:''} ${noPadding?'p-0':''} s-12 font-weight-400`} variant={variant}>
      <span className="me-2">
        <Image src={icon} height={16} width={16}/>
      </span>
      {text}
    </Button>
  )
}