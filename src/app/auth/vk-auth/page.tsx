"use client";
import PostUser from "@/serverActions/login";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import success from "@/icons/success.svg";
import spiner from "@/icons/spiner.svg";
import { Suspense } from "react";

const VK_Auth: any = (): ReactNode => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigation = useRouter();
  const params = useSearchParams();

  const parseUser = JSON.parse(`${params.get("payload")}`).user;

  const getCurrentYearAndMonth = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;

    return `${year}${month.toString().padStart(2, "0")}`;
  };

  const yarnAndMonth = getCurrentYearAndMonth();

  const user: LoginUserType = {
    user_id: parseUser.id,
    username: "user",
    photoURL: parseUser.avatar,
    provider: "VK",
    displayName: `${parseUser.first_name} ${parseUser.last_name}`,
    date: yarnAndMonth,
    email: "",
  };

  const handleUserLogin = async () => {
    const response = await PostUser(user);
    localStorage.setItem("hashTKay", response.randomToken);
    setIsLoading(response.loading);
  };

  useEffect(() => {
    handleUserLogin();
  }, []);

  useEffect(() => {
    if (!isLoading) navigation.replace("/");
  }, [isLoading]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
      }}>
      <p style={{ display: "flex", alignItems: "center" }}>
        <Image
          src={isLoading ? spiner : success}
          alt="check"
        />
        {isLoading ? "Минутку..." : "Успешно"}
      </p>
    </div>
  );
};

const VKAuth: NextPage = (): ReactNode => <Suspense children={VK_Auth} />;

export default VKAuth
