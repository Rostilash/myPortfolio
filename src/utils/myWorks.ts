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
    tech: "Html, Css, React, React-hooks, Redux-toolkit, Firebase, Realtime Database",
  },
  {
    id: "2",
    name: "Echat",
    icon: "my-works/echat-icon.png",
    src: "my-works/echat-main.png",
    liveAddress: "https://echat-6b9dd.web.app/",
    gitHub: "https://github.com/Rostilash/echat",
    tech: "Html, Css, React, React-hooks, Redux, Firebase, Realtime Database",
  },
  {
    id: "3",
    name: "LeafyCartShop",
    icon: "my-works/leafyCart-icon.png",
    src: "my-works/leafyCart-main.png",
    tech: "Html, Css, React, React-hooks, typeScript, tailwind Redux-toolkit, Firebase",
    liveAddress: "https://leafycart-shop.web.app/",
    gitHub: "https://github.com/Rostilash/LeafyCart",
  },
  {
    id: "4",
    name: "UzhRent",
    icon: "ukraine.svg",
    src: "my-works/techRentUzh.png",
    tech: "Html, Css, React, React-hooks, Firebase,tailwind, TypeScript, Gsap animation",
    liveAddress: "https://tech-rent-uzh.web.app/",
    gitHub: "",
  },
  {
    id: "5",
    name: "WeatherApp",
    icon: "my-works/weather-icon.png",
    src: "my-works/weather-main.png",
    liveAddress: "https://rostilash.github.io/weather-app/#/weather-app/",
    gitHub: "https://github.com/Rostilash/weather-app",
    tech: "Html, Css, React, React-hooks, Leaflet, Rest-Api",
  },
];
