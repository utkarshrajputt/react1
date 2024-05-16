import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import LogoWhite from '../assets/img/logo-white.svg';
import "./Navbar.css";

function NavbarWeb() {
  return (
    <div className="con">
      <div className="row">
        <div className="col-12 mx-auto">
          <Navbar bg="dark" variant="dark" expand="lg" className="Nav">
            <Container fluid>
            <Navbar.Brand href="#"><img src={LogoWhite} alt='' /></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
             
                <Nav
                  className="ms-auto my-2 my-lg-2"
                  style={{ maxHeight: "200px" }}
                  navbarScroll
                >
                  <Nav.Link href="/" className="a">Home</Nav.Link>
                  
                  <Nav.Link href="/Services" className="a">Services</Nav.Link>
                  
                  <Nav.Link href="/About" className="a">About</Nav.Link>
                    
                  {/* <Nav.Link href="#action4">Contact</Nav.Link> */}


                  <NavDropdown title="Contact" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Sales</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Purchase
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                    LinkedIn
                    </NavDropdown.Item>
                  </NavDropdown>
                  
                </Nav>
                <Form className="d-flex">
                  {/* <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button> */}
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
}

export default NavbarWeb;
