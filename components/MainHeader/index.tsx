import Link from "next/link";

import logoImg from "@/assets/logo.png";

export default function MainHeader(): JSX.Element {
    return (
        <header>
            <h1>Main Header</h1>
            <Link href="/">
                <img src={logoImg.src} alt="Logo" width={logoImg.width} height={logoImg.height} />
                NextLevel Food
            </Link>
            <nav>
                <ul>
                    <li><Link href="/meals">Browse Meals</Link></li>
                    <li><Link href="/community">Foodies Community</Link></li>
                </ul>
            </nav>
        </header>
    );
}