"use client";

import {
  HandCoins,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export const dashboardSidebarItems = [
  {
    id: 1,
    href: "/dashboard",
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    href: "/user/profile",
    name: "Profile",
    icon: User,
  },
  {
    id: 3,
    href: "/user/my-donations",
    name: "My Donations",
    icon: HandCoins,
  },
  {
    id: 4,
    href: "/user/settings",
    name: "Settings",
    icon: Settings,
  },
];

interface NavbarProps {
  session: any;
}

const DashboardSidebar = ({ session: user }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col justify-between w-64 h-[calc(100dvh-90px)] px-5 pb-8 overflow-y-auto bg-white border-r sticky top-0">
      <div className="space-y-3 flex flex-col py-4">
        <p className="text-gray-500 text-sm">Dashboard</p>

        {dashboardSidebarItems.map((item) => {
          // check if this user not an admin then don't show dashboard page
          if (!user?.role?.includes("admin") && item.href === "/dashboard") {
            return;
          }
          return (
            <Link href={item.href} key={item.id}>
              <button
                className={`font-semibold font-inter py-4 px-6 rounded-md w-full text-left flex justify-start items-center gap-3 ${
                  pathname === item.href ||
                  (item.href === "/dashboard" &&
                    pathname.substr(1).startsWith("dashboard"))
                    ? "bg-cusGreen text-white"
                    : "text-gray-500 hover:bg-gray-100 bg-gray-50"
                }`}
              >
                <item.icon className="size-5" />
                {item.name}
              </button>
            </Link>
          );
        })}
      </div>

      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="font-inter py-4 px-6 rounded-md w-full text-left flex justify-start items-center gap-3 bg-red-100 text-red-500 font-bold mt-16"
      >
        <LogOut className="size-5" strokeWidth="3" />
        Log Out
      </button>
    </aside>
  );
};

export default DashboardSidebar;
