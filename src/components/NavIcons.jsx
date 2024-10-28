"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CircleUserRound, BellRing, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModal from "./CartModal";

const NavIcons = () => {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  //Temporary
  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <CircleUserRound
        height={24}
        width={24}
        className="opacity-75 cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute top-12 left-0 p-4 rounded-md text-sm shadow-md bg-slate-100 z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">logout</div>
        </div>
      )}
      <BellRing height={24} width={24} className="opacity-75" />
      <div
        className="cursor-pointer relative"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <ShoppingCart height={24} width={24} className="opacity-75" />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama text-white text-sm flex items-center justify-center rounded-full">
          2
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
