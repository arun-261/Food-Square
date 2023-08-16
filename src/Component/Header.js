import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar   className="bg-body-dark ">
        <Container>
          <Navbar.Brand href="/" className='text-light'>
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkuT5PuTd1sNb2sPH2-RjlqsxZKfGuKJRNg&usqp=CAU"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}&nbsp;
           <b>Chef's Table</b> 
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header