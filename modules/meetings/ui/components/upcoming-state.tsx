import { EmptyState } from "@/components/empty-state"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { VideoIcon,BanIcon } from "lucide-react"

interface Props{
    meetingId: string;
    onCancelMeeting: () => void;
    isCancelling: boolean;
}

export const UpcomingState = ({meetingId,onCancelMeeting,isCancelling}:Props)=>{
    return(
         <div className="bg-white rounded-lg px-8 py-16 flex flex-col gap-y-6 items-center justify-center w-full max-w-2xl mx-auto shadow-sm">
            <EmptyState
                image="/upcoming.svg"
                title="Not started yet"
                description="Once you start this meeting, a summary will appear here"
            />
            
            <div className="flex flex-row justify-center items-center gap-3 w-full">
                <Button 
                    variant="secondary"
                    className="w-auto px-4" 
                    onClick={onCancelMeeting}
                    disabled={isCancelling}
                >
                    <BanIcon className="w-4 h-4 mr-2"/>
                    Cancel meeting
                </Button>
                
                <Button 
                    asChild 
                    className="w-auto px-4" 
                    disabled={isCancelling}
                >
                    <Link href={`/call/${meetingId}`}>
                        <VideoIcon className="w-4 h-4 mr-2"/>
                        Start meeting
                    </Link>
                </Button>
            </div>
        </div>
    )
} 