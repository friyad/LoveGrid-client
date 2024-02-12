import { Construction } from "lucide-react";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "LoveGrid - Settings",
  description:
    "LoveGrid is an interactive donation platform designed to foster acts of kindness and support within communities.",
};

const SettingsPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 relative h-full">
      <Construction className="size-14 xsm:size-16 xl:size-20 2xl:size-24 text-cusOrange -mt-[10%]" />
      <p className="text-sm xsm:text-base xl:text-lg 2xl:text-xl font-inter text-center font-medium text-gray-500">
        Developer working on this page
      </p>
    </div>
  );
};

export default SettingsPage;
