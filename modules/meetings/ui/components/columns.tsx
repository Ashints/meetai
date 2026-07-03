"use client"

import { format } from "date-fns"
import { ColumnDef } from "@tanstack/react-table"
import { MeetingGetMany } from "../../types"
import { GeneratedAvatar } from "@/components/generated-avatar"
import { Badge } from "@/components/ui/badge"
import { CircleCheckIcon,
    CircleXIcon,
    ClockArrowUpIcon,
    ClockFadingIcon,
    CornerDownRightIcon,
    LoaderIcon
 } from "lucide-react"
import { cn, formatDuration } from "@/lib/utils"

const statusIconMap = {
    upcoming: ClockArrowUpIcon,
    active: LoaderIcon,
    completed: CircleCheckIcon,
    processing: LoaderIcon,
    cancelled: CircleXIcon,
}

const statusColorMap = {
    upcoming: { backgroundColor: "#fef08a33", color: "#854d0e", borderColor: "#854d0e20" },
    active: { backgroundColor: "#bfdbfe33", color: "#1e40af", borderColor: "#1e40af20" },
    completed: { backgroundColor: "#a7f3d033", color: "#065f46", borderColor: "#065f4620" },
    cancelled: { backgroundColor: "#fecdd333", color: "#9f1239", borderColor: "#9f123920" },
    processing: { backgroundColor: "#e5e7eb33", color: "#1f2937", borderColor: "#1f293720" },
}

export const columns: ColumnDef<MeetingGetMany[number]>[] = [
  {
    accessorKey: "name",
    header: "Meeting Name",
    cell: ({row})=>(
        <div className="flex flex-col gap-t-1">
            <span className="font-semibold capitalize">{row.original.name}</span>
                <div className="flex items-center gap-x-2">
                    <div className="flex items-center gap-x-1">
                    <CornerDownRightIcon className="size-3 text-muted-foreground"/>
                    <span className="text-sm text-muted-foreground max-w-[200px] truncate capitalize">
                        {row.original.agent.name}
                    </span>
                </div>
                <GeneratedAvatar
                variant="botttsNeutral"
                seed={row.original.agent.name}
                className="size-4"
                />
                <span className="text-sm text-muted-foreground">
                    { row.original.startedAt ? format(row.original.startedAt,"MMM d"): ""}
                </span>
            </div> 
        </div>
    )
  },
  {
    accessorKey: "status",
    header: "Status",
    cell:({row})=>{
        const Icon = statusIconMap[row.original.status as keyof typeof statusIconMap]
        return(
        <Badge
            variant="outline"
            style={statusColorMap[row.original.status as keyof typeof statusColorMap]}
            className="capitalize [&>svg]:size-4"
            >
            <Icon
            className={cn(
                row.original.status === "processing" && "animate-spin"
            )}
            />
            {row.original.status}
            </Badge>
        )
    },
},
    {
    accessorKey:"duration",
    header: "duration",
    cell: ({row})=>(
        <Badge
        variant="outline"
        className="capitalize [&>svg]:size-4 flex items-center gap-x-2"

        >
            <ClockFadingIcon className="text-blue-700"/>
            {row.original.duration ? formatDuration(row.original.duration): "No duration"}
        </Badge>
    )
    }
]