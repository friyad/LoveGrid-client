import Image from "next/image";
import React from "react";
import errorImg from "@/assets/images/elements/error.png";
import { cn } from "@/lib/utils";

interface FailedImgCompProps {
  classNames?: string;
  text: string;
}

const FailedImgComp = ({ classNames, text }: FailedImgCompProps) => {
  return (
    <section
      className={cn(
        "min-h-[calc(100vh-90px)] max-w-screen-mxl mx-auto pb-44 px-6 2xl:px-4 flex justify-center items-center flex-col",
        classNames
      )}
    >
      <div>
        <Image
          src={errorImg}
          alt="Failed/Error Image"
          placeholder="blur"
          className="size-32"
        />
      </div>
      <p className="text-center text-sm lg:text-base mxl:text-lg mt-4 font-inter font-medium">
        {text}
      </p>
    </section>
  );
};

export default FailedImgComp;
