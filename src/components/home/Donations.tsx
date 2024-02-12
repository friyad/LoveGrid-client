import React from "react";
import DonationCard from "../DonationCard";

const donationsData = [
  {
    id: 1,
    title: "",
    category: "",
    img: "",
    color: "",
    totalDonations: 10,
    tlDonateAmount: 1040,
    amount: 499,
    goal: 10000,
    description: "",
  },
];

const Donations = () => {
  return (
    <section className="relative py-44 border-b">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-5xl font-daysOne">Donations</h1>

        <div className="grid grid-cols-4 gap-12 mt-16">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
            return <DonationCard />;
          })}
        </div>
      </div>

      <div className="absolute z-[-1] inset-0 rotate-180 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </section>
  );
};

export default Donations;
