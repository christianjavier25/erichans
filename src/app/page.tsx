"use client";

import Head from "next/head";
import { User } from "firebase/auth";
import { act, useState } from "react";
import { Button } from "@/components/ui/button";
import GoogleLogin from "./auth/login/(auth)/googleLogin";
import LoginPage from "./auth/login/page";

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const [action, setAction] = useState<{
    isLogin: boolean;
    isRegister: boolean;
  } | null>(null);

  return (
    <>
      
      <div className="realtive flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to Eri-Chan's Inventory
        </h1>
        <p className="text-lg mb-4">Manage your inventory efficiently.</p>
        <Button variant={"default"} className="mb-4" onClick={() => setAction({ isLogin: true, isRegister: false })}>
          
          Login
        </Button>
        {(action?.isLogin) && user == null && (
          <div className="absolute top-0 w-full h-full flex items-center justify-center bg-gray-200 ">
            <div className="z-20 absolute top-0 bg-gray-100 opacity-40 w-full h-full"></div>
            <div className="z-50 absolute top-0 w-full h-full flex justify-center items-center">
           
                <LoginPage  />
              
              
            </div>
          </div>
        )}
      </div>
    </>
  );
}
