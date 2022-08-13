import type { NextPage } from "next";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Block from "../components/block";
import Category from "../components/Category";
import {Product} from "../types/Product";

const Home: NextPage<{products:Product[]}> = ({products}) => {


  return <div>
    <Block products={products}/>
    <div className=" w-20 mx-auto h-1 bg-dark_color-500 rounded mt-2 mb-4"></div>
    <Category/>
  </div>;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {

  let response = await fetch('https://fakestoreapi.com/products?limit=6')

  
  if (response.ok) {
    let data:Product[] = await response.json(); 
    return {
      props: {
        products: data
      }
    };
  }
  return {
    props: {
      products: []
    }
  }

};
