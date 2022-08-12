import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { actionLogoutAsyn } from '../redux/actions/actionLogin';
import { useDispatch } from 'react-redux';


const NavBars = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
                <Image width="11%" src="https://res.cloudinary.com/danimel/image/upload/v1635784762/medical-symbol_z9wjaf.png" alt="" />
                Nutrición
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link  to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link to="/add" >Add</Link></Nav.Link>
            <Nav.Link ><Link to="/buscar" >Buscar</Link></Nav.Link>
           </Nav>
        </Container>
        <Nav>
             <Button variant="outline-primary" onClick={() => dispatch(actionLogoutAsyn())}>
                 <Image  width="25%" src="https://res.cloudinary.com/danimel/image/upload/v1635784501/login_1_p33a7m.png" alt="" />
             </Button>
        </Nav>
        
      </Navbar>

    </div>
  );
};

export default NavBars;