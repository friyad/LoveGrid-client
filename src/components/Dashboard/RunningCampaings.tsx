"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Table,
  TableTr,
  TableTd,
  TableTbody,
  TableThead,
  TableTh,
  Button,
  Loader,
} from "@mantine/core";
import { useDispatch } from "react-redux";
import { useLazyGetCampaignsQuery } from "@/redux/campaign/campaignAPI";
import { useAppSelector } from "@/redux/hooks";
import {
  setDashCampData,
  setDashIsHasMore,
} from "@/redux/campaign/campaignSlice";

const RunningCampaings = () => {
  const dispatch = useDispatch();
  const [trigger, result] = useLazyGetCampaignsQuery();
  const { data, isLoading, originalArgs } = result;
  const { dashboardCampData, dashIsHasMore } = useAppSelector(
    (state) => state.campaign
  );

  const handleLoadmore = async () => {
    const res = await trigger((originalArgs || 0) + 1);
    if (res.data.length <= 0) {
      dispatch(setDashIsHasMore(false));
    }
  };

  useEffect(() => {
    if (dashboardCampData.length <= 0) {
      trigger(1);
    }
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(setDashCampData([...dashboardCampData, ...data]));
    }
    if (data?.length < 8) {
      dispatch(setDashIsHasMore(false));
    }
  }, [data]);

  return (
    <div className="mt-16 w-full overflow-auto">
      <h2 className="text-2xl mxl:text-3xl font-daysOne text-cusViolet">
        Running Campaigns:
      </h2>

      {dashboardCampData.length > 0 && !isLoading ? (
        dashboardCampData.length > 0 ? (
          // if at least 1 campaign have
          <>
            <Table
              highlightOnHover
              withTableBorder
              striped
              classNames={{
                table: "mt-8",
                th: "text-sm xl:text-base mxl:text-lg py-3 mxl:py-4 px-2 mxl:px-5 text-gray-700",
                td: "text-sm xl:text-base mxl:text-lg py-3 mxl:py-4 px-2 mxl:px-5",
              }}
            >
              <TableThead>
                <TableTr>
                  <TableTh></TableTh>
                  <TableTh>Title</TableTh>
                  <TableTh>Category</TableTh>
                  <TableTh>Raised</TableTh>
                  <TableTh>Goal</TableTh>
                  <TableTh>Donors</TableTh>
                  <TableTh></TableTh>
                  <TableTh></TableTh>
                  <TableTh></TableTh>
                </TableTr>
              </TableThead>
              <TableTbody>
                {dashboardCampData.map((item) => (
                  <TableTr key={item._id}>
                    <TableTd classNames={{ td: "max-w-[100px]" }}>
                      <div className="text-sm xl:xlrnded overflow-idden size-20 mxl:size-24">
                        <Image
                          src={item.img}
                          height={100}
                          width={100}
                          alt={item.title}
                          placeholder="blur"
                          blurDataURL={item.blurImg}
                          className="w-full object-cover object-center"
                        />
                      </div>
                    </TableTd>
                    <TableTd>
                      <p className="px-4 min-w-[200px]">{item.title}</p>
                    </TableTd>
                    <TableTd>{item.category}</TableTd>
                    <TableTd>
                      ${(item.tlDonateAmount || 0).toLocaleString()}
                    </TableTd>
                    <TableTd>${item.goal.toLocaleString()}</TableTd>
                    <TableTd>{item.totalDonations}</TableTd>
                    <TableTd>
                      <Link href={`/campaigns/${item._id}`}>
                        <Button size="sm">See Details</Button>
                      </Link>
                    </TableTd>
                    <TableTd>
                      <Link href={`/dashboard/update-campaign/${item._id}`}>
                        <Button size="sm" classNames={{ root: "bg-cusViolet" }}>
                          Update
                        </Button>
                      </Link>
                    </TableTd>
                    <TableTd>
                      <Button size="sm" classNames={{ root: "bg-red-500" }}>
                        Delete
                      </Button>
                    </TableTd>
                  </TableTr>
                ))}
              </TableTbody>
            </Table>

            {dashIsHasMore && (
              <div className="flex justify-center items-center mt-10">
                <Button
                  onClick={handleLoadmore}
                  size="md"
                  type="submit"
                  loading={isLoading}
                  className="bg-cusViolet"
                >
                  Load more
                </Button>
              </div>
            )}
          </>
        ) : (
          // if don't have any data in array...
          <div className="min-h-[40dvh] flex justify-center items-center">
            <p className="text-center text-sm lg:text-base mxl:text-lg font-inter">
              No data found
            </p>
          </div>
        )
      ) : (
        // If Loading.....
        <div className="flex justify-center items-center min-h-[40dvh]">
          <Loader type="dots" size="lg" color="#581796" />
        </div>
      )}
    </div>
  );
};

export default RunningCampaings;
