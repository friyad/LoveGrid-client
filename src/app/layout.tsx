import type { Metadata } from "next";
import { Inter, Days_One } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import theme from "@/utils/mantineTheme";
import ReduxProvider from "@/redux/ReduxProvider";
import { Notifications } from "@mantine/notifications";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});
const daysOne = Days_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-daysOne",
});

export const metadata: Metadata = {
  title: "Love Grid",
  description:
    "LoveGrid is an interactive donation platform designed to foster acts of kindness and support within communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${inter.variable} ${daysOne.variable}`}>
        <ReduxProvider>
          <MantineProvider theme={theme}>
            <Notifications position="top-center" />
            {children}
          </MantineProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
