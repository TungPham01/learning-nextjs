import Link from "next/link";
import { Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getRandomJoke } from "../../lib/joke";

const Random = ({ joke }) => {
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>Chuyện cười ngẫu nhiên</Card.Title>
          <Card.Text>{joke.value}</Card.Text>
          <Link href="/posts">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const joke = await getRandomJoke();

  return {
    props: {
      joke,
    },
  };
};

export default Random;
