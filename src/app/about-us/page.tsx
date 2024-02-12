import { Metadata } from "next";
import React from "react";
import loginCover from "@/assets/images/login.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LoveGrid - About Us",
  description:
    "LoveGrid is an interactive donation platform designed to foster acts of kindness and support within communities.",
};

const AboutUs = () => {
  return (
    <section className="py-24 relative">
      <div className="justify-center flex-1 max-w-screen-xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap ">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="relative lg:max-w-md">
              <Image
                src={loginCover}
                alt="aboutimage"
                placeholder="blur"
                className="relative z-10 object-cover w-full rounded-lg h-[400px] xsm:h-[600px] lg:h-96"
              />
              <div className="absolute bottom-0 right-0 z-10 p-4 xsm:p-8 bg-white border-2 md:border-4 border-cusOrange rounded shadow lg:-mb-8 lg:-mr-11 sm:p-8">
                <p className="text-xs xsm:text-sm md:text-base 2xl:text-lg font-semibold md:w-72">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="absolute top-0 left-0 w-16 h-16 text-cusOrange opacity-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"></path>
                  </svg>{" "}
                  Successfully Providing business solutions for 4 years
                </p>
              </div>
            </div>
          </div>

          <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
            <div className="pl-4 mb-6 border-l-4 border-cusOrange">
              <span className="text-sm text-gray-500 uppercase font-inter">
                Who we are?
              </span>
              <h1 className="mt-2 font-black text-cusGreen md:text-5xl">
                About Us
              </h1>
            </div>
            <p className="mb-6 text-sm 2xl:text-base font-inter leading-7 text-gray-600">
              At LoveGrid, we're passionate about empowering individuals and
              organizations to make a difference through online fundraising.
              Since our establishment in 2020, we've been dedicated to providing
              a platform that enables you to supercharge your fundraising
              efforts and achieve unparalleled success.
              <br />
              <br />
              <br />
              <b>
                <strong>Our Commitment to You:</strong>
              </b>
              <br />
              <br />
              <strong>Trusted:</strong> With a track record of helping numerous
              people raise millions online since 2020, LoveGrid is a trusted
              partner in your fundraising journey.
              <br /> <br />
              <strong>Expert Support:</strong> Our team of fundraising coaches
              is here to provide you with personalized campaign support,
              ensuring that you have the guidance and assistance you need every
              step of the way.
              <br /> <br />
              <strong>Fee-Free Donations:</strong> Say goodbye to high platform
              fees! LoveGrid's low 4% platform fee ensures that your donors
              aren't burdened with additional charges during checkout, allowing
              you to maximize your fundraising potential.
              <br /> <br />
              <strong>Extend Your Reach:</strong> Our powerful SEO system
              ensures that your campaigns reach a wider audience, giving you the
              opportunity to make a greater impact and raise more funds.
              <br /> <br />
              <strong>Crowdfund Anything:</strong> With LoveGrid, you have the
              freedom to raise money for anything that matters to you. Whether
              it's a personal cause, a community project, or a charitable
              organization, we're here to support your fundraising goals.
              <br /> <br />
              <strong>Fundraising Freedom:</strong> LoveGrid is available
              globally and supports donations in every major currency, giving
              you the flexibility to fundraise from anywhere in the world. Join
              us at LoveGrid and together, let's create positive change one
              donation at a time.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
    </section>
  );
};

export default AboutUs;
