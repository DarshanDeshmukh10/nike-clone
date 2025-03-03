import React from 'react'
import {IoMdHeartEmpty} from 'react-icons/io';
import Wrapper from '@/components/Wrapper';
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper>
        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
        {/*left column */}
        <div className='w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0'>
          <ProductDetailsCarousel/>
        </div>
        {/*right column */}
        <div className='flex-[1] py-3'>
          {/*product title  */}
          <div className='text-[34px] font-semibold mb-2'>
            Jorden Retro 6 G
          </div>
          {/*prduct subtitle */}
          <div className='text-lg font-semibold mb-5'>
            Men&apos;s Golf Shoes
          </div>
          {/**Price */}
          <div className='text-lg font-semibold'> 
            MRP : ₹ 19 095.00
          </div>
          <div className='text-md font-medium text-black/[0.5]'>
            incl. of taxes
          </div>
          <div className='text-md font-medium text-black/[0.5] mb-20'>
            {'(Also incl. all applicable duties)'}
          </div>
          
          {/*product size  */}
          <div className='mb-10'>
            <div className='flex justify-between mb-2'>
                {/*Heading */}
               <div className='text-md font-semibold'>
                Select Size
               </div>
               <div className='text-md font-medium text-black/[0.5] cursor-pointer'>
                  Select Guide
               </div>
            </div>
            {/**sizes */}
            <div className='grid grid-cols-3 gap-2'>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>UK 6</div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>UK 6.5</div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>UK 7</div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>UK 7.5</div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>UK 8</div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>UK 8.5</div>
              <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>UK 9</div>
              <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>UK 9.5</div>
              <div className='border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50'>UK 10</div>
            </div>
         {/*error message */}
         <div className='mt-1 text-red-600'>Size selection is required</div>
          </div>
          {/**Add to card button  */}
          <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75'>Add to Card</button>  
          <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">Wishlist <IoMdHeartEmpty size={20} /></button>
          
          <div className='text-lg font-bold mb-5'>Product Details</div>
          <div className='text-md mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae blanditiis hic ipsam? Non excepturi nisi provident architecto nobis facilis quos modi, dolore harum? Debitis eligendi placeat odit maiores blanditiis doloremque, sunt quaerat qui ducimus praesentium laborum! Est eaque repudiandae quis, fugiat inventore cupiditate quibusdam, at dolor enim quo deserunt. Quia repudiandae modi enim vel natus placeat accusantium assumenda tenetur iusto.</div>
          <div className='text-md mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae blanditiis hic ipsam? Non excepturi nisi provident architecto nobis facilis quos modi, dolore harum? Debitis eligendi placeat odit maiores blanditiis doloremque, sunt quaerat qui ducimus praesentium laborum! Est eaque repudiandae quis, fugiat inventore cupiditate quibusdam, at dolor enim quo deserunt. Quia repudiandae modi enim vel natus placeat accusantium assumenda tenetur iusto.</div>
          </div>  
        </div>
        <div>
          <RelatedProducts/>
        </div>
      </Wrapper>
    </div>
  )
}

export default ProductDetails
