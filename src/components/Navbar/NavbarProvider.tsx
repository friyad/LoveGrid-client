import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";
import Navbar from "./Navbar";

// At first I was calling the getServerSession function from the root layout
// and passing the data into Navbar. But, I noticed that it is preventing SSG feature
// That's why I decided to create this component as a server component and then call the
// getServerSession here and pass the data to navbar.

// The reason why I am doing it instead of using useSession(), because, they encouraged on their
// docs to use getServerSession on app router
const NavbarProvider = async () => {
  const season = await getServerSession(authOptions);
  return (
    <>
      <Navbar season={season} />
    </>
  );
};

export default NavbarProvider;
