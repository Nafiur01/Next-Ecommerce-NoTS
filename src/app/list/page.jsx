import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import React from "react";

export default function ListPage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN */}
      <div className="hidden bg-pink-50 h-64 justify-between sm:flex px-4">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl leading-[48px] font-semibold text-gray-700">
            Grab up to 50% off on <br/> selected products
          </h1>
          <button className="rounded-3xl bg-pink-500 py-3 px-5 w-max text-white text-sm">Buy Now</button>
        </div>
        <div className="relative w-1/3 ">
          <Image src="/woman.png" alt="image" fill className="object-cover" />
        </div>
      </div>
      <Filter />
      <h1 className="text-4xl flex justify-center my-3">Shoes For You!</h1>
      <ProductList />
    </div>
  );
}
