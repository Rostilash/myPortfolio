import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import { Animate } from "../Animation/Animate";

export const LoadResume = ({ name, href }: { name: string; href: string }) => {
  return (
    <Animate variant="slideUp" duration={1.4}>
      <Button variant="contained" className="btn-primary" startIcon={<CloudUploadIcon />} component="a" href={href} download={href}>
        {name}
      </Button>
    </Animate>
  );
};
1.4;
