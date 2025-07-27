import ProtectedRoute from "@/components/protectedRoute";
import { IoMdAdd } from "react-icons/io";

export default function Home() {

    const products = [
        { name: "Chili Garlic Oil", image: "/chiligarlicoil.svg" },
        { name: "Siomai", image: "/siomai.svg" },
        { name: "Pares & Mami", image: "/paresmami.svg" }, 
        { name: "Drinks", image: "/drinks.svg" },   
    ];
  return (
    <ProtectedRoute>
      <div className="grid grid-cols-5 gap-4 p-4 grid-rows-3 h-full">
        {
            products.map((product, index) => (
                <div key={index} className="w-full h-full flex flex-col space-y-3 cursor-pointer hover:bg-sky-200 row-span-1 bg-white shadow-md rounded-md p-6">
                    <img src={product.image} className="w-[60%] self-center" alt={product.name}/>
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
