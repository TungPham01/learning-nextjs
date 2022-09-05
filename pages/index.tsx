import Layout from "../components/Layout.js";
import Link from "next/link";

const Home = () => {
  return (
    <Layout>
      <Link href="/about">About</Link>
    </Layout>
  );
};

export default Home;
