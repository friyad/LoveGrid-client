import React from "react";
import heroImg from "@/assets/images/hero-img.jpg";
import Image from "next/image";
import { Button, TextInput } from "@mantine/core";
import { SearchIcon } from "lucide-react";
import { TypewriterEffectSmooth } from "../ui/TypewriterEffect";

const heading1 = [
  {
    text: "Spread",
  },
  {
    text: "love",
  },
  {
    text: "ignite",
  },
  {
    text: "change.",
  },
];
const heading2 = [
  {
    text: "Join",
  },
  {
    text: "hands",
  },
  {
    text: "on",
  },
  {
    text: "LoveGrid.",
    className: "text-cusGreen",
  },
];
const authHeading2 = [
  {
    text: "Explore",
  },
  {
    text: "on",
  },
  {
    text: "LoveGrid.",
    className: "text-cusGreen",
  },
];
interface HeroProps {
  isAuthenticated: boolean;
}

const Hero = ({ isAuthenticated }: HeroProps) => {
  return (
    <section className="min-h-[calc(100vh-90px)] w-full overflow-hidden relative flex justify-center items-center border-b-2 bg-cusGreen-100/5">
      <div className="relative z-10 -mt-[8%] px-4 w-full">
        <div className="max-w-sm sm:max-w-lg xl:max-w-3xl 2xl:max-w-4xl w-full mx-auto text-center relative z-10">
          <div className="mb-7 xl:mb-10">
            <TypewriterEffectSmooth
              words={heading1}
              className="w-full justify-center items-center"
              textClassName="text-lg xxsm:text-xl xsm:text-2xl sm:text-4xl xl:text-5xl 3xl:text-6xl font-extrabold font-daysOne xl:!leading-[65px] 2xl:!leading-[70px]"
            />
            <TypewriterEffectSmooth
              words={isAuthenticated ? authHeading2 : heading2}
              delay={2}
              className="w-full justify-center items-center mt-2"
              textClassName="text-lg xxsm:text-xl xsm:text-2xl sm:text-4xl xl:text-5xl 3xl:text-6xl font-extrabold font-daysOne xl:!leading-[65px] 2xl:!leading-[70px]"
            />
          </div>

          <div className="mb-6 flex justify-between items-center max-w-2xl mx-auto">
            <TextInput
              size="lg"
              leftSection={<SearchIcon className="size-4 xsm:size-6" />}
              placeholder="Search..."
              classNames={{ root: "w-full", input: "rounded-s-full" }}
            />
            <Button
              size="lg"
              classNames={{
                root: "rounded-r-full bg-cusGreen hover:brightness-125",
                label:
                  "w-full whitespace-nowrap pr-7 xsm:pr-8 3xl:pr-14 xsm:pl-2 3xl:pl-6",
              }}
            >
              Search
            </Button>
          </div>

          <p className="text-xs xsm:text-sm xl:text-base font-inter max-w-2xl mx-auto">
            Explore compassion, make a difference. Donate on{" "}
            <span className="font-bold text-cusGreen">LoveGrid</span>.
          </p>
        </div>
      </div>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,#00994031_0,#00994000_50%,#00994000_100%)] bg-blend-multiply" />
      <Image
        src={heroImg}
        alt="Love Grid Hero Image"
        placeholder="blur"
        className="absolute inset-0 z-0 w-full h-full object-cover object-center opacity-5"
      />
      <div className="absolute inset-0 z-[1] h-full w-full bg-[linear-gradient(to_right,#00994015_1px,transparent_1px),linear-gradient(to_bottom,#00994015_1px,transparent_1px)] bg-[size:6rem_4rem]" />
    </section>
  );
};

export default Hero;
