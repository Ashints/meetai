import Image from "next/image";

interface Props{
    title:string;
    description:string;
    image?: string; 
};

export const EmptyState = ({
    title,
    description,
    image="/empty.svg"
}:Props)=>{
    return(
         <div className="flex flex-col items-center justify-center">
            {/* Added a small margin bottom to give the text breathing room from the SVG */}
            <Image src={image} alt="Empty" width={240} height={240} className="mb-2"/>
            {/* Reduced gap-y-6 to gap-y-1 to pull description upwards */}
            <div className="flex flex-col gap-y-1 max-w-md mx-auto text-center">
                <h6 className="text-lg font-medium text-slate-900">{title}</h6>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    );
};