import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaEnvira} from 'react-icons/fa'

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" >
      <Container  className='nav-container' fluid>
        <Navbar.Brand href="#"> <FaEnvira className='icon'/><Link className='nav-link'  to="/home">Buy Cars</Link>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           {/* <Link>Home</Link> */}
            <Link className='nav-link'  to="/cars">Cars</Link>              
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;