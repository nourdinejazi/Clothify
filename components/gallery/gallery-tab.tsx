"use client"
import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image } from "@/types";

interface GalleryTabProps {
  image: Image;
}

const GalleryTab: React.FC<GalleryTabProps> = ({
  image
}) => {
  return ( 
    <Tab
      className="relative flex flex-col w-[150px] h-[150px] cursor-pointer items-center justify-center rounded-md bg-white  "
    >
      {({ selected }) => (
        <div>
          <span className="absolute w-[150px] h-[150px]  inset-0 overflow-hidden rounded-md">
            <NextImage 
            width={200}
            height={200}
              src={image.url} 
              alt="" 
              className="" 
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md   ring-2 ring-offset-1',
              selected ? 'ring-gre' : 'ring-transparent',
            )}
          />
        </div>
      )}
    </Tab>
  );
}
 
export default GalleryTab;