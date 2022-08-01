import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Category } from "../types/Product";



const CategoryBlock:NextPage<{category:Category}> = ({category}) => {
  return (
    <div className="p-4 lg:w-1/3">
      <div className="h-full bg-dark_color-500 bg-opacity-70 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-light_color-500 mb-3">
          CATEGORY
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-very_light_color-500 mb-3">
          {category.title}
        </h1>
        <p className="leading-relaxed mb-3">
         {category.description.slice(0,150)}...
        </p>
        <Link 
        href={category.link}
        className="inline-flex items-center ">
          <a className="flex text-light_color-500 justify-center">
            <p  >
              Learn More
            </p>
              <svg
                className="w-4 h-4 ml-2 mt-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
          </a>
        </Link>

      </div>
    </div>
  );
}


function Category() {


const categories:Category[] =[
    {
        title:'Tshirts',
        description:'T-shirts are a type of cloth that is made from a narrow strip of material, typically cotton, and is typically made with the intention of being worn over one&apos;s body. T-shirts are typically made with a round neck, though they may have a square or other shape in which case the neckline is cropped off the center of the garment.',
        link:'/Tshirts'
    },{
        title:'Hoodies',
        description:'Hoodies are a type of cloth that is made from a narrow strip of material, typically cotton, and is typically made with the intention of being worn over one&apos;s body. Hoodies are typically made with a round neck, though they may have a square or other shape in which case the neckline is cropped off the center of the garment.',
        link:'/Hoodies'
        
    },{
        title:'Mugs',
        description:'Mugs are a type of ironware that is typically made from a material, such as plastic or glass, that is used to serve beverages. Mugs are typically made with a round or rectangular base, and are often made with a handle or handle and a cap.',
        link:'/Mugs'
    },{
        title:'Stickers',
        description:'Stickers are a type of adhesive material that is used to bind or stick things together. Stickers are typically made from a material, such as plastic or glass, that is used to bind or stick things together.',
        link:'/Stickers'
    }
];
  return (
    <div>
      <section className="text-gray-400 bg-medium_color-500 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
                categories.map((category,index)=>{
                    return <CategoryBlock key={index} category={category}/>
                })
            }
            
             {/* <CategoryBlock category={categories[0]} ></CategoryBlock> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Category;
