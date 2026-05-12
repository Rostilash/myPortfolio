import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";

export const LoadResume = ({ name, href }: { name: string; href: string }) => {
  return (
    <Button
      variant="contained"
      className="btn-primary"
      startIcon={<CloudUploadIcon />}
      component="a"
      href={href}
      download={href}
    >
      {name}
    </Button>
  );
};
1.4;
