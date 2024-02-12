import { MailOpen } from "lucide-react";
import React from "react";

const DonationUpdates = () => {
  return (
    <div className="py-32 flex flex-col justify-center items-center gap-4">
      <MailOpen className="size-12 xsm:size-14 xl:size-16 2xl:size-20 text-cusViolet-400" />
      <p className="text-sm xsm:text-base xl:text-lg 2xl:text-xl font-inter text-center font-medium text-gray-500">
        No updates for this campaign just yet
      </p>
    </div>
  );
};

export default DonationUpdates;
