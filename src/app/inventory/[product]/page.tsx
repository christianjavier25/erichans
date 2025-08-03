import ProtectedRoute from "@/components/protectedRoute";
import { IoMdAdd } from "react-icons/io";

export default function Home() {

    const products = [
        { name: "Available Stocks", image: "/paresmami.svg", }, 
        { name: "Projected Sales", image: "/siomai.svg" },
        { name: "Total Sales", image: "/chiligarlicoil.svg" },
        { name: "Expenses", image: "/drinks.svg" },   
    ];
  return (
    <ProtectedRoute>
      <div className="w-full h-full flex flex-col space-y-4 p-4">
        <div className="flex justify-around items-center space-x-5 mb-4 h-[16%]">
            {
                products.map((product, index) => (
                    <div className="w-[20%] h-full flex flex-row space-x-3 bg-gray-100 rounded-lg shadow-md bg-white">
                <div className="h-full w-[20%] bg-blue-500 rounded-l-lg ">

                </div>
                <div className="h-full w-[80%] flex flex-col space-y-2 p-1 self-center">
                    <h3 className="text-sm"></h3>
                    <h1 className="text-2xl font-medium">PHP 999,999.00</h1>
                    <h1 className="text-lg font-semibold self-start opacity-60">{product.name}</h1>
                </div>
            </div>
                ))
            }
            

        </div>
      </div>
    </ProtectedRoute>
  );
}
