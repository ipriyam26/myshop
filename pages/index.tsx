import type { NextPage } from "next";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import Block from "../components/block";
import Product from "../types/Product";

const Home: NextPage<{products:Product[]}> = ({products}) => {


  return <div>

    <Block products={products}/>
  </div>;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {

  let response = await fetch('https://fakestoreapi.com/products?limit=6')
  let data:Product[] = await response.json()
  console.log(data.length);
  
  return {
    props: {
      products: data
    }
  };
};
