import { getPlaiceholder } from "plaiceholder";

// Generate base64 placeholder image from remote url
export const generatePlaceholder = async (src: string) => {
  try {
    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
    const { base64 } = await getPlaiceholder(buffer);
    return base64;
  } catch (error: unknown) {
    console.log(error);
  }
};
