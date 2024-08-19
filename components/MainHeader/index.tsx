import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";

import Background from "./Background";

import classes from './main-header.module.css';

export default function MainHeader(): JSX.Element {
    return (
        <>
            <Background />
            <header className={classes.header}>
                <Link href="/" className={classes.logo}>
                    <Image src={logoImg} alt="Logo" priority />
                    NextLevel Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li><Link href="/meals">Browse Meals</Link></li>
                        <li><Link href="/community">Foodies Community</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}