// components/ProtectedRoute.tsx
"use client";
import { FiLoader } from "react-icons/fi";

import { useEffect, useState } from "react";
import {
  User,
  onAuthStateChanged,
  setPersistence,
  browserSessionPersistence,
  signOut,
} from "firebase/auth";
import { auth } from "@/lib/firebaseServices";
import { useRouter, usePathname } from "next/navigation";
import Sidebar from "./sideBar";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [isLogout, setIsLogout] = useState(false);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
      // Optionally redirect
      window.location.href = "/";
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  //Session persistence is set to browser session
  setPersistence(auth, browserSessionPersistence)
    .then(() => {
      // Now you can sign in the user
    })
    .catch((error) => {
      console.error("Failed to set session persistence", error);
    });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      console.log("User state changed:", user);
      if (!user) {
        router.replace("/"); //  Redirect if not logged in
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
    
  return (
    <div className="relative h-screen bg-gray-100 w-screen flex flex-row ">
      <div className="flex justify-between items-center  w-[16%] h-full">
        <Sidebar />
      </div>
      <div className="flex flex-col  w-[84%] p-4 h-full">
        <div className="py-2 px-3 bg-white  flex justify-between shadow-md items-center rounded-md mb-4">
          <h1 className="text-2xl font-bold uppercase">
            {pathname.split("/")[1]}
          </h1>
          <button
            onClick={() => {
              setIsLogout(true)}}
            className="text-red-500 hover:text-red-700"
          >
            Logout
          </button>
        </div>

        {children}
      </div>
      {
        isLogout && (
          <div className="absolute top-0 w-full h-full flex items-center justify-center  ">
            <div className="z-20 absolute top-0 bg-gray-100 opacity-40 w-full h-full"></div>
            <div className="z-50 absolute top-0 w-full h-full flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
                <p>Are you sure you want to logout?</p>
                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setIsLogout(false)}
                    className="bg-gray-300 text-gray-700 px-4 py-1 rounded hover:bg-gray-400"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>    
          </div>
        )
      }
    </div>
  );
}
