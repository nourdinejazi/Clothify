"use client"

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
interface currencyProps {
    value? : string | number 
    className? : string
}

const Currency : React.FC<currencyProps> = ({
    value,
    className
}) => {

    const [isMounted,setIsMounted] = useState(false)

    useEffect(()=>(
        setIsMounted(true)
    ),[])

    if (!isMounted){
        return null
    }

    return ( 
        <span className={cn("text-neutral-500 text-sm",className)}>
            {formatter.format(Number(value))}
        </span>
     );
}
 
export default Currency;