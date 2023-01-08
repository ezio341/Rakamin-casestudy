import { useNavigate } from "react-router-dom"
import { Dropdown } from "react-bootstrap"

export default function AuthStatus () {
  let auth = {user: null}
  let navigate = useNavigate()

  if(!auth.user){
    return <p>You are not logged in</p>
  }

  const onLogout = () =>{
    auth.signout()
    navigate('/')
  }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="transparent" className="p-0">
        User
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={onLogout}>
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}