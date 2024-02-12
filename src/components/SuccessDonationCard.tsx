import { Button, Progress } from "@mantine/core";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SuccessDonationCard = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden xsm:p-3 group transition duration-200 grid grid-cols-1 md:grid-cols-7 gap-4">
      <div className="rounded-lg overflow-hidden md:col-span-3 h-[250px] xsm:h-[300px] sm:h-[400px] md:h-[260px] lg:h-[300px] mxl:h-[340px] 2xl:h-[380px]">
        <Image
          src="https://readymadeui.com/cardImg.webp"
          height={250}
          width={400}
          alt=""
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgkEsyd+669ub/3e//GZrqZivJmPr71Jp55DKwq7owcMmzc6uz8kkBADCKDCknjYFyAAAAAElFTkSuQmCC"
          className="w-full h-full group-hover:scale-110 transition-transform duration-200"
        />
      </div>

      <div className="md:col-span-4 border-2 bg-white border-gray-100 rounded-lg p-2 xsm:p-6">
        <div className="w-fit py-1 px-3 rounded bg-cusOrange/10 text-cusOrange font-daysOne text-sm 2xl:text-base">
          Education
        </div>

        <div className="group-hover:translate-x-2 transition duration-200 mt-2">
          <div className="flex justify-start items-center gap-3">
            <Progress value={100} size="md" color="green" className="w-full" />
            <p className="text-right text-cusGreen font-inter font-semibold text-sm 2xl:text-base">
              100%
            </p>
          </div>

          <h2 className="text-base mxl:text-lg 2xl:text-xl font-daysOne my-2 text-gray-700">
            Winter Storms Relief 2024
          </h2>
          <p className="text-sm 2xl:text-base text-gray-500 line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor.
          </p>

          <div className="flex justify-start items-center gap-3 mt-5">
            <div className="w-fit py-1 px-3 rounded bg-cusGreen/5 text-cusGreen font-daysOne text-sm mxl:text-base 2xl:text-lg">
              $12.90 <span className="text-xs"> raised</span>
            </div>
            <div className="w-fit py-1 px-3 rounded bg-cusViolet/5 text-cusViolet font-daysOne text-sm mxl:text-base 2xl:text-lg">
              40 <span className="text-xs"> Donors</span>
            </div>
          </div>

          <Link
            href={`/campaigns/2432`}
            className="mt-8 md:mt-6 mxl:mt-10 inline-block"
          >
            <Button variant="" size="sm" className="w-full xsm:w-fit">
              View Details
              <ArrowRight className="size-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessDonationCard;
