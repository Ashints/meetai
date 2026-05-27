import { auth } from "@/lib/auth";
import { Homeview } from "@/modules/home/ui/views/home-view";
import { redirect } from "next/navigation";
import { headers } from "next/headers";


const page = async() => {
  const session= await auth.api.getSession({
    headers: await headers(), 
  });

  if(!session){
    redirect("/sign-in");
  }


  return <Homeview/>
};
export default page