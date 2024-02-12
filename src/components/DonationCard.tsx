import React from "react";
import { FollowerPointerCard } from "./ui/FollowerPointerCard";
import { Button, Progress } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

const DonationCard = () => {
  return (
    <FollowerPointerCard>
      <div className="border border-gray-200 bg-white w-full max-w-sm shadow-[0px_0px_20px_#00000010] rounded-lg overflow-hidden p-3 group hover:shadow-xl transition duration-200 shadow-input">
        <Link href={`/campaigns/2432`}>
          <div className="rounded-lg overflow-hidden">
            <Image
              src="https://readymadeui.com/cardImg.webp"
              height={250}
              width={400}
              alt=""
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgkEsyd+669ub/3e//GZrqZivJmPr71Jp55DKwq7owcMmzc6uz8kkBADCKDCknjYFyAAAAAElFTkSuQmCC"
              className="w-full group-hover:scale-110 transition-transform duration-200"
            />
          </div>
        </Link>

        <div className="py-3">
          <div className="w-fit mx-auto py-1 px-3 rounded bg-cusOrange/10 text-cusOrange font-daysOne text-xs 2xl:text-sm">
            Education
          </div>
        </div>

        <div className="p-2 pt-1 group-hover:translate-x-2 transition duration-200">
          <Progress value={50} size="sm" color="orange" />
          <h2 className="text-base font-daysOne my-2 text-gray-700">
            Winter Storms Relief 2024
          </h2>
          <p className="text-sm text-gray-500 line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor.
          </p>
          <div className="mt-6 flex items-center flex-wrap gap-4">
            <div className="w-fit mr-auto py-1 px-3 rounded bg-cusGreen/5 text-cusGreen font-daysOne text-xs mxl:text-sm">
              $12.90 <span className="text-2xs"> raised</span>
            </div>
            <Link href={`/campaigns/2432`}>
              <Button variant="" size="sm">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </FollowerPointerCard>
  );
};

export default DonationCard;
