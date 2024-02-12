"use client";

import { Burger, Button, Drawer } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/brand/logo-small.png";
import { usePathname, useRouter } from "next/navigation";
import { useDisclosure, useHeadroom, useWindowScroll } from "@mantine/hooks";
import ProfileMenu from "./ProfileMenu";
import HideComponentOn from "../HideComponentOn";

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
          className={`block font-semibold transition-all font-inter py-3 md:py-0 px-4 md:px-0 rounded-md md:rounded-none ${
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
        <div className="relative flex flex-wrap self-center items-center gap-4 max-w-screen-mxl mx-auto w-full">
          <Link href="/">
            <Image src={logo} alt="logo" className="w-28" />
          </Link>

          <ul className="hidden md:flex ml-12 space-x-6 lg:space-x-8">
            {items}
          </ul>

          <div className="flex items-center ml-auto gap-8">
            <div className="hidden lg:flex items-center gap-8">
              <Link href="/my-donations">
                <li
                  className={`inline-block font-semibold transition-all font-inter py-3 md:py-0 px-4 md:px-0 rounded-md md:rounded-none ${
                    pathname === "/my-donations"
                      ? "md:underline underline-offset-4 text-cusGreen font-bold bg-cusGreen-200 md:bg-transparent"
                      : "text-gray-500 bg-gray-50 md:bg-transparent"
                  }`}
                >
                  My Donations
                </li>
              </Link>

              <Link href="/statistics">
                <li
                  className={`inline-block font-semibold transition-all font-inter py-3 md:py-0 px-4 md:px-0 rounded-md md:rounded-none ${
                    pathname === "/statistics"
                      ? "md:underline underline-offset-4 text-cusGreen font-bold bg-cusGreen-200 md:bg-transparent"
                      : "text-gray-500 bg-gray-50 md:bg-transparent"
                  }`}
                >
                  Statistics
                </li>
              </Link>
            </div>

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
                  className="rounded-md px-6 hidden lg:inline-block"
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

      <Drawer
        opened={opened}
        onClose={toggle}
        title="LoveGrid"
        classNames={{ root: "lg:hidden" }}
      >
        <div className="grid gap-3">
          {user && (
            <div className="grid gap-2">
              <ProfileMenu user={user} />
              <h4 className="font-bold text-base">Hello 👋🏻, {user?.name}</h4>
            </div>
          )}

          <div className="grid gap-3 md:hidden mt-2">{items}</div>

          <>
            <Link href="/my-donations">
              <li
                className={`inline-block font-semibold transition-all font-inter py-3 px-4 rounded-md w-full ${
                  pathname === "/my-donations"
                    ? "md:underline underline-offset-4 text-cusGreen font-bold bg-cusGreen-200"
                    : "text-gray-500 bg-gray-50"
                }`}
              >
                My Donations
              </li>
            </Link>

            <Link href="/statistics">
              <li
                className={`inline-block font-semibold transition-all font-inter py-3 px-4 rounded-md w-full ${
                  pathname === "/statistics"
                    ? "md:underline underline-offset-4 text-cusGreen font-bold bg-cusGreen-200"
                    : "text-gray-500 bg-gray-50"
                }`}
              >
                Statistics
              </li>
            </Link>
          </>

          {!user && (
            <>
              <Button
                onClick={() => router.push("/login")}
                variant="outline"
                size="md"
                fullWidth
                className="rounded-md"
                color="green"
                classNames={{ root: "bg-transparent hover:bg-transparent" }}
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
          )}
        </div>
      </Drawer>
    </HideComponentOn>
  );
};

export default Navbar;
