import Button from "@mui/material/Button";
import { AnimateGroup } from "../../../../components/Animation/AnimateGroup";
import { AnimationForGroup } from "../../../../components/Animation/AnimationForGroup";
import { myWorks } from "../../../../utils/myWorks";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslation } from "../../../../hook/useTranslation";

export const ProjectsList = () => {
  const t = useTranslation();
  const gridSize = 3;
  const positions = ["0% 0%", "50% 0%", "100% 0%", "0% 50%", "50% 50%", "100% 50%", "0% 100%", "50% 100%", "100% 100%"];
  const bgSize = `${gridSize * 100}% ${gridSize * 100}%`;

  const variants = ["slideRight", "slideUp", "slideLeft", "slideRight", "slideUp", "slideLeft", "slideRight", "slideUp", "slideLeft"] as const;

  return (
    <>
      {myWorks.map((project) => {
        let translation = t.my_works.projects?.[project.name as keyof typeof t.my_works.projects];
        return (
          <AnimateGroup stagger={0.1} className="flex flex-col gap-4 mb-10 md:mb-50 overflow-hidden" key={project.id}>
            <AnimationForGroup variant="slideUp" className="flex-center w-full mb-4 ">
              <span className="h-px bg-gray-200 w-100"></span>
              <h4 className="title-h4 shrink-0 px-10"> {project.name}</h4>
              <span className="h-px bg-gray-200 w-100"></span>
            </AnimationForGroup>

            <div className="flex justify-c flex-col md:flex-row w-full">
              <div className="grid grid-cols-3 w-full md:max-w-[600px] mb-10">
                {positions.map((pos, i) => (
                  <AnimationForGroup key={i} variant={variants[i]}>
                    <div
                      className="aspect-square md:w-full bg-(--color-bg-primary)"
                      style={{
                        backgroundImage: `url(${project.src})`,
                        backgroundPosition: pos,
                        backgroundSize: bgSize,
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </AnimationForGroup>
                ))}
              </div>

              <div className="flex flex-col space-y-4 px-4 pb-10 md:w-xl">
                <AnimationForGroup variant="slideLeft">
                  <p> {t.my_works.aboutP} </p>
                  <p className="text-sm pt-2">{translation.aboutProject}</p>
                </AnimationForGroup>

                <AnimationForGroup variant="slideLeft" className="flex-1">
                  <p>{t.my_works.toolsIUse} </p>
                  <p className="text-sm pt-2">{project.tech}</p>
                </AnimationForGroup>

                <AnimationForGroup variant="slideUp" className="flex justify-around">
                  {project.gitHub && (
                    <Button
                      variant="contained"
                      className="btn-primary-xs"
                      component="a"
                      href={project.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHubIcon />}
                    >
                      GitHub
                    </Button>
                  )}
                  {project.icon && (
                    <Button
                      variant="contained"
                      className="btn-primary-xs"
                      component="a"
                      href={project.liveAddress}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<img src={project.icon} alt={project.icon} className="absolute top-1 left-2 w-6 h-6 md:w-8 md:h-8 rounded-full" />}
                    >
                      Live
                    </Button>
                  )}
                </AnimationForGroup>
              </div>
            </div>
          </AnimateGroup>
        );
      })}
    </>
  );
};
