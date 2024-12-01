import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import React from "react";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl text-gray-500 font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid eum
          autem amet provident quisquam atque accusamus unde est itaque
          sapiente?
        </p>
        <div className="border-2 border-gray-200" />
        <div className="flex items-center gap-4">
          <div className="text-xl text-gray-600 line-through">$59</div>
          <div className="font-medium text-xl">$49</div>
        </div>
        <div className="border-2 border-gray-200" />
        <CustomizeProducts />
        <Add />
        <div className="border-2 border-gray-200" />
        <div className="text-sm">
          <h1 className="font-medium">Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            veritatis modi voluptas atque facilis sed soluta fuga accusantium in
            suscipit.
          </p>
        </div>
        <div className="border-2 border-gray-200" />
        <div className="text-sm">
          <h1 className="font-medium">Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            veritatis modi voluptas atque facilis sed soluta fuga accusantium in
            suscipit.
          </p>
        </div>
        <div className="border-2 border-gray-200" />
        <div className="text-sm">
          <h1 className="font-medium">Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            veritatis modi voluptas atque facilis sed soluta fuga accusantium in
            suscipit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
