"use client";

import { Avatar, Burger, Button, Drawer } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/brand/logo-small.png";
import { usePathname, useRouter } from "next/navigation";
import { useDisclosure, useHeadroom, useWindowScroll } from "@mantine/hooks";
import ProfileMenu from "./ProfileMenu";

const navItems = [
  {
    id: 1,
    href: "/",
    name: "Home",
  },
  {
    id: 2,
    href: "/donations",
    name: "Donations",
  },
  {
    id: 3,
    href: "/statistics",
    name: "Statistics",
  },
  {
    id: 4,
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
            pathname === item.href
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
    <>
      <header
        className={`py-4 px-6 sm:px-10 grid z-50 min-h-[90px]
                ${
                  scroll.y <= 765
                    ? "relative -translate-y-0 border-none bg-transparent items-start"
                    : !pinned
                    ? "-translate-y-full bg-white/80 backdrop-blur-xl"
                    : "sticky top-0 bg-white/80 backdrop-blur-xl -translate-y-0 transition-all duration-500 border-b"
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

          <div className="flex ml-auto gap-3">
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
                  classNames={{ root: "bg-cusGreen" }}
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
                classNames={{ root: "bg-cusGreen" }}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
