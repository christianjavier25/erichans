// components/ProtectedRoute.tsx
"use client";
import { FiLoader } from "react-icons/fi";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebaseServices";
import { useRouter, usePathname } from "next/navigation";
import { User } from "firebase/auth";
import Sidebar from "./sideBar";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (!user) {
        router.replace("/auth/login"); //  Redirect if not logged in
      } else {
        setLoading(false); //  Render content when logged in
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading)
    return (
      <div className="absolute top-0 w-full h-full flex justify-center items-center">
          <FiLoader className="w-8 h-8 animate-spin" />
      </div>
    );
  const pathname = window.location.pathname;


  return <div className="h-screen bg-gray-100 w-screen flex flex-row ">
    
    
    <div className="flex justify-between items-center  w-[16%] h-full">

    <Sidebar/>
    </div>
    <div className="flex flex-col  w-[84%] p-4 h-full">
      <div className="py-2 px-3 bg-white  flex justify-between shadow-md items-center rounded-md mb-4">
        <h1 className="text-2xl font-bold uppercase">{pathname.split("/")[1]}</h1>
        <button
          onClick={() => router.push("/auth/logout")}
          className="text-red-500 hover:text-red-700"
        >
          Logout
        </button>

      </div>

      {children}
    </div>

  </div>;
}
