"use client"
import useUser from '@/zustands/user';
import { NextPage } from 'next';
import { ReactNode, useEffect } from 'react'

const LocalStorageClient:NextPage = ():ReactNode => {
    const {setToken} = useUser()

    useEffect(()=>{
        const token:string = localStorage.getItem("hashTKay")|| ""
        setToken(token)
    },[])
  return (
    <></>
  );
};

export default LocalStorageClient;