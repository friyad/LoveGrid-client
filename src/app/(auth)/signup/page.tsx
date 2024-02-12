import type { Metadata } from "next";
import SignUpForm from "@/components/auth/SignUpForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LoveGrid - Sign Up",
  description:
    "LoveGrid is an interactive donation platform designed to foster acts of kindness and support within communities.",
};

const SingUpPage = () => {
  return (
    <>
      <div className="mb-8">
        <h3 className="text-4xl font-daysOne font-extrabold uppercase text-cusGreen">
          Sign Up
        </h3>
        <p className="text-sm mt-4 font-inter">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-cusBlue font-semibold hover:underline ml-1 whitespace-nowrap"
          >
            Log In Here
          </Link>
        </p>
      </div>

      <SignUpForm />
    </>
  );
};

export default SingUpPage;
