"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CircleUserRound, BellRing, ShoppingCart } from 'lucide-react';
import Link from "next/link";
import { useRouter } from "next/navigation";



const NavIcons = () => {
  const router = useRouter();
  const [isProfileOpen,setIsProfileOpen] = useState(false);
  const [isCartOpen,setIsCartOpen] = useState(false);
  
  //Temporary 
  const isLoggedIn = false;

  const handleProfile =() =>{
    if(!isLoggedIn){
      router.push('/login')
    }
    setIsProfileOpen(prev =>!prev)
  }


  return (
  <div className="flex items-center gap-4 xl:gap-6">
    <CircleUserRound height={24} width={24} className="opacity-75"/>
    {isProfileOpen &&(
      <div className="">
        <Link href='/'>Profile</Link>
        <div className="mt-2 cursor-pointer">logout</div>
      </div>
    )}
    <BellRing height={24} width={24} className="opacity-75"/>
    <ShoppingCart height={24} width={24} className="opacity-75"/>
  </div>)
};

export default NavIcons;
