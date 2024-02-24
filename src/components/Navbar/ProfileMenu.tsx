import React from "react";
import { Menu, Avatar } from "@mantine/core";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface ProfileMenuProps {
  user: any;
}

const ProfileMenu = ({ user }: ProfileMenuProps) => {
  const router = useRouter();
  return (
    <Menu
      trigger="hover"
      shadow="xl"
      position="bottom-end"
      width={200}
      classNames={{
        dropdown: "rounded-md border-none hidden lg:inline-block",
        item: "py-3 hover:bg-gray-50 font-medium",
        label: "text-xs text-gray-400",
      }}
    >
      <Menu.Target>
        <Avatar
          src={user.profile}
          alt="it's me"
          className="size-14 lg:size-11 lg:-mt-0.5 cursor-pointer"
        />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={() => router.push("/user/profile")}>
          Profile
        </Menu.Item>
        <Menu.Item onClick={() => router.push("/user/settings")}>
          Settings
        </Menu.Item>
        {user?.role?.includes("admin") && (
          <Menu.Item onClick={() => router.push("/dashboard")}>
            Dashboard
          </Menu.Item>
        )}

        <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item
          color="red"
          onClick={() => signOut({ callbackUrl: "/" })}
          classNames={{ item: "!font-bold" }}
        >
          Log Out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
