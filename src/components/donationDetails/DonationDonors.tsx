import { Construction } from "lucide-react";
import React from "react";

const DonationDonors = () => {
  return (
    <div className="py-32 flex flex-col justify-center items-center gap-2 relative">
      <Construction className="size-14 xsm:size-16 xl:size-20 2xl:size-24 text-cusOrange" />
      <p className="text-sm xsm:text-base xl:text-lg 2xl:text-xl font-inter text-center font-medium text-gray-500">
        Developer working on this page
      </p>
    </div>
  );
};

export default DonationDonors;
