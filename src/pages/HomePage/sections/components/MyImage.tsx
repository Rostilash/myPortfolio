import { Animate } from "./../../../../components/Animation/Animate";

export const MyImage = ({ name }: { name: string }) => {
  return (
    <Animate variant="popIn" className="relative">
      <img src="LRimg.jpg" alt={name} className="h-50 w-50 md:h-60 md:w-60 rounded-full object-cover" />
    </Animate>
  );
};
