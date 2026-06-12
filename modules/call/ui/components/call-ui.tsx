import { useState } from "react";
import { StreamTheme,useCall } from "@stream-io/video-react-sdk";
import { CallLobby } from "./call-lobby";
import { CallActive } from "./call-active";
import { CallEnded } from "./call-ended";


interface Props{
    meetingName: string;
};

export const CallUi = ({meetingName}:Props)=>{
    const call = useCall();
    const [show, setShow] = useState<"lobby" | "call" | "ended">("lobby");

    const handleJoin = async ()=>{
        if(!call) return;

        await call.join();

        setShow("call");
    };
    const handleLeave = ()=>{
        if(!call) return;
        
        call.endCall();       
        setShow("ended")
    };
    return(
        <StreamTheme className="str-video__theme--dark h-full bg-[#101213]">
            {show==="lobby" && <CallLobby onjoin={handleJoin}/>}
            {show === 'call' && (
                <div className="w-screen h-screen dark bg-background">
                     <CallActive onLeave={handleLeave} meetingName={meetingName}/>
                </div>
)}
            {show==="ended" && <CallEnded/>}
        </StreamTheme>
    );
};