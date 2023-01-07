import {Container} from 'react-bootstrap'

export default function DefaultLayout(props){
  return (
    <>
    <header className='bg-primary-surface d-flex align-items-center px-3'>
      Kanban Board
    </header>
      <Container className='content'>
        {props.children}
      </Container>
    <footer className='bg-primary-surface d-flex align-items-center justify-content-center'>
      developed by Arga
    </footer>
    </>
  )
}