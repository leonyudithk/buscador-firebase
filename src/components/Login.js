import React from 'react';
import { Button, Container, Form, Image } from 'react-bootstrap';
import useForm from '../Hooks/useForm'
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux'                  
import { actionLoginAsync, loginGoogle } from '../redux/actions/actionLogin';

const Login = () => {

        const dispatch =useDispatch()

    const [formValue, handleInputChange, reset] = useForm({
            email: '',
            pass: '',
          
    })

  const {email, pass}= formValue
  
    const handleSubmit=(e)=>{
        e.preventDefault()
       console.log(formValue)
       dispatch(actionLoginAsync(email, pass))
        reset()
    }

    return (
        <div  style={{margin: '15%', marginLeft: '30%', marginRight: '30%'}}>
            <Form onSubmit ={handleSubmit}>
            <h1 style={{textAlign: 'center', color: 'blue'}}>Iniciar Sesion</h1>
            <hr/>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="email" value={formValue.email} onChange={handleInputChange} />
                </Form.Group>
               
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="pass" value={formValue.pass} onChange={handleInputChange}/>
                </Form.Group>
               
                <Container style={{justifyContent: 'center'}}>
                <Button type="submit" variant="info" style={{margin:"3%"}}  >
                <Image style={{width:"30%"}} src="https://res.cloudinary.com/danimel/image/upload/v1635784501/login_1_p33a7m.png" alt="" />
                </Button>

                <Button type="submit" variant="outline-info" style={{margin:"3%"}}  >
                <Image  src="https://res.cloudinary.com/danimel/image/upload/v1655397953/google_ywov5r.png" alt=""  onClick={()=> dispatch(loginGoogle())}/>
                </Button>

                <Button type="submit" variant="outline-info"  style={{margin:"1%"}}>
                <Image  src="https://res.cloudinary.com/danimel/image/upload/v1655397954/facebook_emylt7.png" alt="" />
                </Button>
                </Container>
                <div className="d-grid gap-2">
                <Button type="submit" variant="outline-info"  size="lg" >
                     <Link to="/register">Nuevo Usuario - Registrase</Link> 
                </Button>
                </div>
                  
            </Form>
        </div>
    );
};

export default Login;