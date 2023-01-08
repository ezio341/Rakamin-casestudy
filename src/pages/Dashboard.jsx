import { useDispatch, useSelector } from 'react-redux'
import BoardGroup from '../components/BoardGroup'
import { useEffect } from 'react'
import { getTodos } from '../features/todoGroup/todoGroupAction'

export default function Dashboard(){
  const {list, loading, error} = useSelector(state=>state.todoGroup)
  const {userToken} = useSelector(state=>state.auth)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(!list.length && userToken){ 
      console.log('asd')
      dispatch(getTodos(userToken))
    }
  }, [list, dispatch, userToken])
  const variants = ['primary', 'success', 'warning', 'danger']
  return (
    <div className='board-container py-4 ps-3 ps-md-0'>
      {
        list &&
        list.map((board, i)=>{
          return(
            <div className='me-3' key={i}>
              <BoardGroup title={board.title} duration={board.description} variant={variants[Math.floor((Math.random() * 4))]}/>
            </div>
          )
        })
      }
    </div>
  )
}