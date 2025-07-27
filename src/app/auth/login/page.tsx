"use client";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { auth, provider } from "@/lib/firebaseServices";
import { signInWithPopup, User, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
// interface LoginProps {
//   onLogin: (user: User) => void;
//   onChangeAction?: (action: { isLogin: boolean; isRegister: boolean }) => void;
// }

import { useRouter } from 'next/navigation';

export default function LoginPage() {
const [user, setUser] = useState<User | null>(null);
const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      router.push('/dashboard'); // redirect after login
    } catch (err: any) {
      setError(err.message);
    }
  };
  // const handleGoogleSignIn = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, provider);
  //     setUser(result.user);
  //     onLogin(result.user); // Call the onLogin prop with the user
  //     onChangeAction?.({ isLogin: false, isRegister: false });
  //     //window.location.href = '/dashboard'; // Redirect to dashboard after login
  //     console.log("User signed in:", result.user);
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //   }
  // };

  return (
    <Card className="w-full max-w-sm z-50 p-3">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
         {error && <div className="">
        <p className="text-red-500 mt-4 bg-red-200 px-2 py-1 rounded">Invalid Email or Password.</p>
        </div>}
      </CardHeader>
      <CardContent>
        <form onKeyDown={(event) => {
          if(event.key === 'Enter') {
            handleLogin();
          }
        }}>                                                                                        
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                {/* <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a> */}
              </div>
              <Input id="password" type="password" required onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full"  onClick={handleLogin}>
          Login
        </Button>
        {/* <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
          Login with Google
        </Button> */}
       
      </CardFooter>
      
    </Card>
  )
}
