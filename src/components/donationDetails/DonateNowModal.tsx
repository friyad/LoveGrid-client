"use client";

import { Button, Modal } from "@mantine/core";
import { useCounter, useDisclosure } from "@mantine/hooks";
import React from "react";

const DonateNowModal = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [count, handlers] = useCounter(0, { min: 0, max: 1000 });

  const handleDonateNow = () => {};

  return (
    <div>
      <Button onClick={open} fullWidth size="lg" className="mt-5 sm:mt-0">
        Donate Now
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        centered
        closeOnClickOutside={false}
        title="Donate Now"
        classNames={{
          inner: "",
          title: "text-xl xl:text-2xl 2xl:text-3xl font-daysOne text-cusGreen",
          close: "size-10",
        }}
      >
        <div>
          <div className="bg-cusGreen/10 flex justify-center items-center w-fit mx-auto p-5 rounded-lg my-7 xsm:my-10">
            <h2 className="text-cusGreen text-4xl 2xl:text-5xl font-daysOne">
              ${count}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button size="md" onClick={() => handlers.set(count + 50)}>
              Add $50
            </Button>
            <Button size="md" onClick={() => handlers.set(count + 2)}>
              Add $2
            </Button>
            <Button
              size="md"
              onClick={handlers.decrement}
              classNames={{ root: "bg-cusOrange" }}
            >
              Decrease
            </Button>
            <Button
              size="md"
              onClick={handlers.reset}
              classNames={{ root: "bg-red-500" }}
            >
              Reset
            </Button>

            <Button
              onClick={handleDonateNow}
              size="lg"
              className="col-span-2 mt-4"
              classNames={{ root: "bg-cusViolet" }}
            >
              Donate
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DonateNowModal;
