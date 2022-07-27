import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.modules.css";

function NavBar() {
  //   console.log(StyleNav);
  return (
    <Navbar bg="body" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/careLogo.png" alt="" width="auto" height="auto" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navBarText ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div>
        <img
          src="/topLeft.svg"
          alt=""
          style={{ position: "absolute", top: 0, right: "0px" }}
          className={`navBarRightSideImage`}
        />
      </div>
    </Navbar>
  );
}

export default NavBar;
