import DashboardSidebar from "@/components/Dashboard/DashboardSidebar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export default async function DashboardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <section className="flex justify-between items-start h-[calc(100vh-90px)] overflow-hidden">
      <DashboardSidebar session={session} />
      <div className="flex-1 w-full overflow-auto h-full p-8 relative bg-white">
        {children}
      </div>
    </section>
  );
}
