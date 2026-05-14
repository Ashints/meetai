import { Card } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import Signinview from "@/modules/auth/ui/views/sign-in-view";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

const Page = async()=>{
      const session= await auth.api.getSession({
        headers: await headers(), 
      });
    
      if(!!session){
        redirect("/");
      }
    
    return(<Signinview/>
    );
}

export default Page;