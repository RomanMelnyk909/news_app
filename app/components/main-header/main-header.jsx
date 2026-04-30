import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.jpg";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logo} alt="NewsApp logo" priority />
        <span className={classes.logoText}>NewsApp</span>
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/" className={classes.navLink}>Home</Link>
          </li>
          <li>
            <Link href="/news" className={classes.navLink}>News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
