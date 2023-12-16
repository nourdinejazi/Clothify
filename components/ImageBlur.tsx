import { cn } from "@/lib/utils";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
interface ImageBlurProps {
  src: string;
  className?: string;
}

const ImageBlur: React.FC<ImageBlurProps> = async ({ src, className }) => {
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  });

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      placeholder="blur"
      blurDataURL={base64}
      alt=""
      fill
      className={cn("", className)}
    ></Image>
  );
};

export default ImageBlur;
