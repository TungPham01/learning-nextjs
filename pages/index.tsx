import Layout from "../components/Layout.js";
import Link from "next/link";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <Layout>
      <h1>My next app!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Link href="/posts">
          <Button bsStyle="primary">Posts</Button>
        </Link>
      </p>
    </Layout>
  );
};

export default Home;
