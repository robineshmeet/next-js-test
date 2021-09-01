import Link from "next/link";
import Image from "next/image"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" height={128} width={120} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/tests"><a>All Test</a></Link>
        </nav>
    )
}

export default Navbar
