import { Animate } from "../../../components/Animation/Animate";
import { useTranslation } from "../../../hook/useTranslation";
import { AboutImage } from "./components/AboutImage";
import { SectionTitleContent } from "./components/SectionTitleContent";
import { ToolsList } from "./components/ToolsList";

export const AboutMe = () => {
  const t = useTranslation();
  return (
    <section className="w-full px-[12%] py-10 scroll-mt-20" id="about">
      <SectionTitleContent h4={t.aboutMe.headH4} h2={t.aboutMe.headH2} />

      <div className="flex w-full flex-col justify-center lg:flex-row items-center gap-20 my-10 max-w-6xl mx-auto">
        <AboutImage />

        <Animate variant="slideUp" className="space-y-6">
          <p className="px-1 max-w-2xl">{t.aboutMe.context}</p>
          <h4>{t.aboutMe.tools}</h4>

          {/* Tools arr icons */}
          <ToolsList />
        </Animate>
      </div>
    </section>
  );
};
