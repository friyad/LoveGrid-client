import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/home/Hero";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function Home() {
  const season = await getServerSession(authOptions);

  return (
    <main className="">
      <Navbar season={season} />
      <Hero />
    </main>
  );
}
