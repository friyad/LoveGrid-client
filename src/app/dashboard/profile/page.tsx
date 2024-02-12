import { authOptions } from "@/utils/authOptions";
import { Avatar, Button } from "@mantine/core";
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";

const ProfilePage = async () => {
  const user: any = await getServerSession(authOptions);

  return (
    <div>
      <div className="relative flex flex-col w-full min-w-0 mb-6 break-words bg-clip-border">
        <div className="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent">
          <div className="flex flex-wrap mb-6 xl:flex-nowrap ">
            <div className="mb-5 mr-5">
              <div className="relative inline-block shrink-0">
                <Avatar src={user?.profile} className="size-32" />
              </div>
            </div>

            <div className="grow">
              <div className="flex flex-wrap items-start justify-between mb-2">
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    <button className="text-secondary-inverse hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1">
                      {user.name}
                    </button>
                  </div>
                  <div className="flex flex-wrap pr-2 mb-4 font-medium">
                    <p className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary">
                      <span className="mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      Dhaka, Bangladesh
                    </p>
                    <p className="flex items-center mb-2 mr-5 text-secondary-dark hover:text-primary">
                      <span className="mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
                      </span>
                      {user.email}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap my-auto">
                  <Link href="/dashboard/my-donations">
                    <Button size="md">My Donations</Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-wrap items-center">
                  <button className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal">
                    320 Following
                  </button>
                  <button className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal">
                    2.5k Followers
                  </button>
                  <button className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal">
                    48 Donations
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full h-px border-neutral-200" />
        </div>

        <div className="px-9 pt-9">
          <p className="text-lg text-gray-500">
            An artist of considerable range, Jenna the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
