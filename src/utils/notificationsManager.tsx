import { notifications } from "@mantine/notifications";

export const successNotify = (title: string, message: string) => {
  notifications.show({
    title: title,
    message: message,
    color: "green",
    className: "max-w-sm mb-2",
    classNames: {
      title: "text-sm xsm:text-base 2xl:text-lg",
      description: "text-xs xsm:text-sm 2xl:text-base",
    },
  });
};

export const failedNotify = (title: string, message: string) => {
  notifications.show({
    title: title,
    message: message,
    color: "red",
    className: "max-w-sm mb-2",
    classNames: {
      title: "text-sm xsm:text-base 2xl:text-lg",
      description: "text-xs xsm:text-sm 2xl:text-base",
    },
  });
};
