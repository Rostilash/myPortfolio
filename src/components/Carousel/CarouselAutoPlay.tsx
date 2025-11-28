// import { Animate } from "../Animation/Animate";
// import { useEmblaAutoplay } from "../../hook/useEmblaAutoplay";
// import { CarouselDots } from "./CarouselDots";
// import { CarouselViewport } from "./CarouselViewport";

// export const CarouselAutoPlay = () => {
//   const { emblaRef, selectedIndex, scrollSnaps, scrollTo, handleMouseEnter, handleMouseLeave } = useEmblaAutoplay({ loop: true }, 3000);

//   return (
//     <Animate variant="slideUp">
//       <div className="embla w-full max-w-6xl mx-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//         {/* Viewport */}
//         <CarouselViewport emblaRef={emblaRef} />

//         {/* Dots */}
//         <CarouselDots selectedIndex={selectedIndex} scrollSnaps={scrollSnaps} scrollTo={scrollTo} />
//       </div>
//     </Animate>
//   );
// };
