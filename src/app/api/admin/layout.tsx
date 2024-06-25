"use client";
import { NextPage } from "next";
import { ReactNode, useState } from "react";
import scss from "./admin.module.scss";
import { useRouter } from "next/navigation";
import useUser from "@/zustands/user";

const AdminLayout: NextPage<{ children: ReactNode }> = ({
  children,
}): ReactNode => {
    const [pathname, setPathname] = useState('')
    const navigate = useRouter()
    const {user} = useUser()
  return (
    <main className={scss.main}>
      <div className="container">
        <div className={scss.content}>
          <nav>

          </nav>
          {children}
        </div>
      </div>
    </main>
  );
};

export default AdminLayout;
