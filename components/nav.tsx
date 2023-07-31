"use client"

import MainNav from "./main-nav";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Popover ,Transition  } from '@headlessui/react'

interface NavProps{
    className?  :string
}

const Nav : React.FC<NavProps> = ({
    className
}) => {
    

    return ( 
        <div className="absolute  flex flex-col   font-bold my-2">
            <div className="lg:hidden md:hidden p-4">
                <Popover>
                    <div className={cn("text-2xl text-bla mb-16 pr-8 flex  items-center justify-center gap-2",className)}><Link href={'/'}>CLOTHIFY</Link><Popover.Button><Menu className={`${className ? className : "text-black"}`}  size={30} /></Popover.Button></div>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                    <Popover.Panel>
                    <MainNav />
                    </Popover.Panel>
                    </Transition>
                </Popover>
            </div>
            <div className=" sm:hidden  absolute h-full flex flex-col   lg:border-r p-4 lg:border-gray-200/25 font-bold">
                <h1 className={cn("text-2xl text-whi  p-8",className)}><Link href={'/'}>CLOTHIFY</Link></h1>
                <MainNav className={cn("text-medium",className)} />
            </div>
        </div>
     );
}
 
export default Nav;