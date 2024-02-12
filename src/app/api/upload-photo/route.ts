import { NextRequest, NextResponse } from "next/server";
import { getPlaiceholder } from "plaiceholder";

const handler = async (request: NextRequest | any, res: NextResponse) => {
  const formData = await request.formData();

  try {
    if (formData) {
      // receiving file from form data and making it ready for cloudinary
      const file = await formData.get("file");
      const finalFormData = new FormData();
      finalFormData.append("file", file, file.name);
      finalFormData.append("cloud_name", process.env.CLOUDINARY_CLOUD_NAME!);
      finalFormData.append(
        "upload_preset",
        process.env.CLOUDINARY_UPLOAD_PRESET!
      );

      // send request with final form data to cloudinary
      const cloudinaryReq = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: finalFormData,
        }
      );
      const res = await cloudinaryReq.json();

      // Get uploaded image url and make a blurUrl usign plaiceholder package
      const buffer = await fetch(res.secure_url).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
      );
      const { base64 } = await getPlaiceholder(buffer);

      // send the final data with blurURL to client
      return NextResponse.json(
        { status: true, data: { ...res, blurURL: base64 } },
        { status: 200 }
      );
    } else {
      throw new Error("Please provide valid form data");
    }
  } catch (error: any) {
    return NextResponse.json(
      {
        status: false,
        error: "Failed to upload your photo. Please Try again later",
      },
      { status: 500 }
    );
  }
};

export { handler as GET, handler as POST };
