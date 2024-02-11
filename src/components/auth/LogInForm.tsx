"use client";

import { LoginInfo } from "@/types/authTypes";
import { LogInValidation } from "@/validations/userValidation";
import { Button, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const LogInForm = () => {
  const form = useForm<LoginInfo>({
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(LogInValidation),
  });

  const handleLoginSubmit = (data: LoginInfo) => {
    console.log(data);
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
