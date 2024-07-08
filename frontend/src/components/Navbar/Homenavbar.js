import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Homenavbar.css';

function Homenavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="/" style={{ fontFamily: "arial"}}>
      <img src={require('../../assets/images/logo.png')} alt="Porsche" height="30" className="d-inline-block align-top" />
      <img src={require('../../assets/images/nameimg.jpeg')} alt="Porsche" height="20"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginRight:"10px"}}/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Homenavbar;