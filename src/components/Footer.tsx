import Button from "@mui/material/Button";
import { LogoSmall } from "./Icon/LogoSmall";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export const Footer = () => {
  return (
    <footer className="bg-primary custom-text flex-center flex-col gap-4 px-[18%]" id="footer">
      <LogoSmall />
      <div>
        <EmailIcon /> acrossfear2022@gmail.com
      </div>

      {/* divider */}
      <span className="border-b w-full border-gray-400 mt-10"></span>

      <div className="flex items-center justify-between w-full pb-8">
        <div>© 2025 Lashyn Rostislav. All rights reserved.</div>
        <div>
          <Button
            className="text-white"
            startIcon={<GitHubIcon />}
            component="a"
            href="https://github.com/Rostilash"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Button>
          <Button
            className="text-white"
            startIcon={<LinkedInIcon />}
            component="a"
            href="https://www.linkedin.com/in/rostislav-lashyn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </footer>
  );
};
