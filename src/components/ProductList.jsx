import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
        {/* ITEM 1 */}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/12164348/pexels-photo-12164348.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Product name</span>
          <span className="font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white w-max" >Buy Now</button>
      </Link>

      {/* ITEM-2 */}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/12164348/pexels-photo-12164348.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Product name</span>
          <span className="font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white w-max" >Buy Now</button>
      </Link>

      {/* ITEM 3 */}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/12164348/pexels-photo-12164348.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Product name</span>
          <span className="font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white w-max" >Buy Now</button>
      </Link>

      {/* ITEM 4 */}
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/12164348/pexels-photo-12164348.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Product name</span>
          <span className="font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama py-2 px-4 text-xs hover:bg-lama hover:text-white w-max" >Buy Now</button>
      </Link>
    </div>
  );
};

export default ProductList;
