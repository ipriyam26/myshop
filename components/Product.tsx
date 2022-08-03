import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { Product } from "../types/Product";
import { AiFillStar } from "react-icons/ai";

const Product: NextPage<{ product: Product }> = ({ product }) => {
  return (
    <div>
      <div className=" p-4 w-full hidden md:block">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image
            alt={product.title}
            src={product.image}
            className="object-cover object-center w-full h-full"
            height={200}
            width={200}
          ></Image>
        </a>
        <div className="mt-4">
          <h2 className="text-white title-font text-xl font-medium">
            {product.title.slice(0, 30)}
          </h2>
          <p className="mt-1">${product.price}</p>
        </div>
      </div>

      <div className=" my-2 w-11/12  shadow-lg md:hidden border border-very_light_color-500  mx-auto  rounded">
        <div className="flex space-x-2 p-2" >
          <div className=" object-center">
            <Image
              alt={product.title.split(" ").slice(0, 5).join(" ")}
              src={product.image}
              height={200}
              width={200}
            ></Image>
          </div>
          <div className=" -mt-1 space-y-2">
            <h3 className=" font-bold text-very_light_color-500">{product.title.slice(0, 30)}</h3>
            <div className="flex space-x-2 text-light_color-500">
              <h4 className=" text-base">${product.price}</h4>
              <p className="flex space-x-1 text-base">
                <AiFillStar className=" text-yellow-300 mt-1" />
                <p>
                  {product.rating.rate}({product.rating.count})
                </p>
              </p>
            </div>
            <p className=" text-xs capitalize">
              {product.description.split(" ").slice(0, 13).join(" ")}...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
