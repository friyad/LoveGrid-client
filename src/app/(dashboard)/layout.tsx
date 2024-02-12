import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function DashboardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const season = await getServerSession(authOptions);

  return (
    <section className="flex justify-between items-start h-[calc(100vh-90px)] overflow-hidden">
      <DashboardSidebar season={season} />
      <div className="flex-1 w-full overflow-auto h-full p-8 relative">
        {children}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
    </section>
  );
}
