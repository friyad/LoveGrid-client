import Donations from "@/components/home/Donations";
import Featured from "@/components/home/Featured";
import Hero from "@/components/home/Hero";
import Successes from "@/components/home/Successes";
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
      <Hero isAuthenticated={season ? true : false} />
      <Donations />
      <Featured />
      <Successes />

      <div className="bg-white py-20 md:py-24 2xl:py-32">
        <div className="max-w-2xl mx-auto text-center px-6 xl:px-4">
          <h1 className="relative after:absolute after:-bottom-5 after:h-1 after:w-1/2 after:bg-cusGreen after:left-0 after:right-0 after:mx-auto after:rounded-full">
            We've got you covered.
          </h1>
          <div className="mt-12">
            <p className="text-sm 2xl:text-base font-inter">
              LoveGrid is a trusted leader in online fundraising. With simple
              pricing and a team of Trust & Safety experts in your corner, you
              can raise money or make a donation with peace of mind.
            </p>
          </div>
          <div className="flex max-sm:flex-col justify-center sm:gap-8 gap-4 mt-12">
            <button
              type="button"
              className="min-w-[140px] rounded px-4 py-2.5 text-sm tracking-wider font-semibold outline-none border text-white border-cusGreen bg-cusGreen hover:bg-transparent hover:text-cusGreen transition-all duration-300"
            >
              See Running Campaings
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
