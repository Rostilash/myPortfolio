import { MyWebWorks } from "./sections/MyWebWorks";
import { HomeHeader } from "./sections/HomeHeader";
import { AboutMe } from "./sections/AboutMe";
import { Contacts } from "./sections/Contacts";

export const HomePage = () => {
  return (
    <>
      {/* --- Header section --- */}
      <HomeHeader />

      {/* --- About section --- */}
      <AboutMe />

      {/* --- MyWebWorks section --- */}
      <MyWebWorks />

      {/* --- Contacts section --- */}
      <Contacts />
    </>
  );
};
