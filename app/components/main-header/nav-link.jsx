'use client';

import Link from 'next/link';

import classes from './main-header.module.css';
import { usePathname } from 'next/navigation';

export default function NavLink({ children, href }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.navLink} ${classes.active}`
          : classes.navLink
      }
    >
      {children}
    </Link>
  );
}
