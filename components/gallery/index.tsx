"use client";

import NextImage from "next/image";
import { Tab } from "@headlessui/react";
import { useState, useEffect } from "react";
import { Image } from "@/types";

import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const thresholdWidth = 920;

  if (windowWidth < thresholdWidth) {
    return (
      <div className="flex flex-col items-center justify-center">
        {images.map((image) => (
          <div key={image.id} className="  ">
            <NextImage
              width={500}
              height={400}
              src={image.url}
              alt="Image"
              className=""
            />
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center  py-8">
        <Tab.Group as="div" className="flex gap-10   w-[700px]   ">
          <div className="  overflow-x-hidden h-[700px] overflow-y-auto  p-2  ">
            <Tab.List className="grid grid-cols-1 gap-6 w-[150px] ">
              {images.map((image) => (
                <GalleryTab key={image.id} image={image} />
              ))}
            </Tab.List>
          </div>
          <Tab.Panels className=" w-[500px] flex  ">
            {images.map((image) => (
              <Tab.Panel key={image.id}>
                <div className=" relative rounded-lg overflow-hidden ">
                  <NextImage
                    width={500}
                    height={400}
                    src={image.url}
                    alt="Image"
                    className=" "
                  />
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    );
  }
};

export default Gallery;
