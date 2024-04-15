"use client";

import { useLazyGetCampaignsQuery } from "@/redux/campaign/campaignAPI";
import { ICampaign } from "@/types/campaignTypes";
import React, { useEffect } from "react";
import DonationCard from "../DonationCard";
import { Button, Loader } from "@mantine/core";
import { setCampaignData, setIsHasMore } from "@/redux/campaign/campaignSlice";
import { useAppSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";

const CampaignItems = () => {
  const dispatch = useDispatch();
  const [trigger, result] = useLazyGetCampaignsQuery();
  const { data, isLoading, originalArgs } = result;
  const { campaignData, isHasMore } = useAppSelector((state) => state.campaign);

  const handleLoadmore = async () => {
    const res = await trigger((originalArgs || 0) + 1);
    if (res.data.length <= 0) {
      dispatch(setIsHasMore(false));
    }
  };

  useEffect(() => {
    if (campaignData.length <= 0) {
      trigger(1);
    }
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(setCampaignData([...campaignData, ...data]));
    }
    if (data?.length < 8) {
      dispatch(setIsHasMore(false));
    }
  }, [data]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-4 mxl:gap-8 mt-10 max-w-fit sm:max-w-3xl lg:max-w-full mx-auto">
      {campaignData.length > 0 && !isLoading ? (
        campaignData.length > 0 ? (
          // if at least 1 campaign have
          <>
            {campaignData.map((item: ICampaign) => {
              return <DonationCard key={item._id} data={item} />;
            })}

            {isHasMore && (
              <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4 flex justify-center items-center mt-10">
                <Button
                  onClick={handleLoadmore}
                  size="md"
                  type="submit"
                  loading={isLoading}
                  className=""
                >
                  Load more
                </Button>
              </div>
            )}
          </>
        ) : (
          // if don't have any data in array...
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4 py-20 xsm:py-28 xl:py-36">
            <p className="text-center text-sm mxl:text-base font-inter">
              No data found
            </p>
          </div>
        )
      ) : (
        // If Loading.....
        <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4 py-20 xsm:py-28 xl:py-36 flex justify-center items-center">
          <Loader type="dots" size="lg" color="#009940" />
        </div>
      )}
    </div>
  );
};

export default CampaignItems;
