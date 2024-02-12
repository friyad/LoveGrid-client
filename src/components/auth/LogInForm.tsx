"use client";

import { LoginInfo } from "@/types/authTypes";
import { failedNotify, successNotify } from "@/utils/notificationsManager";
import { LogInValidation } from "@/validations/userValidation";
import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LogInForm = () => {
  const router = useRouter();
  const form = useForm<LoginInfo>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(LogInValidation),
  });

  const handleLoginSubmit = async (data: LoginInfo) => {
    console.log(data);

    const res = await signIn("login-provider", {
      ...data,
      redirect: false,
      callbackUrl: "/",
    });
    if (res?.ok) {
      successNotify("Successfull!", "Sign Up Successfull!");
      router.push("/");
    }
    if (res?.error) {
      failedNotify("Oops!", JSON.parse(res?.error || " "));
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleLoginSubmit)} className="font-inter">
      <TextInput
        type="email"
        label="Email"
        size="lg"
        rightSection={<Mail className="size-5" />}
        {...form.getInputProps("email")}
      />

      <PasswordInput
        type="email"
        label="Password"
        size="lg"
        classNames={{ root: "mt-6" }}
        {...form.getInputProps("password")}
      />

      <div className="flex items-center justify-between gap-2 mt-5">
        <Checkbox label="Remember Me" />
        <div>
          <Link href="" className="text-cusBlue text-sm hover:underline">
            Forgot Password?
          </Link>
        </div>
      </div>

      <Button
        fullWidth
        size="lg"
        type="submit"
        classNames={{
          root: "bg-cusGreen hover:bg-cusViolet mt-8",
        }}
      >
        Sign In
      </Button>
    </form>
  );
};

export default LogInForm;
