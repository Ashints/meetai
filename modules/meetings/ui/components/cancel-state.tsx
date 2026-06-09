import { EmptyState } from "@/components/empty-state"

export const CancelledState = ()=>{
    return(
         <div className="bg-white rounded-lg px-8 py-16 flex flex-col gap-y-6 items-center justify-center w-full max-w-2xl mx-auto shadow-sm">
            <EmptyState
                image="/cancelled.svg"
                title="Meeting cancelled "
                description="This meeting was cancelled"
            />
        </div>
    )
} 