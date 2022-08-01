
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { BsCartFill } from 'react-icons/bs';
import { SiCodesandbox } from 'react-icons/si';

function Navbar() {
    const router = useRouter();
  const all_routes = ["Home", "Tshirts", "Hoodie", "Mugs", "Sticker"];
  let route = router.pathname.split("/")[1];
  route = route==""?"Home":route;
  var result: string[] = all_routes;
  const [open, setOpen] = useState<Boolean>(false);

  return (
    <div>
      <nav
        onClick={() => {
          setOpen(!open);
        }}
        className="flex justify-between p-2 md:p-4 bg-dark_color-500 text-very_light_color-500"
      >
        <SiCodesandbox className="logo text-3xl md:text-4xl" />
        <div className='lg:flex lg:space-x-4'>
            <div className="text-xl md:text-2xl font-bold">{route}</div>
            <div className="hidden lg:block">
              <ul className=" bg-dark_color-500 flex  lg:flex-row lg:space-x-4 text-very_light_color-500 md:space-y-1 lg:space-y-0 py-1  flex-col text-center">
              
              {
                
                result.map((item) => {
                  if (item==route){
                    return null
                  }
                  return (
                    
                    <li key={item} className="text-base md:text-xl">
                    {
                      item=="Home"?
                      <Link href="/">{item}</Link>
                      :
  
                  <Link href={`/${item}`}>{item}</Link> 
                    }
                  </li>
                );
              })
              
              }
              </ul>
            </div>
        </div>
        <BsCartFill className="logo text-3xl md:text-4xl" />
      </nav>
<div className=' lg:hidden'>
    {
      open &&
      <ul className=" bg-dark_color-500  text-very_light_color-500 md:space-y-1 py-1 flex flex-col text-center">
    
          {
    
            result.map((item) => {
              if (item==route){
                return null
              }
              return (
    
                <li key={item} className="text-base md:text-xl">
                  {
                    item=="Home"?
                    <Link href="/">{item}</Link>
                    :

                <Link href={`/${item}`}>{item}</Link>
                  }
              </li>
            );
          })
    
        }
        </ul>}
</div>
    </div>
  );

}

export default Navbar