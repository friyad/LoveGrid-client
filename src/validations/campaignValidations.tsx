import * as yup from "yup";

export const CampaignValidation = yup.object().shape({
  title: yup.string().required("This field is required").trim(),
  category: yup.string().required("This field is required").trim(),
  img: yup.string().required("Please upload a photo"),
  color: yup.string().required("Please pick a color"),
  goal: yup.number().required("This field is required"),
  fundRaiserName: yup.string().required("This field is required"),
  lastDate: yup.date().required("This field is required"),
  description: yup.string().required("This field is required"),
});
