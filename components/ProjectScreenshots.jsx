import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import Image from "next/image";

export default function ProjectScreenshots({ screenShots }) {
  return (
    <div className="flex justify-center py-10">
      <Carousel className="w-full max-w-4xl mx-auto ">
        <CarouselContent className="-ml-1">
          {screenShots.map((screenShot, index) => (
            <CarouselItem key={index}>
              <Image
                src={screenShot.image}
                alt={screenShot.alt}
                className="object-cover "
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
