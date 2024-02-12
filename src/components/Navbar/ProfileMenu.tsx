import React from "react";
import { Menu, Button, Text, rem, Avatar } from "@mantine/core";
import { signOut } from "next-auth/react";

interface ProfileMenuProps {
  user: any;
}

const ProfileMenu = ({ user }: ProfileMenuProps) => {
  return (
    <Menu
      trigger="hover"
      shadow="xl"
      position="bottom-end"
      width={200}
      classNames={{
        dropdown: "rounded-md border-none",
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
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item>Settings</Menu.Item>

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
