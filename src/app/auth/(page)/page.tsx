"use client";
import { NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import scss from "../auth.module.scss";
import Image from "next/image";
import google from "@/icons/google.svg";
import telgram from "@/icons/telegram.svg";
import vk from "@/icons/vk.svg";
import { auth, googleProvider } from "@/firebase/configure";
import { signInWithRedirect } from "firebase/auth";

const AuthenticationPage: NextPage = (): ReactNode => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleGoogleAuth = () => {
    signInWithRedirect(auth, googleProvider);
  };

  return (
    <main className={scss.auth}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.auth_content}>
            <div className={scss.auth_btns}>
              <div className={scss.title}>
                <h2>Страница для авторизация</h2>
                <p>Авторизуйтесь чтобы войти в аккаунт</p>
              </div>
              <button onClick={handleGoogleAuth}>
                <Image
                  src={google}
                  alt="google"
                />
                Продолжить в Google
              </button>
              <button>
                <Image
                  src={telgram}
                  alt="google"
                />
                Продолжить в Telegram
              </button>
              <button>
                <Image
                  src={vk}
                  alt="google"
                />
                Продолжить в VK
              </button>
            </div>
          </div>
          {windowWidth >= 500 ? (
            <div className={scss.author}>
              <div className={scss.author_content}>
                <blockquote>
                  За неделю мы создали сайт, <br /> на котором публикуются
                  интересные <br /> статьи о социальной инженерии. <br /> На
                  разработку сайтамы не <br /> потратили ни рубля.
                </blockquote>
                <div className={scss.user_author}>
                  <h1>R</h1>
                  <p>@root</p>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </main>
  );
};

export default AuthenticationPage;
