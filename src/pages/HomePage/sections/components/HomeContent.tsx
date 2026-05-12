import { Animate } from "../../../../components/Animation/Animate";
import { useTranslation } from "../../../../hook/useTranslation";

export const HomeContent = () => {
  const t = useTranslation();

  return (
    <>
      <Animate variant="slideUp" duration={0.5}>
        <h3 className="title-h3">
          {t.home.greeting} {t.home.fio}
        </h3>
      </Animate>

      <Animate variant="slideUp" duration={0.7}>
        <h1 className="title-h1">
          {t.home.knowledge} <br />
          {t.home.from}
        </h1>
      </Animate>

      <Animate variant="slideUp" duration={1}>
        <p className="max-w-2xl mx-auto text-base text-[14px] sm:text-2xs md:text-balance mb-8">
          {t.home.description}
        </p>
      </Animate>
    </>
  );
};
