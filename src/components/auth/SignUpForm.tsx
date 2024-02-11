"use client";

import { SignUpInfo } from "@/types/authTypes";
import { failedNotify, successNotify } from "@/utils/notificationsManager";
import { SignUpValidation } from "@/validations/userValidation";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const SignUpForm = () => {
  const router = useRouter();
  const form = useForm<SignUpInfo>({
    initialValues: {
      name: "Test",
      email: "test@gmail.com",
      password: "Test@gmail.com1",
      cPassword: "Test@gmail.com1",
    },
    validate: yupResolver(SignUpValidation),
  });

  const handleSignUpSubmit = async (data: SignUpInfo) => {
    const { cPassword, ...others } = data;
    const res = await signIn("signup-provider", {
      ...others,
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
    <form onSubmit={form.onSubmit(handleSignUpSubmit)}>
      <div className="space-y-3">
        <TextInput
          type="text"
          label="Name"
          size="lg"
          {...form.getInputProps("name")}
        />

        <TextInput
          type="email"
          label="Email"
          size="lg"
          {...form.getInputProps("email")}
          rightSection={<Mail className="size-5" />}
        />

        <PasswordInput
          type="email"
          label="Password"
          size="lg"
          {...form.getInputProps("password")}
          classNames={{ root: "mt-6" }}
        />
        <PasswordInput
          type="email"
          label="Confirm Password"
          size="lg"
          {...form.getInputProps("cPassword")}
          classNames={{ root: "mt-6" }}
        />
      </div>

      <Button
        fullWidth
        size="lg"
        type="submit"
        classNames={{
          root: "bg-cusGreen hover:bg-cusViolet mt-8",
        }}
      >
        Create Account
      </Button>
    </form>
  );
};

export default SignUpForm;
