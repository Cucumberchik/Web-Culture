"use client";
import { NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import scss from "./auth.module.scss";
import Image from "next/image";
import google from "@/icons/google.svg";
import telegram from "@/icons/telegram.svg";
import vk from "@/icons/vk.svg";
import * as VKID from "@vkid/sdk";
import { auth, googleProvider } from "@/firebase/configure";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import PostUser from "@/serverActions/login";

const AuthenticationPage: NextPage = (): ReactNode => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const navigation = useRouter();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleGoogleAuth = async () => {
    await signInWithPopup(auth, googleProvider).then(
      (result: { user: any }) => {
        const getCurrentYearAndMonth = (): string => {
          const now = new Date();
          const year = now.getFullYear();
          const month = now.getMonth() + 1;

          return `${year}${month.toString().padStart(2, "0")}`;
        };
        const yarnAndMonth = getCurrentYearAndMonth();
        const userObj: any = {
          username: "user",
          provider: "Google",
          date: yarnAndMonth,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          user_id: result.user.uid,
        };
        PostUser(userObj);
      }
    );
  };

  

  useEffect(() => {
    if (VKID) {
      VKID.Config.set({
        app: 51962972,
        redirectUrl:
          "https://polite-rational-ringtail.ngrok-free.app/auth/vk-auth", // Your redirect URL
      });
    }
  }, []);

  return (
    <main className={scss.auth}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.auth_content}>
            <div className={scss.auth_btns}>
              <div className={scss.title}>
                <h2>Страница для авторизации</h2>
                <p>Авторизуйтесь, чтобы войти в аккаунт</p>
              </div>
              <button onClick={handleGoogleAuth}>
                <Image
                  src={google}
                  alt="google"
                />
                Продолжить в Google
              </button>
              <button onClick={() => navigation.replace("/auth/telegram-auth")}>
                <Image
                  src={telegram}
                  alt="telegram_auth"
                />
                Продолжить в Telegram
              </button>
              <button onClick={() => VKID.Auth.login()}>
                <Image
                  src={vk}
                  alt="vk"
                />
                Продолжить в VK ID
              </button>
            </div>
          </div>
          {windowWidth >= 500 ? (
            <div className={scss.author}>
              <div className={scss.author_content}>
                <blockquote>
                  За неделю мы создали сайт, <br /> на котором публикуются
                  интересные <br /> статьи о социальной инженерии. <br /> На
                  разработку сайта мы не <br /> потратили ни рубля.
                </blockquote>
                <div className={scss.user_author}>
                  <h1>R</h1>
                  <p>@root</p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <script src="https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js" />
    </main>
  );
};

export default AuthenticationPage;

// VKID.Config.set({
//   app: 51962972, // Идентификатор приложения.
//   redirectUrl: "https://polite-rational-ringtail.ngrok-free.app", // Адрес для перехода после авторизации.
//   state: "AgwKkilmeZSDpCt3BclT", // Произвольная строка состояния приложения.
// });

// AgwKkilmeZSDpCt3BclT
// 140bb906140bb906140bb9060b17135d5a1140b140bb90672728a1b1ab3bc7ab34dacbb
