// components/Sidebar.tsx
import { useRouter, usePathname, useSearchParams  } from 'next/navigation'; // instead of next/router
//import { HomeIcon, ClipboardListIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { MdOutlineInventory } from "react-icons/md";
import { FaCog } from "react-icons/fa";

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: RiDashboardHorizontalFill },
  { label: 'Inventory', path: '/inventory', icon: MdOutlineInventory },
  { label: 'Settings', path: '/settings', icon: FaCog },
];

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <aside className="h-screen w-56 bg-[#003399] text-white flex flex-col py-4 px-3">
      <div className="text-2xl font-bold mb-6 pl-2">ERI-CHAN'S INVENTORY</div>
      <nav className="space-y-2">
        {navItems.map(({ label, path, icon: Icon }) => {
          const isActive = pathname === path;
          return (
            <button
              key={path}
              onClick={() => router.push(path)}
              className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all  w-full
                ${isActive ? 'bg-white text-gray-600' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}