import { NextPage } from "next";
import { ReactNode } from "react";

const AuthLayout: NextPage<{ children: ReactNode }> = ({
  children,
}): ReactNode => {
  return children;
};

export default AuthLayout;
