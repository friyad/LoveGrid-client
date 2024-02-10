"use client";

import { SignUpInfo } from "@/types/authTypes";
import { SignUpValidation } from "@/validations/userValidation";
import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Mail } from "lucide-react";
import React from "react";

const SingUpPage = () => {
  const form = useForm<SignUpInfo>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cPassword: "",
    },
    validate: yupResolver(SignUpValidation),
  });

  const handleSignUpSubmit = (data: SignUpInfo) => {
    console.log(data);
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

export default SingUpPage;
