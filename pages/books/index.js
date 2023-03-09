import Link from "next/link";
import { Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getBooks } from "../../lib/book";

const Random = ({ books }) => {
  return (
    <Layout>
      {books.map((books, key) => (
        <Card key={key} className="my-3 shadow">
          <Card.Body>
            <Card.Title>Tên sách: {books.bookName}</Card.Title>
            <Card.Text>Nội dung: {books.bookContent}</Card.Text>
            <Link href="/posts">
              <Button variant="dark">Back</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const books = await getBooks();
  console.log(books);

  return {
    props: {
      books,
    },
  };
};

export default Random;
