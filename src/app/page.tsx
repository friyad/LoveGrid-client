import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Donations from "@/components/home/Donations";
import Featured from "@/components/home/Featured";
import Hero from "@/components/home/Hero";
import { authOptions } from "@/utils/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "LoveGrid - Home",
  description:
    "LoveGrid is an interactive donation platform designed to foster acts of kindness and support within communities.",
};

export default async function Home() {
  const season = await getServerSession(authOptions);

  return (
    <main className="">
      <Navbar season={season} />
      <Hero />
      <Donations />
      <Featured />
      <Footer />
    </main>
  );
}
