import {
  BookCheck,
  CloudRainWind,
  Globe,
  Percent,
  SquareUser,
  TrendingUp,
} from "lucide-react";
import React from "react";

const featuredData = [
  {
    id: 1,
    title: "Trusted",
    description:
      "Since 2020 we are helping many of people to raise millions on online",
    icon: <BookCheck className="text-cusViolet size-6 2xl:size-8" />,
  },
  {
    id: 2,
    title: "Fundraising Coach",
    description:
      "Our expert fundraising coaches are available for truly personal campaign support",
    icon: <SquareUser className="text-cusViolet size-6 2xl:size-8" />,
  },
  {
    id: 3,
    title: "Fee Free Donation",
    description:
      "Our low 4% platform fee means we don’t bug your donors for 15% tips on checkout",
    icon: <Percent className="text-cusViolet size-6 2xl:size-8" />,
  },
  {
    id: 4,
    title: "Extend Your Reach",
    description: "Our powerful SEO system help you reach way more people",
    icon: <TrendingUp className="text-cusViolet size-6 2xl:size-8" />,
  },
  {
    id: 5,
    title: "Crowdfund Anything!",
    description: "Raise money for anything that matters to you",
    icon: <CloudRainWind className="text-cusViolet size-6 2xl:size-8" />,
  },
  {
    id: 6,
    title: "Fundraising Freedom",
    description: "Available globally and in every major currency",
    icon: <Globe className="text-cusViolet size-6 2xl:size-8" />,
  },
];

const Featured = () => {
  return (
    <div className="bg-cusViolet-100/20 border-y">
      <div className="py-20 md:py-24 2xl:py-32 max-w-screen-mxl mx-auto px-6 2xl:px-4">
        <div className="mb-16 max-w-2xl text-center mx-auto">
          <h1 className="mb-6">Our Features</h1>
          <p className="mt-6 font-inter text-sm">
            Supercharge your fundraising efforts with our unique tools, features
            and personal support. Helping you raise more money than you could
            elsewhere!
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 max-md:max-w-lg mx-auto gap-8">
          {featuredData.map((item) => {
            const { id, title, description, icon } = item;

            return (
              <div
                key={id}
                className="p-5 lg:p-8 xl:p-4 mxl:p-6 2xl:p-8 flex gap-4 bg-white rounded-md border border-cusViolet-200 first:shadow-[0_14px_40px_-11px_#5d607f33] last:shadow-[0_14px_40px_-11px_#5d607f33]"
              >
                <div className="size-12 2xl:size-14 bg-cusViolet/5 rounded-lg flex justify-center items-center">
                  {icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-gray-700">
                    {title}
                  </h3>
                  <p className="text-xs xsm:text-sm mt-2 text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured;
