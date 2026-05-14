import { auth } from "@/lib/auth";
import Signupview from "@/modules/auth/ui/views/sign-up-view";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async()=>{
    const session= await auth.api.getSession({
            headers: await headers(), 
          });
        
          if(!!session){
            redirect("/");
          }
    return(<Signupview/>
    );
}

export default Page;