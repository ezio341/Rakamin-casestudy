import {Container} from 'react-bootstrap'
import ButtonIcon from '../components/ButtonIcon'
import PlusIcon from '../icons/plus.svg'

export default function DefaultLayout(props){
  return (
    <>
    <header className='bg-primary-surface d-flex align-items-center px-3 border-bottom border-1 border-neutral-40'>
      <span className='s-18 font-weight-700 pe-2 me-1'>
        Product Roadmap
      </span>
      <ButtonIcon className="px-3 py-1 radius-8" icon={PlusIcon} iconH={12} iconW={12} text="Add New Group" variant="primary"/>
    </header>
      <Container fluid className='content px-sm-3 px-0'>
        {props.children}
      </Container>
    <footer className='bg-primary-surface d-flex align-items-center justify-content-center'>
      developed by Arga
    </footer>
    </>
  )
}