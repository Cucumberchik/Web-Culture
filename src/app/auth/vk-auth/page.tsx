"use client";
import GetToken from "@/serverActions/vk-login";
import { NextPage } from "next";
import { useSearchParams } from "next/navigation";
import { ReactNode, useEffect } from "react";

const VK_Auth: NextPage = (): ReactNode => {
  const params = useSearchParams();
  // const getAccesToken = async () => {
  //   const id: any = params.get("code");
  //   const data = await GetToken(id);
  //   console.log(data);
  // };

  const obj = {
    payload: params.get("payload")
  }
  console.log(JSON.parse(obj.payload));
  
  // useEffect(() => {
    // getAccesToken();
  // }, []);

  return <></>;
};

export default VK_Auth;
