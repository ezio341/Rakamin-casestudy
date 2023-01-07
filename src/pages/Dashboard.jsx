import {Container} from 'react-bootstrap'
import BoardGroup from '../components/BoardGroup'

export default function Dashboard(){
  const BoardDummy = [
    {
      title: 'board 1',
      duration: 'January - March',
      variant: 'success',
      item: []
    },
    {
      title: 'board 1',
      duration: 'January - March',
      variant: 'primary',
      item: []
    }
  ]
  return (
    <Container>
      <div className='board-container py-5'>
        {
          BoardDummy.map((board, i)=>{
            return(
              <div className='me-3'>
                <BoardGroup title={board.title} boardItem={board.item} duration={board.duration} variant={board.variant} key={i}/>
              </div>
            )
          })
        }
      </div>
    </Container>
  )
}