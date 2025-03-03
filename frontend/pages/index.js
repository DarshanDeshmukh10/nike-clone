import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
HeroBanner
export default function Home() {
    return <main className="h-[2000px]">
    <HeroBanner/>
    <Wrapper>
    <div className="text-center max-w-[1200px] max-auto-my-[50px] md:my-[80px]">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">Causing For Your Miles</div>
        <div className="text-md md:text-xl">
        Nike Air cushioning reduces the weight of the shoe without reducing performance. The lighter the shoe is, the less energy athletes put out during their performance. 
        </div>
        </div>
         
    </Wrapper>
    </main>;
}
