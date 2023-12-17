"use client"


import { useState } from "react";
import { ArrowUp, Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";


import { Color, Size } from "@/types";

interface MobileFilterProps {
    sizes : Size []
    colors : Color []
}


const MobileFilter : React.FC<MobileFilterProps> = ({
    sizes,
    colors
}) => {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return ( 
        <>
        <div className="fixed bottom-0 z-10 h-[70px] bg-white  w-full flex items-center justify-center">
            <button
                onClick={onOpen}
                className="flex items-center gap-x-2 border  "
                >
                    Filters
                    <ArrowUp size={16 } />
                </button>
        </div>
        </>
     );
}
 
export default MobileFilter;