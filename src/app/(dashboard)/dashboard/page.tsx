import React from "react";
import ChartsSection from "@/components/Dashboard/ChartsSection";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Table,
  TableTr,
  TableTd,
  TableTbody,
  TableThead,
  TableTh,
  Button,
} from "@mantine/core";
import Image from "next/image";
import MakeAdminModal from "@/components/Dashboard/MakeAdminModal";

export const metadata: Metadata = {
  title: "LoveGrid - Dashboard",
  description:
    "LoveGrid is an interactive donation platform designed to foster acts of kindness and support within communities.",
};

const DashboardPage = async () => {
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
          <Button size="sm">See Details</Button>
        </Link>
      </TableTd>
      <TableTd>
        <Link href={`/dashboard/update-campaign/21213412341234`}>
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
  ));

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-5">
        <h2 className="text-2xl mxl:text-3xl font-daysOne text-gray-700">
          Hello, Admin 👋🏻
        </h2>

        <div className="flex flex-wrap justify-end items-center gap-3">
          <MakeAdminModal />
          <Link href="/dashboard/create-campaign" className="w-full xsm:w-fit">
            <Button size="md" className="w-full xsm:w-fit">
              <Plus />
              <span>Add Campaign</span>
            </Button>
          </Link>
        </div>
      </div>

      <ChartsSection />

      <div className="mt-16 w-full overflow-auto">
        <h2 className="text-2xl mxl:text-3xl font-daysOne text-cusGreen">
          Running Campaigns:
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
              <TableTh>Goal</TableTh>
              <TableTh>Donors</TableTh>
              <TableTh></TableTh>
              <TableTh></TableTh>
              <TableTh></TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>{rows}</TableTbody>
        </Table>
      </div>
    </div>
  );
};

export default DashboardPage;
