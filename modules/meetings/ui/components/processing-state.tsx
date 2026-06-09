import { EmptyState } from "@/components/empty-state"

export const ProcessingState = ()=>{
    return(
         <div className="bg-white rounded-lg px-8 py-16 flex flex-col gap-y-6 items-center justify-center w-full max-w-2xl mx-auto shadow-sm">
            <EmptyState
                image="/processing.svg"
                title="Meeting completed "
                description="This meeting was completed, a summary will appear soon"
            />
        </div>
    )
} 