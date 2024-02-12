"use client";

import { cn } from "@/lib/utils";
import { Button, ButtonProps, createTheme } from "@mantine/core";

const theme = createTheme({
  components: {
    // Customizing "Button" component with tailwind css
    Button: Button.extend({
      classNames: (_theme, props: ButtonProps | any) => {
        const btnDefault = "bg-cusGreen font-inter";
        switch (props.size) {
          case "lg":
            return {
              root: cn(
                "2xl:h-12 3xl:h-14 text-sm 2xl:text-base",
                btnDefault,
                props?.classNames?.root
              ),
            };
          default:
            return {
              root: cn(btnDefault, props?.classNames?.root),
            };
        }
      },
    }),

    TextInput: {
      classNames: {
        input: "h-12 3xl:h-14 text-base 3xl:text-lg",
        label: "text-xs 2xl:text-sm",
        error: "text-xs 2xl:text-sm -mt-1",
      },
    },
    PasswordInput: {
      classNames: {
        input: "h-12 3xl:h-14 text-base 3xl:text-lg",
        label: "text-xs 2xl:text-sm",
        error: "text-xs 2xl:text-sm -mt-1",
      },
    },
  },
});

export default theme;
