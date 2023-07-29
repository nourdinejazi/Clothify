"use client"
import { Disclosure,Transition } from '@headlessui/react'
import { useEffect,useState } from 'react'


interface InfoBoxProps{
    title : string
    description : string
    icon: React.ReactElement;
}



const InfoBox : React.FC<InfoBoxProps> = ({
    title,
    description,
    icon
}) => 

{
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
    setIsMounted(true);
    }, []);

    if (!isMounted) {
    return null;
    }
    
    return ( 
        <div className=''>
            <div className="lg:hidden md:hidden  w-64 rounded-xl   flex flex-col items-center justify-center gap-5   p-4  bg-gray-200/25 text-center">
            <Disclosure >
                <Disclosure.Button className="flex flex-col items-center justify-center">
                    <div className=' rounded-full bg-gray-300 bg-opacity-50 w-12 h-12 flex items-center justify-center '>{icon}</div>
                    <h2 className='font-bold'>{title}</h2>
                </Disclosure.Button>
                <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
                >
                <Disclosure.Panel className="">
                    <p className='text-sm p-2 '>
                        {description}
                    </p>
                </Disclosure.Panel>
            </Transition>
            </Disclosure>
        </div>
        <div className='sm:hidden'>
            <div className="h-72  w-72 rounded-xl aspect-square  flex flex-col items-center justify-center gap-5   p-2  bg-gray-200/25 text-center">
                <div className=' rounded-full bg-gray-300 bg-opacity-50  p-2'>{icon}</div>
                <h2 className='font-bold'>{title}</h2>
                <p className='text-sm p-2 '>
                    {description}
                </p>
            </div>
        </div>
    </div>
     );
}
 
export default InfoBox;