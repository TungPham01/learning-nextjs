import Head from "next/head";
import { Container } from "react-bootstrap";
import NavBarMenu from "./NavbarMenu.js";

const Layout = ({children}) => {
  return (
    <Container>
      <Head>
        <title>My Next App</title>
      </Head>

      <header>
        <NavBarMenu/>
      </header>

      <main>{children}</main>
    </Container>
  );
};

export default Layout;
