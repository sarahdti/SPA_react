import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { isLogin } from '../../../utils';
import './Navbar.css'
import { useState } from 'react';



function MyNavbar(){
    const expand = 'md'
    const [loginStatus, setLoginStatus] =useState(isLogin() ?'خروج' : 'ورود')
    function logoutHandler(){
      document.cookie = "username=admin; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
      setLoginStatus('خروج')
    }
return(
    <Navbar style={{backgroundColor:'rgb(186,182,253)'}} expand={expand} className=" mb-3">
    <Container>
      <Navbar.Brand style={{fontFamily:'Lalezar', fontSize: '25px'}} href="#">ورزش سان</Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Offcanvas
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <NavLink to='/' className={'nav-link'}>خانه</NavLink>
            <NavLink to='/about' className={'nav-link'}>درباره ما</NavLink>
            <NavLink to='/blog' className={'nav-link'}>بلاگ</NavLink>
            <NavLink to='/panel' className={'nav-link'}>پنل</NavLink>
            {isLogin() ? <NavLink to='/login' onClick={logoutHandler} className={'nav-link'}>{loginStatus}</NavLink>
            :<NavLink to='/login' className={'nav-link'}>{loginStatus}</NavLink>}
            
            
          </Nav>
          
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
)
}
export default MyNavbar;