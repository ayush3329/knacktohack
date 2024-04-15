"use client"
import { userDetail } from "@/store/recoil";
import { useRecoilValue } from "recoil";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png"
import { set } from "zod";



const Home = () => {
    const [isLogin, setIsLogin] = useState(false);
    const router = useRouter();
    const authenticate = async () => {
        try {
          const response = await fetch("/api/random", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
          const data = await response.json();
          if (!data.success) {
            router.push("/auth");
          } else{
            setIsLogin(true)
          }
        } catch (error) {
          console.error("Error during authentication:", error);
        }
      };
    
      useEffect(() => {
        authenticate();
      }, []);


    const Detail = useRecoilValue(userDetail);
    console.log(Detail);
    
    if(!isLogin){
        return(
            <div className="bg-black h-[100vh] w-[100vw] flex items-center justify-center flex-col">
                <Image src={logo} alt="Logo" />
                <span className="loader"></span>
            </div>
        )
    }

    return ( <div className="h-screen w-screen overflow-y-auto bg-blackish text-white flex">

        <ScrollArea className="h-[100%] w-[15%] rounded-md pt-[2rem] px-[1rem] pb-[2rem]">
        Jokester began sneaking into the castle in the middle of the night and leaving
        jokes all over the place: under the king's pillow, in his soup, even in the
        royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
        then, one day, the people of the kingdom discovered that the jokes left by
        Jokester were so funny that they couldn't help but laugh. And once they
        started laughing, they couldn't stop.
        </ScrollArea>
        
        <div className="h-[100%] w-[85%] pt-[3rem] pb-[2rem]  items-center justify-center flex flex-col gap-[1rem] bg-greyish">
            <ScrollArea className="h-[90%] w-[100%] flex items-center justify-center rounded-md  text-white">
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                <div className="bg-green-600 px-[25%]  w-[100%]  mb-[2rem]">
                 Jokester began sneaking into the castle in the middle of the night and leaving
                 jokes all over the place: under the king's pillow, in his soup, even in the
                 royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                 then, one day, the people of the kingdom discovered that the jokes left by
                 Jokester were so funny that they couldn't help but laugh. And once they
                 started laughing, they couldn't stop.
                 royal toil
                </div>
                
            </ScrollArea>
            <Textarea className="w-[70%]"/>
        </div>



    </div> );
}
 
export default Home;