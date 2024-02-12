"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface HideComponentOnProps {
  hiddenOn?: string[];
  children: ReactNode;
}

const HideComponentOn = ({
  hiddenOn = ["/login", "/signup"],
  children,
}: HideComponentOnProps) => {
  const pathname = usePathname();

  // Hide component on these routes
  if (hiddenOn.includes(pathname)) {
    return null;
  }

  return <>{children}</>;
};

export default HideComponentOn;
