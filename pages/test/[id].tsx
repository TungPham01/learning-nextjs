import { useRouter } from "next/router"
import Link from 'next/link'


export default function MyApp({ Component, pageProps }) {
    const router = useRouter();
    console.log('router: ', router)
    console.log('test: ', router.query.id)
    return (
        <>
            <Link href="/">Goto home</Link>
            <h1>hello test/abc --- {router.query.id}</h1>
        </>
    )
  }
