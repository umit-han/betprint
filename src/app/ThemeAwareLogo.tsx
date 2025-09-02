"use client";

import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ThemeAwareLogo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Link href="/" className="flex items-center gap-8">
      <Image src={resolvedTheme === "dark" ? logoDark : logo} alt="Bet Print logo" width={70} height={50} />
      {/* <span className="text-2xl font-bold">Bet Print</span> */}
    </Link>
  );
}