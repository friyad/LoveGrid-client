import { Button } from "@mantine/core";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import DonationCard from "../DonationCard";

const donationsData = [
  {
    id: 1,
    title: "", // -----------
    category: "", // ----
    img: "",
    color: "", // ----------
    totalDonations: 10,
    tlDonateAmount: 1040,
    goal: 10000, // ----------
    fundRaiserName: "", // ----------
    fundRaiserPhoto: "",
    lastDate: "", // ----------
    description: "", // ----------
  },
];

const Donations = () => {
  return (
    <section className="relative py-20 md:py-24 2xl:py-32 px-6 2xl:px-4 overflow-hidden">
      <div className="max-w-screen-mxl mx-auto">
        <div className="flex justify-between items-center space-x-2">
          <h1 className="">Campaigns</h1>
          <Link href={`/campaigns`}>
            <Button variant="" size="sm">
              See More
              <ArrowRight className="size-4 ml-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-4 mxl:gap-8 mt-10 max-w-fit sm:max-w-3xl lg:max-w-full mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
            return <DonationCard key={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Donations;
