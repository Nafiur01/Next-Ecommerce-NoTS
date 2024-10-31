"use client";
import Image from "next/image";
import React from "react";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 gap-6 rounded-md shadow-lg z-20 bg-white top-10 right-0 flex flex-col">
      {!cartItems ? (
        <div>Cart Item is empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          {/* PRODUCT LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/12419737/pexels-photo-12419737.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="product image"
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP SECTION */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm flex items-center gap-2">
                      $59
                    </div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM SECTION */}
                <div className="flex justify-between">
                  <span className="text-gray-500">Qty 1</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/12419737/pexels-photo-12419737.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="product image"
                width={72}
                height={96}
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP SECTION */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$59</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM SECTION */}
                <div className="flex justify-between">
                  <span className="text-gray-500">Qty 1</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM SECTION */}
          <div className="">
            <div className="flex items-center font-semibold justify-between p-1">
              <span className="">Subtotal</span>
              <span className="">$80</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md border py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md border py-3 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
