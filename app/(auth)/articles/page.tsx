
import Posts from "@/Components/BlogComponents/Posts";
import { HeroSection } from "@/Components/BlogComponents/Herosection";
import  {Tags} from "@/Components/BlogComponents/Tag";

export default async function Home(){
  
  return (
 <div>
  <HeroSection />
      <div className ="flex relative lg:flex-row flex-col-reverse lg:flex items-start ">
        <div className ="lg:w-[65%]">
        <Posts />;
        </div>

      <aside className="flex-1 sticky lg:top-0 lg:w-[33px] h-auto pb-5">
        <Tags />
      </aside>
      </div>
 </div>
  )
}