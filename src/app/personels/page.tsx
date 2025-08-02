"use client";

import ProtectedRoute from "@/components/protectedRoute";
import { IoMdAdd } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { useRouter, usePathname, useSearchParams  } from 'next/navigation';
export default function Home() {

  const router = useRouter();
    const products = [
        { name: "John Doe", image: <FaUserTie className="w-full h-full text-gray-500" /> , path: '/personels/information?name=John Doe' },
        { name: "Jenny Doe", image: <FaUserTie className="w-full h-full text-gray-500" />, path: '/personels/information?name=Jenny Doe' },
        { name: "Juan Dela Cruz", image: <FaUserTie className="w-full h-full text-gray-500" />, path: '/personels/information?name=Juan Dela Cruz' }, 
    ];
  return (
    <ProtectedRoute>
      <div className="grid grid-cols-5 gap-4 p-4 grid-rows-3 h-full">
        {
            products.map((product, index) => (
                <div key={index}
                onClick={() => router.push(product.path)}
                className="w-full h-full flex flex-col space-y-3 cursor-pointer hover:bg-sky-200 row-span-1 bg-white shadow-md rounded-md p-6">
                    {product.image}
                    <h2 className="text-lg font-semibold self-center">{product.name}</h2>
                </div>
            ))
        }
        
        <div className="w-1/2 h-1/2 self-center flex flex-col space-y-3 cursor-pointer hover:bg-sky-200 row-span-1 bg-gray-100 shadow-md rounded-md p-6">
            
            <IoMdAdd className="w-full h-full"/>

        </div>
      </div>
    </ProtectedRoute>
  );
}
