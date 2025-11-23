import React, { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import { Animate } from "../../../../components/Animation/Animate";
import { SuccessMessage } from "../../../../components/BoolMessages/SuccessMessage";
import { useTranslation } from "../../../../hook/useTranslation";

export const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const t = useTranslation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xdkbyazj", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSuccess(true);
      form.reset();
    } else {
      console.error("Error sending form");
    }
  };

  if (success) {
    return <SuccessMessage />;
  }

  return (
    <div className="flex flex-col gap-4 py-4 overflow-hidden ">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 justify-center">
          <Animate variant="slideRight">
            <TextField
              name="name"
              type="name"
              helperText={t.contacts.placeHName}
              id="demo-helper-text-misaligned"
              label={t.contacts.name}
              variant="outlined"
              className="md:w-xs custom-input"
              required
            />
          </Animate>

          <Animate variant="slideLeft">
            <TextField
              name="email"
              type="email"
              helperText={t.contacts.placeHEmail}
              id="outlined-basic"
              label={t.contacts.Email}
              variant="outlined"
              className="md:w-xs custom-input"
              required
            />
          </Animate>
        </div>

        <Animate variant="popIn" className="flex-center py-4">
          <TextareaAutosize
            name="message"
            minRows={8}
            aria-label="minimum height"
            placeholder={t.contacts.placeHTextArea}
            className="border p-4 w-xs md:w-[650px] flex justify-center"
            required
          />
        </Animate>

        <Animate variant="popIn" className="flex justify-center">
          <Button type="submit" variant="contained" className="btn-primary w-40" rel="noopener noreferrer" endIcon={<ArrowForwardIcon />}>
            {t.contacts.formBtn}
          </Button>
        </Animate>
      </form>
    </div>
  );
};
