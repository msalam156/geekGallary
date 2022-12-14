import { useRef } from 'react';
import {NavDropdown, Navbar, Nav, Form, Container, Button} from 'react-bootstrap';


function Header(props) {
  const inputRef = useRef();

  const formSubmitted =  e => {
      e.preventDefault();
      props.setSearchKey(inputRef.current.value);
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="./">Geek Gallary</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex" onSubmit = {formSubmitted} >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              ref = {inputRef}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;