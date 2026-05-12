import { Animate } from "../../../../components/Animation/Animate";

export const AboutImage = () => {
  return (
    <Animate
      variant="slideUp"
      className="h-40 w-full md:w-100 md:h-100 bg-blue-300/10 rounded-2xl max-w-none"
    >
      <img
        src="https://framerusercontent.com/images/rlNudC5gK4JY0Bd54BiFzhFLk.png?scale-down-to=1024&width=1920&height=1200"
        alt="Lashyn-Rostislav-image"
        className="h-full w-full object-cover"
      />
    </Animate>
  );
};
