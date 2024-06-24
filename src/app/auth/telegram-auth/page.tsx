"use client";
import TelegramLoginButton from "@/components/TelegramLoginButton/TelegramLoginButton";
import PostUser from "@/serverActions/login";
import { NextPage } from "next";
import { ReactNode } from "react";

const TelegramAuth: NextPage = (): ReactNode => {
  const botName: any = process.env.NEXT_PUBLIC_API_BOT_NAME;

  const handleLoginTelegramUser = async (user: any) => {
    const getCurrentYearAndMonth = (): string => {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;

      return `${year}${month.toString().padStart(2, "0")}`;
    };
    const yarnAndMonth = getCurrentYearAndMonth();

    const userObj: LoginUserType = {
      displayName: `${user.first_name} ${user.last_name}`,
      username: "user",
      photoURL: user.photo_url,
      user_id: user.id,
      date: yarnAndMonth,
      provider: "Telegram",
      email: "",
    };

    const userToken: any = await PostUser(userObj);
    localStorage.setItem("hashTKay", userToken);
  };

  return (
    <main
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
      }}>
      <TelegramLoginButton
        botName={botName}
        buttonSize="large" // "large" | "medium" | "small"
        cornerRadius={3} // 0 - 20
        usePic={false} // true | false
        dataOnauth={handleLoginTelegramUser}
      />
    </main>
  );
};

export default TelegramAuth;
