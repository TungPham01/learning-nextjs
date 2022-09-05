import { Nav, Navbar } from "react-bootstrap";
import React from "react";
import Link from "../node_modules/next/link";

class NavBarMenu extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <Link href="/"><a>My Next App</a></Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link>Posts</Nav.Link>
            <Nav.Link>About</Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default NavBarMenu;
