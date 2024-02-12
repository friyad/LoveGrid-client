import Image from "next/image";
import DonationCard from "@/components/DonationCard";
import {
  Avatar,
  Badge,
  Button,
  Progress,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
} from "@mantine/core";
import { Metadata } from "next";
import AboutDonation from "@/components/donationDetails/AboutDonation";
import DonationDonors from "@/components/donationDetails/DonationDonors";
import DonationUpdates from "@/components/donationDetails/DonationUpdates";
import Countdown_timer from "@/components/ui/CountdownTimer";
import { Timer } from "lucide-react";
import DonateNowModal from "@/components/donationDetails/DonateNowModal";

interface Props {
  params: { [key: string]: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `LoveGrid | Campaigns - ${params.donationID}`,
    description: `Explore the impact of compassion with LoveGrid's donation campaign. Dive into the details of ${params.donationID} and see how your contribution can make a difference.`,
  };
}

const DonationDetailsPage = ({ params }: Props) => {
  const { donationID } = params;

  return (
    <section className="min-h-[calc(100vh-90px)] relative overflow-hidden pb-44 px-6 2xl:px-4">
      <div className="max-w-screen-mxl mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-7 lg:grid-cols-12 gap-4 lg:gap-8">
          <div className="rounded-xl overflow-hidden h-[280px] sm:h-[330px] md:h-[400px] lg:h-[550px] 2xl:h-[600px] sm:col-span-4 lg:col-span-9">
            <Image
              src="https://readymadeui.com/cardImg.webp"
              height={250}
              width={400}
              alt=""
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAMElEQVR4nGNgkEsyd+669ub/3e//GZrqZivJmPr71Jp55DKwq7owcMmzc6uz8kkBADCKDCknjYFyAAAAAElFTkSuQmCC"
              className="w-full h-full"
            />
          </div>

          <div className="bg-white rounded-xl border-2 sm:col-span-3 lg:col-span-3 text-center p-5 flex flex-col justify-between">
            <div>
              <h1 className="text-xl lg:text-2xl mxl:text-3xl 2xl:text-4xl font-daysOne text-cusGreen">
                $365,577
              </h1>
              <p className="text-2xs xl:text-xs 2xl:text-sm mt-2 font-inter font-medium">
                raised of{" "}
                <span className="text-cusGreen font-daysOne">$500,000.00</span>{" "}
                goal
              </p>

              <div className="flex justify-start items-center gap-3 mt-5">
                <Progress
                  value={50}
                  size="md"
                  color="green"
                  className="w-full"
                />
                <p className="text-right text-cusGreen font-inter font-semibold text-xs xl:text-sm 2xl:text-base">
                  40%
                </p>
              </div>

              <div className="bg-cusOrange/5 rounded-lg py-3 xl:py-5 mt-5">
                <div className="text-cusOrange font-bold text-xl xl:text-2xl 2xl:text-3xl flex justify-center items-center gap-3">
                  <Timer className="size-5 xl:size-7 2xl:size-8" />
                  <Countdown_timer time={Date.now() + 10000} />
                </div>
              </div>
            </div>

            <DonateNowModal />
          </div>
        </div>

        <div className="mt-6 xl:mt-10">
          <div className="flex justify-between items-center col-span-9">
            <div className="flex justify-start items-center gap-3">
              <Avatar src="" className="size-10 xl:size-12 2xl:size-14" />
              <h4 className="text-xs xl:text-sm 2xl:text-base">
                <span className="text-xs xl:text-base 2xl:text-xl font-daysOne">
                  Peter Harris{" "}
                </span>
                is organizing this fundraiser.
              </h4>
            </div>
          </div>

          <h1 className="my-8 md:my-4 xl:my-6 2xl:my-10">
            Winter Storms Relief 2024
          </h1>

          <Tabs
            defaultValue="about"
            variant="outline"
            classNames={{
              tabSection: "",
              list: "justify-end flex-col sm:flex-row",
              tab: "text-xs xl:text-base 2xl:text-lg hover:bg-gray-50 font-semibold aria-selected:text-cusGreen aria-selected:bg-cusGreen/10 px-4 sm:px-8 py-4 sm:py-3",
              panel: "mt-6 2xl:mt-10",
            }}
          >
            <TabsList>
              <TabsTab value="about">About this Campaign</TabsTab>
              <TabsTab value="donors">
                <span>Donors</span>
                <Badge color="green" size="lg" className="ml-2">
                  20
                </Badge>
              </TabsTab>
              <TabsTab value="update">Updates</TabsTab>
            </TabsList>

            <TabsPanel value="about">
              <AboutDonation />
            </TabsPanel>
            <TabsPanel value="donors">
              <DonationDonors />
            </TabsPanel>
            <TabsPanel value="update">
              <DonationUpdates />
            </TabsPanel>
          </Tabs>
        </div>

        <h1 className="mt-28">Other Donations</h1>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-4 mxl:gap-8 max-w-fit sm:max-w-3xl lg:max-w-full mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].slice(0, 4).map((item) => {
            return <DonationCard key={item} />;
          })}
        </div>
      </div>

      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-2/3 rounded-full bg-cusGreen-200 opacity-20 blur-[100px]" />
      </div>
    </section>
  );
};

export default DonationDetailsPage;
