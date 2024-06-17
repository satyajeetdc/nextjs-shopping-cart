"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex shadow-md py-4 px-4 bg-white min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <Link href={"/"}>Shopping Cart</Link>
      </div>
    </header>
  );
}
