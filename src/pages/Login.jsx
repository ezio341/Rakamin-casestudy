import {Form, Container, Row, Col, Button, Alert, Spinner} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../features/auth/authActions'
import { useEffect, useState } from 'react'

export default function Login(){
  let navigate = useNavigate()
  
  const {loading, error, userToken} = useSelector(
    (state) => state.auth
  )
  useEffect(()=>{
    if(userToken && !loading){
      navigate('/')
    }
  },[userToken, navigate, loading])

  const dispatch = useDispatch()
  const [errorAlert, setErrorAlert] = useState(error)
  useEffect(()=>{
    setErrorAlert(error)
  }, [error])

  const handleSubmit = (evt) =>{
    evt.preventDefault()
    const form = evt.currentTarget
    let [email, password] = [evt.target[0].value, evt.target[1].value]
    if(!form.checkValidity()){
      evt.stopPropagation()
    }else{
      dispatch(login({email, password}))
    }
  }
  return (
    <Container className='py-5 px-4'>
      <div className='text-center s-48 font-weight-700 pb-5'>
        Kanban Board
      </div>
        <Alert show={!!errorAlert} variant='danger' onClose={()=>setErrorAlert(null)} dismissible>
          {errorAlert}
        </Alert>
      <Row className='justify-content-center pb-5'>
        <Col md="6" cols="12">
          <h2 className="pb-1">
            Login
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className='s-12 font-weight-700'>Email address</Form.Label>
              <Form.Control defaultValue="arga@mail.com" type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formGroupPassword">
              <Form.Label className='s-12 font-weight-700'>Password</Form.Label>
              <Form.Control defaultValue="password" type="password" placeholder="Password" />
            </Form.Group>
            <div className='d-flex justify-content-between align-items-center'>
              <Button className='d-flex align-items-center gap-1' type='submit' variant='primary'>
                Sign In
                {
                  loading && 
                  <Spinner size='sm' variant='white'/>
                }
              </Button>
              <div className='d-flex gap-2'>
                dont have an account? 
                <Link to={`/register`}>Register</Link>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}