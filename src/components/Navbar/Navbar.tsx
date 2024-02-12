"use client";

import { Burger, Button, Divider, Drawer } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/brand/logo-small.png";
import { usePathname, useRouter } from "next/navigation";
import { useDisclosure, useHeadroom, useWindowScroll } from "@mantine/hooks";
import ProfileMenu from "./ProfileMenu";
import HideComponentOn from "../HideComponentOn";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";
import { dashboardSidebarItems } from "../Dashboard/DashboardSidebar";

const navItems = [
  {
    id: 1,
    href: "/",
    name: "Home",
  },
  {
    id: 2,
    href: "/campaigns",
    name: "Campaigns",
  },
  {
    id: 3,
    href: "/about-us",
    name: "About Us",
  },
];

interface NavbarProps {
  season: any;
}

const Navbar = ({ season: user }: NavbarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const pinned = useHeadroom({ fixedAt: 120 });
  const [scroll] = useWindowScroll();

  const items = navItems.map((item) => {
    return (
      <Link href={item.href} key={item.id}>
        <li
          className={`block font-semibold transition-all font-inter py-3 md:py-0 px-4 md:px-0 rounded-md md:rounded-none text-sm lg:text-base ${
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href))
              ? "md:underline underline-offset-4 text-cusGreen font-bold bg-cusGreen-200 md:bg-transparent"
              : "text-gray-500 bg-gray-50 md:bg-transparent"
          }`}
        >
          {item.name}
        </li>
      </Link>
    );
  });

  return (
    <HideComponentOn>
      <header
        className={`py-4 px-6 sm:px-10 grid z-50 min-h-[90px] bg-white border-b
                ${
                  scroll.y <= 765
                    ? "relative -translate-y-0 bg-transparent items-start"
                    : !pinned
                    ? "-translate-y-full bg-white/80 backdrop-blur-xl"
                    : "sticky top-0 bg-white/80 backdrop-blur-xl -translate-y-0 transition-all duration-500"
                }
            `}
      >
        <div
          className={`relative flex flex-wrap self-center items-center gap-4 w-full
          ${
            pathname === "/dashboard" ||
            pathname.startsWith("/user/") ||
            pathname.startsWith("/dashboard/")
              ? ""
              : "max-w-screen-mxl mx-auto"
          }`}
        >
          <Link href="/">
            <Image src={logo} alt="logo" className="w-28" />
          </Link>

          <ul className="hidden md:flex ml-12 space-x-6 lg:space-x-8">
            {items}
          </ul>

          <div className="flex items-center ml-auto">
            {/* Check if user exist then show My Donations page */}
            {user && (
              <div className="hidden lg:flex items-center gap-8 mr-8">
                <Link href="/user/my-donations">
                  <li
                    className={`inline-block font-semibold transition-all font-inter py-3 md:py-0 px-4 md:px-0 rounded-md md:rounded-none ${
                      pathname === "/user/my-donations"
                        ? "md:underline underline-offset-4 text-cusGreen font-bold bg-cusGreen-200 md:bg-transparent"
                        : "text-gray-500 bg-gray-50 md:bg-transparent"
                    }`}
                  >
                    My Donations
                  </li>
                </Link>

                {/* Check if this user is an admin show Statatistics page otherwise not */}
                {user.role.includes("admin") && (
                  <Link href="/dashboard">
                    <li
                      className={`inline-block font-semibold transition-all font-inter py-3 md:py-0 px-4 md:px-0 rounded-md md:rounded-none ${
                        pathname === "/dashboard"
                          ? "md:underline underline-offset-4 text-cusGreen font-bold bg-cusGreen-200 md:bg-transparent"
                          : "text-gray-500 bg-gray-50 md:bg-transparent"
                      }`}
                    >
                      Dashboard
                    </li>
                  </Link>
                )}
              </div>
            )}

            {user ? (
              <div className="hidden lg:inline-block">
                <ProfileMenu user={user} />
              </div>
            ) : (
              <>
                <Button
                  onClick={() => router.push("/login")}
                  variant="outline"
                  size="md"
                  className="rounded-md px-6 hidden lg:inline-block mr-3"
                  color="green"
                  classNames={{ root: "bg-transparent hover:bg-transparent" }}
                >
                  Log In
                </Button>
                <Button
                  onClick={() => router.push("/signup")}
                  size="md"
                  className="rounded-md px-6 hidden lg:inline-block"
                >
                  Sign Up
                </Button>
              </>
            )}

            <Burger
              opened={opened}
              onClick={toggle}
              size="lg"
              color="green"
              className="lg:hidden"
            />
          </div>
        </div>
      </header>

      {/* Sidebar for small devices */}
      <Drawer
        opened={opened}
        onClose={toggle}
        title="LoveGrid"
        classNames={{
          root: "lg:hidden",
          title: "text-xl font-daysOne text-cusGreen",
        }}
      >
        <div className="grid gap-2">
          {/* Show profile avatar if user exist */}
          {user && (
            <>
              <div className="grid gap-2">
                <ProfileMenu user={user} />
                <h4 className="font-bold text-base">Hello 👋🏻, {user?.name}</h4>
              </div>
              <Divider className="my-2" />
            </>
          )}

          <div className="grid gap-2 md:hidden">
            {items}
            <Divider className="my-2" />
          </div>

          {/* Show dashboard items if user exist */}
          {user &&
            dashboardSidebarItems.map((item) => {
              // check if this user not an admin then don't show dashboard page
              if (!user.role.includes("admin") && item.href === "/dashboard") {
                return;
              }

              return (
                <Link href={item.href} key={item.id}>
                  <li
                    className={`inline-block text-sm font-semibold transition-all font-inter py-3 px-4 rounded-md w-full ${
                      pathname === item.href
                        ? "text-cusGreen font-bold bg-cusGreen-200"
                        : "text-gray-500 bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </li>
                </Link>
              );
            })}

          {/* Show Log In and Sign Up button if user doesn't exist */}
          {!user ? (
            <>
              <Button
                onClick={() => router.push("/login")}
                variant="outline"
                size="md"
                fullWidth
                className="rounded-md"
                color="green"
                classNames={{
                  root: "bg-transparent hover:bg-transparent mt-16",
                }}
              >
                Log In
              </Button>
              <Button
                onClick={() => router.push("/signup")}
                size="md"
                fullWidth
                className="rounded-md"
              >
                Sign Up
              </Button>
            </>
          ) : (
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="font-inter py-3 px-6 rounded-md w-full text-left flex justify-start items-center gap-3 bg-red-100 text-red-500 font-semibold mt-16 text-sm"
            >
              <LogOut className="size-4" strokeWidth="2" />
              Log Out
            </button>
          )}
        </div>
      </Drawer>
    </HideComponentOn>
  );
};

export default Navbar;
