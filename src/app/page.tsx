import { authOptions } from "@/utils/authOptions";
import { Button } from "@mantine/core";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";

export default async function Home() {
  const season = await getServerSession(authOptions);

  return (
    <main className="">
      <h1 className="text-5xl">Hello world this is Friyad</h1>
      {/* <Button onClick={() => signOut()}>Sign Out</Button> */}
      <h1 className="text-5xl mt-10">{season?.email}</h1>
    </main>
  );
}
