import {Form, Container, Row, Col, Button} from 'react-bootstrap'

export default function Login(props){
  return (
    <Container>
      <Row className='justify-content-center py-5'>
        <Col md="6" cols="12">
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className='s-12 font-weight-700'>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className='s-12 font-weight-700'>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button type='submit' variant='primary'>Sign In</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}