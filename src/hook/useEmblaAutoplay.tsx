import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export const useEmblaAutoplay = (options = {}, interval = 3000) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const autoplayRef = useRef<number | null>(null);
  const isHovered = useRef(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  };

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);

    autoplayRef.current = setInterval(() => {
      if (!isHovered.current) scrollNext();
    }, interval);

    return () => {
      if (autoplayRef.current !== null) clearInterval(autoplayRef.current);
    };
  }, [emblaApi, onSelect, scrollNext, interval]);

  const handleMouseEnter = () => (isHovered.current = true);
  const handleMouseLeave = () => (isHovered.current = false);

  return {
    emblaRef,
    selectedIndex,
    scrollSnaps,
    scrollTo,
    handleMouseEnter,
    handleMouseLeave,
  };
};
