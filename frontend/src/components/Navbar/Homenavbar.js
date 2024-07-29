import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Homenavbar.css';

function Homenavbar() {
  return (
    <div className='homenavbar'>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Navbar.Brand href="/" style={{ fontFamily: "arial"}}>
      <img src={require('../../assets/images/logo.png')} alt="Porsche" height="30" className="d-inline-block align-top" />
      <img src={require('../../assets/images/nameimg.jpeg')} alt="Porsche" height="20"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginRight:"10px"}}/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/Models">Models</Nav.Link>
          <Nav.Link href="/Purchase">Purchase</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Services</NavDropdown.Item>
            <NavDropdown.Item href="/">Experience</NavDropdown.Item>
            <NavDropdown.Item href="/">Find a dealer</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default Homenavbar;