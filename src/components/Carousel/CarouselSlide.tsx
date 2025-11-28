// import Button from "@mui/material/Button";
// import type { MyWorksProps } from "../../utils/myWorks";
// import GitHubIcon from "@mui/icons-material/GitHub";

// export const CarouselSlide = ({ work }: { work: MyWorksProps }) => {
//   // Image bg on Div element
//   return (
//     <div
//       className="embla__slide flex-[0_0_100%] min-w-0 aspect-16/16 bg-cover bg-center flex flex-col justify-end relative"
//       key={work.id}
//       style={{ backgroundImage: `url(${work.src})` }}
//     >
//       {/* bottom context with buttons */}
//       <div className="flex flex-row py-2 px-2 md:px-4 md:h-40 items-center justify-between gap-4 bg-black/40 backdrop-blur-xs relative">
//         <div>
//           <p className="text-gray-50 p-5 text-2xs hidden md:block md:line-clamp-3">What you can do? {work.describe}</p>
//           <p className="text-gray-50 p-5 text-xs text-balance line-clamp-2">Following Tools: {work.tech}</p>
//         </div>

//         <div className="flex flex-col gap-1 md:gap-4">
//           <Button
//             variant="contained"
//             className="btn-primary-xs"
//             component="a"
//             href={work.gitHub}
//             target="_blank"
//             rel="noopener noreferrer"
//             startIcon={<GitHubIcon />}
//           >
//             GitHub
//           </Button>
//           <Button
//             variant="contained"
//             className="btn-primary-xs"
//             component="a"
//             href={work.liveAddress}
//             target="_blank"
//             rel="noopener noreferrer"
//             startIcon={<img src={work.icon} alt={work.icon} className="absolute top-1 left-2 w-6 h-6 md:w-8 md:h-8 rounded-full" />}
//           >
//             Live
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };
