"use client";

import React from "react";
import { useForm, yupResolver } from "@mantine/form";
import { Button, Modal, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { UserCircle } from "lucide-react";
import { MakeAdminValidation } from "@/validations/userValidation";

interface AdminForm {
  email: string;
}

const MakeAdminModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm<AdminForm>({
    initialValues: {
      email: "",
    },
    validate: yupResolver(MakeAdminValidation),
  });

  const handleAddAdminSubmit = async (data: AdminForm) => {
    console.log(data);
  };

  return (
    <>
      <Button onClick={open} size="md" className="w-full xsm:w-fit bg-cusGreen">
        <UserCircle className="size-5" />
        <span className="ml-2">Make Admin</span>
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        centered
        closeOnClickOutside={false}
        title="Make Admin"
        classNames={{
          inner: "",
          title: "text-xl xl:text-2xl 2xl:text-3xl font-daysOne text-cusGreen",
          close: "size-10",
        }}
      >
        <form onSubmit={form.onSubmit(handleAddAdminSubmit)}>
          <TextInput
            type="email"
            label="Admin Email"
            size="lg"
            name="email"
            placeholder="Type an admin email"
            {...form.getInputProps("email")}
            className="mt-4 mb-12"
          />
          <Button fullWidth size="lg" type="submit">
            Submit
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default MakeAdminModal;
