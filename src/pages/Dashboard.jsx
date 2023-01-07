import BoardGroup from '../components/BoardGroup'

export default function Dashboard(){
  const BoardDummy = [
    {
      title: 'board 1',
      duration: 'January - March',
      variant: 'success',
      item: [
        {
          title: 'Re-designed the zero-g doggie bags. No more spills!',
          progress: 100
        },
        {
          title: 'Re-designed the zero-g doggie bags. No more spills! more more and more text',
          progress: 60
        }
      ]
    },
    {
      title: 'board 1',
      duration: 'January - March',
      variant: 'primary',
      item: []
    }
  ]
  return (
    <div className='board-container py-5 ps-3 ps-md-0'>
      {
        BoardDummy.map((board, i)=>{
          return(
            <div className='me-3' key={i}>
              <BoardGroup title={board.title} boardItem={board.item} duration={board.duration} variant={board.variant}/>
            </div>
          )
        })
      }
    </div>
  )
}