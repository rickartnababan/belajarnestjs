import Link from "next/link"
export default function Header() {
    return (
        <header>
            <Link href="/">
                <img src="/images/logo/desadigi.jpeg" alt="lst logo" width={50} />
            </Link>
            <Link href="/about">About</Link>
            <Link href="/contact-us">Contact Us</Link>

        </header>
    )
}