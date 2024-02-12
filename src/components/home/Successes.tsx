import { Carousel, CarouselSlide } from "@mantine/carousel";
import React from "react";
import SuccessDonationCard from "../SuccessDonationCard";

const Successes = () => {
  return (
    <section className="relative py-20 md:py-24 2xl:py-32 border-b">
      <div className="max-w-screen-mxl mx-auto px-6 2xl:px-4">
        <h1 className="text-center">Success</h1>

        <div className="mt-4 2xl:mt-10">
          <div className="max-w-5xl w-full mx-auto">
            <Carousel
              withIndicators
              dragFree
              slideGap={40}
              loop
              align="center"
              controlSize={52}
              classNames={{
                root: "w-full",
                container: "py-5 ",
                slide: "mx-auto",
                control: "bg-white shadow-xl opacity-100 [&>svg]:!size-6",
                controls:
                  "xl:-left-[7%] 2xl:-left-[10%] xl:-right-[7%] 2xl:-right-[10%] top-[30%] md:top-2/4",
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((item) => {
                return (
                  <CarouselSlide key={item} className="">
                    <SuccessDonationCard />
                  </CarouselSlide>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="absolute z-[-1] inset-0 rotate-180 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </section>
  );
};

export default Successes;
