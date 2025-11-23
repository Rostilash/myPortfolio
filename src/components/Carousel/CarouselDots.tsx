interface CarouselDots {
  selectedIndex: number;
  scrollSnaps: number[];
  scrollTo: (i: number) => void;
}

export const CarouselDots = ({ selectedIndex, scrollSnaps, scrollTo }: CarouselDots) => {
  return (
    <div className="flex justify-center gap-3 mt-4">
      {scrollSnaps.map((_, i) => (
        <button
          key={i}
          onClick={() => scrollTo(i)}
          className={`w-3 h-3 rounded-full transition-all ${i === selectedIndex ? "bg-blue-600 scale-125" : "bg-gray-400"}`}
        />
      ))}
    </div>
  );
};
