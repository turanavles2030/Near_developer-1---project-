import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
    <nav>
        <div className="logo">
        <Image src='/codebag.gif' width={150} height={150} alt="logo"/>
        </div>
        <Link href="/"><a >Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/service"><a>Service</a></Link>
        <Link href="/users"><a>Users</a></Link>

    </nav> );
}

export default Navbar;