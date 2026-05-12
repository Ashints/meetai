"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-clients";


export default function Home() {

  const { data: session, } = authClient.useSession() 

  const [email ,SetEmail]= useState("");
  const [name ,SetName]= useState("");
  const [password ,SetPassword]= useState("");

  const onSubmit = () =>{
  authClient.signUp.email({
    email,
    name,
    password,
    
  },{
    onError:()=>{
      window.alert("Something went wrong")
    },
    onSuccess:()=>{
      window.alert("Success")
    }
  });
}

const onLogin = () =>{
  authClient.signIn.email({
    email,
    password,
    
  },{
    onError:()=>{
      window.alert("Something went wrong")
    },
    onSuccess:()=>{
      window.alert("Success")
    }
  });
}

if(session){
  return(
    <div className="flex flex-col p-4 gap-y4">
      <p>Loggin in as {session.user.name}</p>
      <Button onClick={()=>authClient.signOut()}>
        Sign out
      </Button>
    </div>
  );
}

  return (
    <div className="flex flex-col gap-y-10">
    <div className="p-4 flex flex-col gap-y-4">
      <Input 
      placeholder="name" 
      value={name} 
      onChange={(e)=> SetName(e.target.value)}
      />
      <Input 
      placeholder="email" 
      value={email} 
      onChange={(e)=> SetEmail(e.target.value)}
      />
      <Input 
      placeholder="password" 
      value={password} 
      onChange={(e)=> SetPassword(e.target.value)}
      />
      <Button onClick={onSubmit}>
        Create User
      </Button>

    </div>

    <div className="p-4 flex flex-col gap-y-4">
      <Input 
      placeholder="email" 
      value={email} 
      onChange={(e)=> SetEmail(e.target.value)}
      />
      <Input 
      placeholder="password" 
      value={password}
      type="password"
      onChange={(e)=> SetPassword(e.target.value)}
      />
      <Button onClick={onLogin}>
        Login 
      </Button>

    </div>
    </div>
  );
}
