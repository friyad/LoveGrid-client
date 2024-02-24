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
import DonationDonors from "@/components/donationDetails/DonationDonors";
import DonationUpdates from "@/components/donationDetails/DonationUpdates";
import Countdown_timer from "@/components/ui/CountdownTimer";
import { Timer } from "lucide-react";
import DonateNowModal from "@/components/donationDetails/DonateNowModal";
import { store } from "@/redux/store";
import { campaignAPI } from "@/redux/campaign/campaignAPI";
import { ICampaign } from "@/types/campaignTypes";

interface Props {
  params: { [key: string]: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Get campaign data using donation campaign ID and
  // generate metadata based on this campaign data
  const { data } = await store.dispatch(
    campaignAPI.endpoints.getSignleCampaign.initiate(params.donationID)
  );
  return {
    title: `LoveGrid | Campaigns - ${data?.title}`,
    description: data?.description,
    authors: [{ name: data?.fundRaiserName, url: "https://github.com/friyad" }],
  };
}

const DonationDetailsPage = async ({ params }: Props) => {
  const { donationID } = params;
  const { data, isSuccess } = await store.dispatch(
    campaignAPI.endpoints.getSignleCampaign.initiate(donationID)
  );
  const { data: otherCmpData } = await store.dispatch(
    campaignAPI.endpoints.getCampaigns.initiate(1)
  );

  // if the request failed and don't have any data then
  // show this failed UI
  if (!data)
    return (
      <section className="min-h-[calc(100vh-90px)] max-w-screen-mxl mx-auto pb-44 px-6 2xl:px-4 flex justify-center items-center">
        <p className="text-center text-sm mxl:text-base font-inter">
          Failed to load this campaign
        </p>
      </section>
    );

  // If everything is ok then show the campaign details page
  const {
    _id,
    title,
    category,
    img,
    blurImg,
    color,
    totalDonations,
    tlDonateAmount,
    goal,
    fundRaiserName,
    fundRaiserPhoto,
    lastDate,
    description,
  } = data;

  return (
    <section className="min-h-[calc(100vh-90px)] relative overflow-hidden pb-44 px-6 2xl:px-4">
      <div className="max-w-screen-mxl mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-7 lg:grid-cols-12 gap-4 lg:gap-8">
          <div className="rounded-xl overflow-hidden h-[280px] sm:h-[330px] md:h-[400px] lg:h-[550px] 2xl:h-[600px] sm:col-span-4 lg:col-span-9 border bg-white">
            <Image
              src={img}
              height={250}
              width={400}
              alt=""
              placeholder="blur"
              blurDataURL={blurImg}
              className="w-full h-full object-center object-cover"
            />
          </div>

          <div className="bg-white rounded-xl border sm:col-span-3 lg:col-span-3 text-center p-5 flex flex-col justify-between">
            <div>
              <h1 className="text-xl lg:text-2xl mxl:text-3xl 2xl:text-4xl font-daysOne text-cusGreen">
                ${tlDonateAmount}
              </h1>
              <p className="text-2xs xl:text-xs 2xl:text-sm mt-2 font-inter font-medium">
                raised of{" "}
                <span className="text-cusGreen font-daysOne">
                  ${parseFloat(goal).toLocaleString()}
                </span>{" "}
                goal
              </p>

              <div className="flex justify-start items-center gap-3 mt-5">
                <Progress
                  value={Math.round((tlDonateAmount! / goal) * 100)}
                  size="md"
                  color="green"
                  className="w-full"
                />
                <p className="text-right text-cusGreen font-inter font-semibold text-xs xl:text-sm 2xl:text-base">
                  {Math.round((tlDonateAmount! / goal) * 100)}%
                </p>
              </div>

              <div className="bg-cusOrange/5 rounded-lg py-3 xl:py-5 mt-5">
                <div className="text-cusOrange font-bold text-xl xl:text-2xl 2xl:text-3xl flex justify-center items-center gap-3">
                  <Timer className="size-5 xl:size-7 2xl:size-8" />
                  <Countdown_timer time={lastDate} />
                </div>
              </div>
            </div>

            <DonateNowModal data={data} />
          </div>
        </div>

        <div className="mt-6 xl:mt-10">
          <div className="flex justify-between items-center col-span-9">
            <div className="flex justify-start items-center gap-3">
              <Avatar
                src={fundRaiserPhoto}
                className="size-10 xl:size-12 2xl:size-14"
              />
              <h4 className="text-xs xl:text-sm 2xl:text-base">
                <span className="text-xs xl:text-base 2xl:text-xl font-daysOne">
                  {fundRaiserName}{" "}
                </span>
                is organizing this fundraiser.
              </h4>
            </div>
          </div>

          <h1 className="my-8 md:my-4 xl:my-6 2xl:my-10">{title}</h1>

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
                  {totalDonations}
                </Badge>
              </TabsTab>
              <TabsTab value="update">
                <span>Updates</span>
                <Badge color="green" size="lg" className="ml-2">
                  {totalDonations}
                </Badge>
              </TabsTab>
            </TabsList>

            <TabsPanel value="about">
              <p className="text-sm mxl:text-base 2xl:text-lg font-inter leading-7 mxl:leading-10 text-gray-800">
                {description}
              </p>
            </TabsPanel>
            <TabsPanel value="donors">
              <DonationDonors />
            </TabsPanel>
            <TabsPanel value="update">
              <DonationUpdates />
            </TabsPanel>
          </Tabs>
        </div>

        {otherCmpData && otherCmpData?.length > 0 && (
          <>
            <h1 className="mt-28">Other Campaigns</h1>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-4 mxl:gap-8 max-w-fit sm:max-w-3xl lg:max-w-full mx-auto">
              {otherCmpData
                .filter((i: ICampaign) => i._id !== data._id)
                .map((item: ICampaign) => {
                  return <DonationCard key={item._id} data={item} />;
                })}
            </div>
          </>
        )}
      </div>

      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      {/* <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-2/3 rounded-full bg-cusGreen-200 opacity-20 blur-[100px]" /> */}
    </section>
  );
};

export default DonationDetailsPage;
