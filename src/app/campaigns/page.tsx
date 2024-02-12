import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import heroImg from "@/assets/images/campaign-img.jpg";
import DonationCard from "@/components/DonationCard";

export const metadata: Metadata = {
  title: "LoveGrid - Campaigns",
  description:
    "LoveGrid is an interactive donation platform designed to foster acts of kindness and support within communities.",
};

const DonationsPage = () => {
  return (
    <section className="">
      <div className="h-[50vh] border relative overflow-hidden grid">
        <div className="relative z-10 h-fit self-center max-w-screen-mxl mx-auto w-full px-6 2xl:px-4 text-center xl:text-left">
          <h1 className="text-cusGreen">Explore Campaigns</h1>
          <p className="mt-2 xl:mt-4 text-sm lg:text-base mxl:text-lg 2xl:text-xl xl:max-w-2xl text-gray-500">
            Explore compassion, make a difference. Donate or raise money for
            what matters to you most.
          </p>
        </div>

        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,#00994031_0,#00994000_50%,#00994000_100%)] bg-blend-multiply" />
        <Image
          src={heroImg}
          alt="Love Grid Hero Image"
          placeholder="blur"
          className="absolute inset-0 z-0 w-full h-full object-cover object-center opacity-5"
        />
        <div className="absolute inset-0 z-[1] h-full w-full bg-[linear-gradient(to_right,#00994015_1px,transparent_1px),linear-gradient(to_bottom,#00994015_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      </div>

      <div className="relative min-h-screen">
        <div className="max-w-screen-mxl mx-auto pb-28 md:pb-32 2xl:pb-44 px-6 2xl:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-4 mxl:gap-8 mt-10 max-w-fit sm:max-w-3xl lg:max-w-full mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
              return <DonationCard key={item} />;
            })}
          </div>
        </div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>
    </section>
  );
};

export default DonationsPage;
