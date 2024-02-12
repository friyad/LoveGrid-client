import ChartsSection from "@/components/Dashboard/ChartsSection";
import { Button } from "@mantine/core";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "LoveGrid - Dashboard",
  description:
    "LoveGrid is an interactive donation platform designed to foster acts of kindness and support within communities.",
};

const DashboardPage = async () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl mxl:text-3xl font-daysOne text-gray-700">
          Hello, Admin 👋🏻
        </h2>
        <Link href="/dashboard/create-campaign">
          <Button size="md">
            <Plus />
            <span>Add Campaign</span>
          </Button>
        </Link>
      </div>

      <ChartsSection />
    </div>
  );
};

export default DashboardPage;
