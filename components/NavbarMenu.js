import { Nav, Navbar } from "react-bootstrap";
import React from "react";
import Link from "../node_modules/next/link";

class NavBarMenu extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>My Next App</Navbar.Brand>
          <Nav>
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/posts" passHref>
              <Nav.Link>Posts</Nav.Link>
            </Link>
            <Link href="/jokes/random" passHref>
              <Nav.Link>Jokes</Nav.Link>
            </Link>
            <Link href="/books" passHref>
              <Nav.Link>Books</Nav.Link>
            </Link>
            <Link href="/about" passHref>
              <Nav.Link>About</Nav.Link>
            </Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default NavBarMenu;
