import React from 'react'
import Image from 'next/image'
import { MdAddCircle } from 'react-icons/md'
import { AiFillMinusCircle } from 'react-icons/ai'

function ShopCartCard() {
  return (
    <div className='    flex shadow-lg space-x-1 m-2 px-4 p-2 bg-very_light_color-500  rounded items-center'>
      <div className="w-20 mt-1.5 h-20">
        <Image
        src={'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'}
      width={70} height={70} 
        alt="product"
        className='rounded-full '
        ></Image>
      </div>
      <div className=''>
      <p className=' font-semibold text-lg' >
        Lorem, ipsum dolor.
      </p >
          <p><strong>Cost:</strong> $6</p>
        <div className="flex items-center space-x-3">
          <button>
          <MdAddCircle className=' text-light_color-500' />
          </button>
          <p>5</p>
          <button><AiFillMinusCircle className=' text-light_color-500' /></button>
          <strong>=</strong>
      <p>$30</p>
        </div>
      </div>
     </div>
  )
}

export default ShopCartCard