import { Animate } from "../../../../components/Animation/Animate";

interface SectionContentProps {
  h4: string;
  h2: string;
  description?: string;
}

export const SectionTitleContent = ({ h4, h2, description }: SectionContentProps) => {
  return (
    <Animate variant="slideUp">
      <h4 className="title-h4">{h4}</h4>
      <h2 className="title-h2">{h2}</h2>
      {description && <p className="max-w-2xl mx-auto text-center mb-8">{description}</p>}
    </Animate>
  );
};
