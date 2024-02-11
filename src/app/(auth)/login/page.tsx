import type { Metadata } from "next";
import LogInForm from "@/components/auth/LogInForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Love Grid - Log In",
  description:
    "LoveGrid is an interactive donation platform designed to foster acts of kindness and support within communities.",
};

const LogInPage = () => {
  return (
    <>
      <div className="mb-8">
        <h3 className="text-4xl font-daysOne font-extrabold uppercase text-cusGreen">
          Sign in
        </h3>
        <p className="text-sm mt-4 font-inter">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="text-cusBlue font-semibold hover:underline ml-1 whitespace-nowrap"
          >
            Register here
          </Link>
        </p>
      </div>

      <LogInForm />
    </>
  );
};

export default LogInPage;
