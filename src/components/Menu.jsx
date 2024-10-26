"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <Image
        src="/menu.png"
        height={28}
        width={28}
        alt="menu-button"
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />{
        open && (
          <div className="absolute bg-black text-white top-20 left-0 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
            <Link href="/">Homepage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Logout</Link>
            <Link href="/">Cart(1)</Link>
          </div>
        )
      }
    </div>
  );
}
