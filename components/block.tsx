import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import {Product} from "../types/Product";

const ProductHomeBlock:NextPage<{product:Product}> = (props) =>{
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4 ">
      <div className="flex relative">
        <div className="absolute   w-full h-full ">
          <Image
            src={props.product.image}
            alt={props.product.title}
            width={200}
            height={200}
          />
        </div>

    <div className="px-8 py-10 relative z-10 w-full border-4 border-light_color-500 bg-dark_color-500 opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium capitalize text-light_color-500 mb-1">
            {props.product.category}
          </h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {props.product.title}
          </h1>
          <p className="leading-relaxed ">{props.product.description.slice(0,150)}...</p>
        </div>
      </div>
    </div>
  );
}

const Block: NextPage<{ products: Product[] }> = ({ products }) => (
    <div>
        <section className="text-gray-400 bg-medium_color-500 body-font">
            <div className="container px-5 py-16 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                        Our Top Products
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        If you&apos; re looking for the perfect gift for the coder in your life,
                        look no further than the Coding Merch Store! We&apos; ve got everything
                        from T-shirts and hoodies emblazoned with code to mugs and
                        mousepads featuring your favorite programming languages. Whether
                        they&apos; re a beginner or a seasoned pro, we&apos; ve got something for
                        everyone.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {products.map((product) => {
                        return (
                            <ProductHomeBlock
                                key={product.id}
                                product={product}
                            ></ProductHomeBlock>
                        );
                    })}
                </div>
            </div>
        </section>
    </div>
);

export default Block;
