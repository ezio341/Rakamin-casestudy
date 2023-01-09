import { Dropdown } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../features/auth/authSlice"
import groupSlice from "../features/todoGroup/todoGroupSlice"
import itemSlice from "../features/todoItem/todoItemSlice"

export default function AuthStatus () {
  const dispatch = useDispatch()
  const {userToken} = useSelector(state=>state.auth)

  if(!userToken){
    return <p>You are not logged in</p>
  }

  const onLogout = () =>{
    dispatch(groupSlice.setData([]))
    dispatch(itemSlice.setData([]))
    dispatch(logout())
  }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success">
        User
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as='button' onClick={()=>onLogout()}>
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}