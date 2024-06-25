"use client";
import useUser from "@/zustands/user";
import { NextPage } from "next";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

const CheckUser: NextPage<{ scss: any }> = ({ scss }): ReactNode => {
  const { setUser, token } = useUser();
  const [data, setData] = useState<boolean>(true);
  const getCurrentYearAndMonth = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;

    return `${year}${month.toString().padStart(2, "0")}`;
  };
  const yarnAndMonth = getCurrentYearAndMonth();

  const handleGetUser = async () => {
    const response = await setUser(token, yarnAndMonth);

    setData(response);
  };
  useEffect(() => {
    handleGetUser();
  }, []);

  return !token && !data ? (
    <Link
      type="button"
      className={scss.auth_link}
      href="/auth">
      Авторизоваться
    </Link>
  ) : (
    <Link
      type="button"
      className={scss.auth_link}
      href="/dashboard">
      Профиль
    </Link>
  );
};

export default CheckUser;
