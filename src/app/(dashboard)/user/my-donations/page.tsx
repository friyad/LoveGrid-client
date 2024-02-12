import {
  Table,
  TableTr,
  TableTd,
  TableTbody,
  TableThead,
  TableTh,
  Button,
} from "@mantine/core";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "LoveGrid - My Donations",
  description:
    "LoveGrid is an interactive donation platform designed to foster acts of kindness and support within communities.",
};

const MyDonations = () => {
  const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const rows = elements.map((element) => (
    <TableTr key={element}>
      <TableTd classNames={{ td: "max-w-[100px]" }}>
        <div className="text-sm xl:xlrnded overflow-idden w-20 mxl:w-24">
          <Image
            src="https://readymadeui.com/cardImg.webp"
            height={100}
            width={100}
            alt=""
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgkEsyd+669ub/3e//GZrqZivJmPr71Jp55DKwq7owcMmzc6uz8kkBADCKDCknjYFyAAAAAElFTkSuQmCC"
            className="w-full"
          />
        </div>
      </TableTd>
      <TableTd>
        <p className="px-4 min-w-[200px]">Winter Storms Relief 2024</p>
      </TableTd>
      <TableTd>Education</TableTd>
      <TableTd>${(4546546).toLocaleString()}</TableTd>
      <TableTd>${(179).toLocaleString()}</TableTd>
      <TableTd>44987</TableTd>
      <TableTd>
        <Link href={`/campaigns/2432`}>
          <Button variant="" size="sm">
            See Details
          </Button>
        </Link>
      </TableTd>
    </TableTr>
  ));

  return (
    <div className="max-w-screen-3xl mx-auto">
      <h2 className="text-2xl mxl:text-3xl font-daysOne text-cusGreen">
        My Donations:
      </h2>

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
            <TableTh>My Donation</TableTh>
            <TableTh>Donors</TableTh>
            <TableTh></TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>{rows}</TableTbody>
      </Table>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-4 mxl:gap-6 mt-10 max-w-fit sm:max-w-3xl lg:max-w-full mx-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
          return <MyDonationCard key={item} />;
        })}
      </div> */}
    </div>
  );
};

export default MyDonations;
