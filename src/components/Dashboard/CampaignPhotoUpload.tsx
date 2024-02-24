"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useUploadPhotoMutation } from "@/redux/uploads/uploadAPI";
import { Button, Skeleton } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { failedNotify } from "@/utils/notificationsManager";
import { X } from "lucide-react";
import Image from "next/image";
import { ICampaign } from "@/types/campaignTypes";

interface PhonePhotoUploadProps {
  form: UseFormReturnType<ICampaign, (values: ICampaign) => ICampaign>;
  images?: string;
}

const CampaignPhotoUpload = ({ form }: PhonePhotoUploadProps) => {
  const [uploadPhoto, result] = useUploadPhotoMutation();
  const [photoFile, setPhotoFiles] = useState<File | null>();
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragActive,
    fileRejections,
  } = useDropzone({
    maxFiles: 1,
    multiple: false,
    maxSize: 1024 * 500, // 500 kb
    accept: {
      "image/jpg": [".jpg"],
      "image/png": [".png"],
    },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      setPhotoFiles(file);
    },
  });

  const handlePhotoUpload = async (data: FormData) => {
    const result: any = await uploadPhoto(data);
    if (result?.data?.status) {
      form.setFieldValue("img", result?.data?.secure_url);
      form.setFieldValue("blurImg", result?.data?.blurURL);
    } else if (result?.error?.status === 500) {
      failedNotify(`Opps! 500`, "Failed to upload your photo");
      form.setFieldValue("img", "");
      form.setFieldValue("blurImg", "");
    }
  };
  useEffect(() => {
    if (photoFile) {
      const formData = new FormData();
      formData.append("file", photoFile);
      handlePhotoUpload(formData);
    }
  }, [photoFile]);

  return (
    <section className="mb-4">
      <>
        <div
          {...getRootProps()}
          className={cn(
            "h-44 border-4 rounded-lg flex justify-center items-center transition-all duration-200",
            isFocused || isDragActive
              ? "border-dotted border-cusBlue bg-cusBlue/10"
              : "border-gray-200 hover:border-dotted hover:border-cusBlue hover:bg-cusBlue/10",
            form.values.img !== "" ? "hidden" : "" // if 3 images uploaded make the div hidden
          )}
        >
          <input
            max={4}
            maxLength={4}
            disabled={form.values.img !== ""}
            {...getInputProps()}
          />
          <p className="max-w-xs text-center text-sm md:text-base">
            Drag &apos;n&apos; drop some files here, or click to select files
          </p>
        </div>

        {fileRejections[0] && (
          <p className="text-red-500 text-xs mxl:text-sm">
            {fileRejections[0].errors[0].message === "Too many files"
              ? "You can upload only 3 files"
              : fileRejections[0].errors[0].message}
          </p>
        )}
      </>

      {/* Preview Thumbs after uploading successfully */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {form.values.img && (
          <div className="border-2 rounded-md overflow-hidden w-full h-44">
            <Image
              src={form.values.img}
              width={200}
              height={200}
              alt=""
              placeholder="blur"
              blurDataURL={form.values.blurImg}
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}

        {result.isLoading && (
          <div className="border-2 rounded-md overflow-hidden w-full h-44">
            <Skeleton className="w-full h-full bg-slate-200" />
          </div>
        )}
      </div>

      {/* Make clear button visible after uploading 3 images */}
      {form.values.img !== "" && (
        <Button
          size="md"
          className="mt-4"
          classNames={{ root: "bg-red-500 hover:bg-red-600" }}
          onClick={() => {
            setPhotoFiles(null);
            form.setFieldValue("img", "");
            form.setFieldValue("blurImg", "");
            result.reset();
          }}
        >
          <X className="mr-1 size-5" /> Clear
        </Button>
      )}
    </section>
  );
};

export default CampaignPhotoUpload;
