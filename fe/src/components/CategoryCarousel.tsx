import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "DevOps Engineer",
  "Data Scientist",
  "Graphics Designer",
  "UI/UX Designer",
  "Mobile Developer",
  "Game Developer",
];

const CategoryCarousel = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-center bg-gradient-to-r from-[#fdbb2d] to-[#ec38bc] bg-clip-text text-transparent">
        Gợi ý cho bạn:
      </h1>
      <Carousel className="w-full max-w-xl mx-auto my-5">
        <CarouselContent>
          {category.map((cate, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 flex items-center justify-center"
            >
              <Button
                variant="outline"
                className="cursor-pointer px-6 py-3 bg-black text-white rounded-full hover:opacity-85 transition-all duration-300 ease-in-out shadow-md"
              >
                {cate}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer hover:bg-gray-100" />
        <CarouselNext className="cursor-pointer hover:bg-gray-100" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
