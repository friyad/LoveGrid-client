export const handleAuthErr = (result: any) => {
  console.log("From Error Handler: ", result);

  if (result?.data?.message) {
    return {
      status: false,
      message: result.data.message,
    };
  } else if (result?.data?.error?.message) {
    return {
      status: false,
      name: result?.data?.error?.name,
      message: result?.data?.error?.message,
    };
  }
  return {
    status: false,
    message: "Something wrong here! Please try again later",
  };
};
