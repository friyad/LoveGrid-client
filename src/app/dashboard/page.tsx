import React from "react";
import ProfilePage from "./profile/page";

const DashboardPage = async () => {
  const elements = await ProfilePage();

  return <div>{elements}</div>;
};

export default DashboardPage;
