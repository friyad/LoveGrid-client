import Image from "next/image";
import loginCover from "@/assets/images/login.jpg";
import OtherAuthSection from "@/components/auth/OtherAuthSection";

export default async function AuthtLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="text-[#333] bg-white">
        <div className="grid md:grid-cols-3 items-center lg:gap-10 gap-4">
          <div className="max-md:order-1 h-screen min-h-full">
            <Image
              src={loginCover}
              alt=""
              placeholder="blur"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="md:col-span-2 max-w-md w-full p-6 sm:p-8 mx-auto bg-white rounded-xl border shadow-[0px_20px_40px_#00000010]">
            {children}
            <OtherAuthSection />
          </div>
        </div>
      </div>
    </section>
  );
}
