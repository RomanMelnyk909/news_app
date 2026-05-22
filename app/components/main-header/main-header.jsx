import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo.jpg';

import classes from './main-header.module.css';
import NavLink from '@/app/components/main-header/nav-link';

const PATHNAMES = [
  {
    title: 'News',
    href: '/news',
  },
  {
    title: 'Archive',
    href: '/archive',
  },
];

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={logo} alt="NewsApp logo" priority />
        <span className={classes.logoText}>NewsApp</span>
      </Link>
      <nav className={classes.nav}>
        <ul>
          {PATHNAMES.map(({ title, href }) => (
            <NavLink key={href} href={href}>
              {title}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}
