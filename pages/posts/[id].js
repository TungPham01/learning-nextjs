import Link from "next/link";
import { Button, Card, Spinner } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPostById, getPostIds } from "../../lib/post";
import { useRouter } from "next/router";

const Post = ({ post }) => {
  const router = useRouter(); // nếu trang chưa tạo ra, isFallback của route ==== true thì đưa ra trang tạm thời
  if (router.isFallback) {
    return (
      <Spinner animation="border" role="status" variant="dark">
        <span className="sr-only"></span>
      </Spinner>
    );
  }

  // KHI CHẠY XONG getStaticProps
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link href="/posts">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPostIds(5);
  return {
    paths,
    // fallback: false, // bất kỳ path nào không return bởi getStaticPaths sẽ tới 404
    fallback: true, // bất kỳ path nào không return bởi getStaticPaths sẽ tới 404
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);
  return {
    props: {
      post,
    },
    revalidate: 1
    // 
  };
};

export default Post;
