import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import { authOptions } from "@/utils/authOptions";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "LoveGrid - Profile",
  description:
    "LoveGrid is an interactive donation platform designed to foster acts of kindness and support within communities.",
};

export default async function ProfiletLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const season = await getServerSession(authOptions);

  return (
    <section className="flex justify-between items-start h-[calc(100vh-90px)] overflow-hidden">
      <DashboardSidebar season={season} />
      <div className="flex-1 w-full overflow-auto h-full">{children}</div>
    </section>
  );
}
