import { Alert, Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { register } from "../features/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Register(){
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {loading, error, userToken} = useSelector(state=>state.auth)
  const [errorAlert, setErrorAlert] = useState(error)

  useEffect(()=>{
    if(userToken && !loading){
      navigate('/')
    }
  },[userToken, navigate, loading])

  useEffect(()=>{
    setErrorAlert(error)
  }, [error])

  const handleSubmit = (evt) =>{
    evt.preventDefault()
    evt.preventDefault()
    const form = evt.currentTarget
    let [name, email, password, password_confirmation] = [evt.target[0].value, evt.target[1].value, evt.target[2].value, evt.target[3].value, evt.target[4].value]
    if(!form.checkValidity()){
      evt.stopPropagation()
    }else{
      dispatch(register({name, email, password, password_confirmation}))
    }
  }
  return (
    <>
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
            Register
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label className='s-12 font-weight-700'>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className='s-12 font-weight-700'>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className='s-12 font-weight-700'>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formGroupConfirmPassword">
              <Form.Label className='s-12 font-weight-700'>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className='d-flex justify-content-between align-items-center'>
              <Button className='d-flex align-items-center gap-1' type='submit' variant='primary'>
                Sign Up
                {
                  loading && 
                  <Spinner size='sm' variant='white'/>
                }
              </Button>
              <div className='d-flex gap-2'>
                already have an account? 
                <Link to={`/login`}>Login</Link>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}