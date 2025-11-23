import { Link } from "react-scroll";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useTranslation } from "../../../hook/useTranslation";
import { MyImage } from "./components/MyImage";
import { HomeContent } from "./components/HomeContent";
import { LoadResume } from "../../../components/Buttons/LoadResume";
import { Animate } from "../../../components/Animation/Animate";

export const HomeHeader = () => {
  const t = useTranslation();

  return (
    <section className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4" id="home">
      <MyImage name={t.home.name} />

      <HomeContent />

      <div className="flex gap-4">
        <Animate variant="slideUp" duration={1.4}>
          <Button component={Link} to="contacts" smooth={true} duration={1000} variant="contained" endIcon={<SendIcon />} className="btn-primary">
            {t.home.contact_me}
          </Button>
        </Animate>

        {/* Added props for reuse component if needed */}
        <LoadResume name={t.home.resume} href="Lashyn_Rostislav.pdf" />
      </div>
    </section>
  );
};
