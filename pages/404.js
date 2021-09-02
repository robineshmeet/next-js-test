import Link from "next/link"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [router])
    return (
        <>
            <Head>
                <title>Tests | NotFound</title>
                <meta name="keyword" content="tests" />
            </Head>
            <div className="not-found">
                <h1>Oooops.....</h1>
                <h2>That page cannot be found.</h2>
                <p>Go back to page <Link href="/"><a>HomePage</a></Link></p>
            </div>
        </>
    )
}

export default NotFound