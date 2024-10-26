import React from "react";
import Link from "next/link";
import Menu from "@/components/Menu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between">
        <Link href="/">
          <div className="tracking-wide text-2xl">LAMA</div>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREEN */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="w-1/3">
          <Link href="/">
          <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="tracking-wide text-2xl">LAMA</div>
          </Link>
        </div>
        <div className="w-2/3">
        </div>
      </div>
    </div>
  );
};

export default Navbar;
