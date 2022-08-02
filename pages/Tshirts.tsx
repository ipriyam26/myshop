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

const Tshirts: NextPage<{ products: Product[] }> = ({ products }) => {
  console.log(products);
  
  return (
    <div>
      <section className="text-gray-400 bg-medium_color-500 body-font">
        <div className=" py-14 ">
          <div className="flex flex-wrap">
            {
            products.map(
              (product, index) => {
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

export default Tshirts;
