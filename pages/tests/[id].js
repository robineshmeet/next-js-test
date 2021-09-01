export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    const paths = data.map((tester) => {
        return {
            params: { id: tester.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return {
        props: { tester: data }
    }
}

const TesterDetails = ({ tester }) => {
    return (
        <div>
            <h1>{tester.name}</h1>
            <p>{tester.email}</p>
            <p>{tester.website}</p>
            <p>{tester.address.city}</p>
        </div>
    )
}

export default TesterDetails
