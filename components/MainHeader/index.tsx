import Link from "next/link";

import logoImg from "@/assets/logo.png";

import classes from './main-header.module.css';

export default function MainHeader(): JSX.Element {
    return (
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <img src={logoImg.src} alt="Logo" width={logoImg.width} height={logoImg.height} />
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li><Link href="/meals">Browse Meals</Link></li>
                    <li><Link href="/community">Foodies Community</Link></li>
                </ul>
            </nav>
        </header>
    );
}