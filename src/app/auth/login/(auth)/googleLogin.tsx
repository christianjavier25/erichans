"use client";

import { auth, provider } from "@/lib/firebaseServices";
import { signInWithPopup, User, signOut } from "firebase/auth";
import { useState } from "react";

interface LoginProps {
  onLogin: (user: User) => void;
}
export default function GoogleLogin({ onLogin }: LoginProps) {
  const [user, setUser] = useState<User | null>(null);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      onLogin(result.user); // Call the onLogin prop with the user
      //window.location.href = '/dashboard'; // Redirect to dashboard after login
      console.log("User signed in:", result.user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  //LOGOUT
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out!");
      // Optional: redirect to login page
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-100">
      {!user ? (
        <button
          onClick={handleGoogleSignIn}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Sign in with Google
        </button>
      ) : (
        <div className="text-center">
          <p className="mb-2">Welcome, {user.displayName}</p>
          <img
            src={user?.photoURL ?? "https://via.placeholder.com/150"}
            alt="User avatar"
            className="w-16 h-16 rounded-full mx-auto"
          />
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
