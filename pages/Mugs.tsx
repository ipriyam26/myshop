import {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next/types";
import React from "react";
import ProductC from "../components/Product";
import { Product } from "../types/Product";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  let response = await fetch("https://fakestoreapi.com/products?limit=20");
  if (response.ok) {
    let data: Product[] = await response.json();
    return {
      props: {
        products: data,
      },
    };
  }
  return {
    props: {
      products: [],
    },
  };
};

const Mugs: NextPage<{ products: Product[] }> = ({ products }) => {
  console.log(products);
  
  return (
    <div>
      <section className="text-gray-400 bg-medium_color-500 body-font">
        <div className="py-14 md:px-10">
          <div className=" space-y-3 md:grid md:space-x-4  md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {
            products.map(
              (product, index) => {
                if(index==0){
                  return <div className="mt-2.5">
                    <ProductC  product={product}  key={product.id}/>
                  </div>
                }
              return <ProductC key={product.id} product={product}></ProductC>;
            }
            )
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mugs;
