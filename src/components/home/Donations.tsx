import { Button } from "@mantine/core";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import DonationCard from "../DonationCard";
import { campaignAPI } from "@/redux/campaign/campaignAPI";
import { store } from "@/redux/store";
import { ICampaign } from "@/types/campaignTypes";

const Donations = async () => {
  const { data, isSuccess } = await store.dispatch(
    campaignAPI.endpoints.getCampaigns.initiate(1)
  );

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
          {isSuccess ? (
            // if request is success then...
            // Show the cards if there is at least 1 data
            data.length > 0 ? (
              data.map((item: ICampaign) => {
                return <DonationCard key={item._id} data={item} />;
              })
            ) : (
              // if don't have any data in array...
              <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4 py-20 xsm:py-28 xl:py-36">
                <p className="text-center text-sm mxl:text-base font-inter">
                  No data found
                </p>
              </div>
            )
          ) : (
            // if request is failed...
            // then show a failed message to UI
            <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4 py-20 xsm:py-28 xl:py-36">
              <p className="text-center text-sm mxl:text-base font-inter">
                Failed to load data
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Donations;
