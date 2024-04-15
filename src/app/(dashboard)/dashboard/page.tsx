import React from "react";
import ChartsSection from "@/components/Dashboard/ChartsSection";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@mantine/core";
import MakeAdminModal from "@/components/Dashboard/MakeAdminModal";
import RunningCampaings from "@/components/Dashboard/RunningCampaings";

export const metadata: Metadata = {
  title: "LoveGrid - Dashboard",
  description:
    "LoveGrid is an interactive donation platform designed to foster acts of kindness and support within communities.",
};

const DashboardPage = async () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-5">
        <h2 className="text-2xl mxl:text-3xl font-daysOne text-cusViolet">
          Hello, Admin 👋🏻
        </h2>

        <div className="flex flex-wrap justify-end items-center gap-3">
          <MakeAdminModal />
          <Link href="/dashboard/create-campaign" className="w-full xsm:w-fit">
            <Button size="md" className="w-full xsm:w-fit bg-cusViolet">
              <Plus />
              <span>Add Campaign</span>
            </Button>
          </Link>
        </div>
      </div>

      <ChartsSection />
      <RunningCampaings />
    </div>
  );
};

export default DashboardPage;
