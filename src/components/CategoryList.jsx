import React from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll">
      <div className="flex gap-4 md:gap-8 scrolling-hide">
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg"
              fill
              sizes="20vw"
              alt="category"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg"
              fill
              sizes="20vw"
              alt="category"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg"
              fill
              sizes="20vw"
              alt="category"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg"
              fill
              sizes="20vw"
              alt="category"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg"
              fill
              sizes="20vw"
              alt="category"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg"
              fill
              sizes="20vw"
              alt="category"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg"
              fill
              sizes="20vw"
              alt="category"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category</h1>
        </Link>
        <Link
          href="/list?cat=test"
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:1/6"
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg"
              fill
              sizes="20vw"
              alt="category"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-cl tracking-wide">Category</h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
