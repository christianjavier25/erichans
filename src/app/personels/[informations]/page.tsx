import ProtectedRoute from "@/components/protectedRoute";
import { IoMdAdd } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";

export default function Home() {

    const products = [
        { name: "John Doe", image: <FaUserTie className="w-full h-full text-gray-500" /> },
        { name: "Jenny Doe", image: <FaUserTie className="w-full h-full text-gray-500" /> },
        { name: "Juan Dela Cruz", image: <FaUserTie className="w-full h-full text-gray-500" /> }, 
    ];
  return (
    <ProtectedRoute>
      <div className="grid grid-cols-5 gap-4 p-4 grid-rows-3 h-full">
        Hello USER!
      </div>
    </ProtectedRoute>
  );
}
