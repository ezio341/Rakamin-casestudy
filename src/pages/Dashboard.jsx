import { useDispatch, useSelector } from 'react-redux'
import BoardGroup from '../components/BoardGroup'
import { useEffect, useState } from 'react'
import { getTodos } from '../features/todoGroup/todoGroupAction'

export default function Dashboard(){
  const {data, loading, error} = useSelector(state=>state.todoGroup)
  const {userToken} = useSelector(state=>state.auth)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    if(!data.length && userToken){ 
      dispatch(getTodos(userToken))
    }
  })
  const variants = ['primary', 'success', 'warning', 'danger']
  return (
    <div className='board-container py-4 ps-3 ps-md-0'>
      {
        data.length &&
        data.map((board, i)=>{
          return(
            <div className='me-3' key={i}>
              <BoardGroup title={board.title} id={board.id} description={board.description} variant={variants[Math.floor((Math.random() * 4))]}/>
            </div>
          )
        })
      }
    </div>
  )
}