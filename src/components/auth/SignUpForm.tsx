"use client";

import { useHandleSignUpMutation } from "@/redux/auth/authAPI";
import { SignUpInfo } from "@/types/authTypes";
import { failedNotify, successNotify } from "@/utils/notificationsManager";
import { SignUpValidation } from "@/validations/userValidation";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import React from "react";

const SignUpForm = () => {
  const [trigger, { isLoading }] = useHandleSignUpMutation();
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
    const res: any = await trigger(others);
    if (res?.data?.status) {
      successNotify("Successfull!", "Sign Up Successfull!");
      signIn("signup-provider", {
        ...res.data?.user,
        callbackUrl: "/",
      });
    }
    if (res?.error) {
      failedNotify("Oops!", res.error?.message);
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSignUpSubmit)}>
      <div className="space-y-3">
        <TextInput
          type="text"
          label="Name"
          size="lg"
          name="name"
          {...form.getInputProps("name")}
        />

        <TextInput
          type="email"
          label="Email"
          size="lg"
          name="email"
          {...form.getInputProps("email")}
          rightSection={<Mail className="size-5" />}
        />

        <PasswordInput
          type="email"
          label="Password"
          size="lg"
          name="password"
          {...form.getInputProps("password")}
          classNames={{ root: "mt-6" }}
        />
        <PasswordInput
          type="email"
          label="Confirm Password"
          size="lg"
          name="cPassword"
          {...form.getInputProps("cPassword")}
          classNames={{ root: "mt-6" }}
        />
      </div>

      <Button
        fullWidth
        size="lg"
        type="submit"
        loading={isLoading}
        classNames={{
          root: "hover:bg-cusViolet mt-8",
        }}
      >
        Create Account
      </Button>
    </form>
  );
};

export default SignUpForm;
