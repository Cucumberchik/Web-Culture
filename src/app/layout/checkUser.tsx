"use client";
import useUser from "@/zustands/user";
import { NextPage } from "next";
import Link from "next/link";
import { ReactNode, useEffect } from "react";

const CheckUser: NextPage<{scss:any}> = ({ scss }): ReactNode => {
  const { checkUser, user } = useUser();
  useEffect(checkUser, []);

  return user == null ? (
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
