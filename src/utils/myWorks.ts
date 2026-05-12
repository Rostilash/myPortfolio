export interface MyWorksProps {
  id: string;
  name: string;
  icon: string;
  src: string;
  liveAddress: string;
  gitHub: string;
  tech: string;
  describe: string;
}

export const myWorks = [
  {
    id: "1",
    name: "Monopoly",
    icon: "my-works/monopoly_icon.png",
    src: "my-works/monopoly.png",
    liveAddress: "https://all-games-versions.web.app/",
    gitHub: "",
    tech: "Html, CSS, React, React-hooks, Redux-toolkit, Firebase, Realtime Database",
  },
  {
    id: "2",
    name: "GEN",
    icon: "my-works/gen-icon.svg",
    src: "my-works/gen-main.png",
    liveAddress: "https://global-events-nation.web.app/",
    gitHub: "",
    tech: "Html, CSS, React, React-hooks, Redux, Firebase (rules, auth), Realtime Database, Framer Motion, Leaflet, dayjs, API",
  },
  {
    id: "3",
    name: "Echat",
    icon: "my-works/echat-icon.png",
    src: "my-works/echat-main.png",
    liveAddress: "https://echat-6b9dd.web.app/",
    gitHub: "https://github.com/Rostilash/echat",
    tech: "Html, CSS, React, React-hooks, Redux, Firebase, Realtime Database",
  },
  {
    id: "4",
    name: "LeafyCartShop",
    icon: "my-works/leafyCart-icon.png",
    src: "my-works/leafyCart-main.png",
    tech: "Html, CSS, React, React-hooks, typeScript, tailwind Redux-toolkit, Firebase",
    liveAddress: "https://leafycart-shop.web.app/",
    gitHub: "https://github.com/Rostilash/LeafyCart",
  },
  {
    id: "5",
    name: "UzhRent",
    icon: "ukraine.svg",
    src: "my-works/techRentUzh.png",
    tech: "Html, CSS, React, React-hooks, Firebase,tailwind, TypeScript, Gsap animation",
    liveAddress: "https://tech-rent-uzh.web.app/",
    gitHub: "",
  },
  {
    id: "6",
    name: "WeatherApp",
    icon: "my-works/weather-icon.png",
    src: "my-works/weather-main.png",
    liveAddress: "https://rostilash.github.io/weather-app/#/weather-app/",
    gitHub: "https://github.com/Rostilash/weather-app",
    tech: "Html, CSS, React, React-hooks, Leaflet, Rest-Api",
  },
];
