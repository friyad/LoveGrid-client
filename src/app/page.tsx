import Donations from "@/components/home/Donations";
import Featured from "@/components/home/Featured";
import Hero from "@/components/home/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LoveGrid - Home",
  description:
    "LoveGrid is an interactive donation platform designed to foster acts of kindness and support within communities.",
};

export default async function Home() {
  return (
    <main className="">
      <Hero />
      <Donations />
      <Featured />
    </main>
  );
}
