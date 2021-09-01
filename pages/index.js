import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Tests | Home</title>
      <meta name="keyword" content="tests"/>
    </Head>
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        This information is used to shape Next.js' roadmap and prioritize features.
        You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
      </p>
      <Link href="/tests" >
        <a className={styles.btn}>See All Test</a>
      </Link>
    </div>
    </>
  )
}
