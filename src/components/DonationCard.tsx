import React from "react";
import { FollowerPointerCard } from "./FollowerPointerCard";
import { Button } from "@mantine/core";

const DonationCard = () => {
  return (
    <FollowerPointerCard>
      <div className="border shadow-[0px_0px_20px_#00000010] bg-white w-full max-w-sm rounded-xl overflow-hidden p-3">
        <div className="rounded-xl overflow-hidden">
          <img src="https://readymadeui.com/cardImg.webp" className="w-full" />
        </div>

        <div className="py-3">
          <div className="w-fit mx-auto py-1 px-3 rounded bg-cusOrange/10 text-cusOrange font-daysOne">
            Education
          </div>
        </div>

        <div className="p-2 pt-1">
          <h2 className="text-lg font-daysOne mb-2 text-gray-700">
            Winter Storms Relief 2024
          </h2>
          <p className="text-sm text-gray-500 line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor.
          </p>
          <div className="mt-6 flex items-center flex-wrap gap-4">
            <div className="w-fit mr-auto py-1 px-3 rounded bg-cusGreen/5 text-cusGreen font-daysOne">
              <span className="text-xs">For: </span> $12.90
            </div>
            <Button variant="" size="md" classNames={{ root: "bg-cusGreen" }}>
              Donate Now
            </Button>
          </div>
        </div>
      </div>
    </FollowerPointerCard>
  );
};

export default DonationCard;
