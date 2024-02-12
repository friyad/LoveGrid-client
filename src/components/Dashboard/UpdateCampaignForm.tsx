"use client";

import React from "react";
import { useForm, yupResolver } from "@mantine/form";
import { ICampaign } from "@/types/authTypes";
import {
  Button,
  ColorPicker,
  NumberInput,
  Select,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import CampaignPhotoUpload from "./CampaignPhotoUpload";
import { categories } from "@/utils/campaigns";
import { CampaignValidation } from "@/validations/campaignValidations";

const UpdateCampaignForm = () => {
  const form = useForm<ICampaign>({
    initialValues: {
      title: "",
      category: "",
      img: "",
      blurImg: "",
      color: "",
      goal: undefined!,
      totalDonations: 0,
      tlDonateAmount: 0,
      fundRaiserName: "",
      fundRaiserPhoto: "",
      lastDate: undefined!,
      description: "",
    },
    validate: yupResolver(CampaignValidation),
  });

  const handleUpdateSubmit = async (data: ICampaign) => {
    console.log(data);
  };

  return (
    <div>
      <section className="bg-white">
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <form onSubmit={form.onSubmit(handleUpdateSubmit)}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <TextInput
                type="text"
                label="Title"
                size="lg"
                name="name"
                placeholder="Type a title"
                {...form.getInputProps("title")}
                className="md:col-span-2"
              />
              <Select
                label="Category"
                placeholder="Select one"
                {...form.getInputProps("category")}
                data={categories}
              />
              <NumberInput
                type="text"
                label="Goal (USD)"
                size="lg"
                allowNegative={false}
                name="name"
                placeholder="Type campaign's goal"
                {...form.getInputProps("goal")}
              />
              <TextInput
                type="text"
                label="Fundraiser's Name"
                size="lg"
                name="name"
                placeholder="Type fund raiser's name"
                {...form.getInputProps("fundRaiserName")}
              />
              <DatePickerInput
                dropdownType="modal"
                size="lg"
                label="End date"
                placeholder="Pick a date"
                {...form.getInputProps("lastDate")}
              />
              <Textarea
                rows={6}
                label="Description"
                placeholder="Describe about your campaign..."
                {...form.getInputProps("description")}
                className="md:col-span-2"
              />

              <div className="md:col-span-2">
                <p className="text-xs 2xl:text-sm font-medium mb-1">
                  Pick a Color
                </p>
                <ColorPicker
                  swatchesPerRow={8}
                  fullWidth
                  format="hex"
                  {...form.getInputProps("color")}
                  swatches={[
                    "#ff9509",
                    "#581796",
                    "#2A5FFF",
                    "#009940",
                    "#be4bdb",
                  ]}
                />
                {form?.errors?.color && (
                  <p className="text-xs 2xl:text-sm font-medium mt-1 text-red-500 text-right">
                    {form.errors.color}
                  </p>
                )}
              </div>

              <div className="md:col-span-2 mt-5">
                <p className="text-xs 2xl:text-sm font-medium mb-1">
                  Upload Campaign Cover
                </p>
                <CampaignPhotoUpload form={form} />
                {form?.errors?.img && (
                  <p className="text-xs 2xl:text-sm font-medium mt-1 text-red-500 text-right">
                    {form.errors.img}
                  </p>
                )}
              </div>
            </div>

            <Button fullWidth size="lg" type="submit" className="mt-10">
              Create Now
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UpdateCampaignForm;
