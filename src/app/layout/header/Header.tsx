import { NextPage } from "next";
import { ReactNode } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

const Header: NextPage = (): ReactNode => {
  return (
    <header className={scss.header}>
      <div className="container">
        <nav>
          <Link href="/" className={scss.head_logo}>
            <Image
              width={30}
              height={30}
              src="/logo.svg"
              alt="logo"
            />
            <p>Web-Культура</p>
          </Link>
          <Link
            className={scss.link}
            href="/about-us">
            О нас
          </Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Header;
