import { useTranslation } from "../../../hook/useTranslation";
import { ProjectsList } from "./components/ProjectsList";

import { SectionTitleContent } from "./components/SectionTitleContent";

export const MyWebWorks = () => {
  const t = useTranslation();

  return (
    <section className="w-full  px-[5%] md:px-[12%] py-10 scroll-mt-20" id="my_works">
      <SectionTitleContent h4={t.my_works.headH4} h2={t.my_works.headH2} description={t.my_works.description} />

      <ProjectsList />

      {/* --- Carousel --- */}
      {/* <CarouselAutoPlay /> */}
    </section>
  );
};
