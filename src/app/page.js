import { BestSellers, Collection, FollowUs, Header, Modiweek, Sustainability } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
   <div>
     <Header/>
     <BestSellers/>
     <Collection/>
     <Modiweek/>
     <Sustainability/>
     <FollowUs/>
   </div>
  );
}
