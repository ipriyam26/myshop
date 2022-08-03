import { NextPage } from "next";
import React from "react";

interface drawerProps{
    children: React.ReactNode ,
     isOpen: boolean, 
     setIsOpen : (isOpen: boolean) => void
}

const Drawer:NextPage<drawerProps> = (props) => {
    const {children, isOpen, setIsOpen} = props;
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-light_color-500 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-4 text-center text-very_light_color-500 bg-dark_color-500  font-semibold text-xl md:text-2xl lg:text-3xl">Cart</header>
          {children}
          <div className=" text-center flex justify-center space-x-3 text-very_light_color-500 border-y-2
          py-1 border-dark_color-500  ">
            <p className=" text-dark_color-500 text-lg md:text-xl lg:text-2xl" ><strong  >Total:</strong> $150 </p>
          </div>
            <button className="bg-transparent hover:bg-dark_color-500 mx-44  text-lg text-dark_color-500 font-semibold hover:text-white  px-4 py-1 border border-dark_color-500 hover:border-transparent rounded">
              Checkout
</button>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}

export default Drawer;