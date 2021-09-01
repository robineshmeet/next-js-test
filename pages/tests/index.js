import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Testers.module.css"

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    return {
        props: { testers: data }
    }
}
const Index = ({ testers }) => {
    return (
        <>
            <Head>
                <title>testers | All Test</title>
                <meta name="keyword" content="testers" />
            </Head>
            <div className={styles.container}>
                <h1>All Test</h1>
                {testers.map(test => (
                    <Link href={`/testers/${test.id}`} key={test.id}>
                        <a className={styles.single}>
                            <h3>{test.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Index
