"use server";
import { NextPage } from "next";
import scss from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import CheckUser from "../checkUser";
import { ReactNode } from "react";
import checkUser from "@/serverActions/checkUser";

const Header: NextPage = (): ReactNode => {
  const style: any = scss;

  return (
    <header className={scss.header}>
      <div className="container">
        <nav>
          <Link
            href="/"
            className={scss.head_logo}>
            <Image
              draggable={false}
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
          <CheckUser scss={style} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
