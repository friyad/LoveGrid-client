import React from "react";
import CreateCampaignForm from "@/components/Dashboard/CreateCampaignForm";
import { Button } from "@mantine/core";
import { MoveLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LoveGrid - Add Campaign",
  description:
    "LoveGrid is an interactive donation platform designed to foster acts of kindness and support within communities.",
};

const UpdateCampaign = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center">
        <h2 className="text-2xl mxl:text-3xl font-daysOne text-gray-700">
          Update Campaign
        </h2>
        <Link href="/dashboard">
          <Button size="md">
            <MoveLeft />
            <span className="ml-1">Back</span>
          </Button>
        </Link>
      </div>

      <CreateCampaignForm />
    </div>
  );
};

export default UpdateCampaign;
