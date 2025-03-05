import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
//import { useEffect, useState } from "react";

export default function Home({ products }) {
    // const [data,setData]=useState(null)
    // useEffect(()=>{
    //     fetchProducts();
    // },[])
    // const fetchProducts= async()=>{
    //     const { data }=await fetchDataFromApi('/api/products')
    //     setData(data);
    //     console.log(data)
    // }
    return( <main >
    <HeroBanner/>
   
    <Wrapper>
    <div className="text-center max-w-[1200px] max-auto-my-[50px] md:my-[80px]">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">Causing For Your Miles </div>
        <div className="text-md md:text-xl">
        Nike Air cushioning reduces the weight of the shoe without reducing performance. The lighter the shoe is, the less energy athletes put out during their performance. 
        </div>
        
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        
         {products?.data?.map((product)=>(
            <ProductCard key={product?.id} data={product}/> 
          ))}

        {/* <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
         */}
    </div>
    </Wrapper>
    </main>
    )
}
export async function getStaticProps(){
    const products=await fetchDataFromApi('/api/products?populate=*');
    return{
      props: {products}
  }
       
  } 