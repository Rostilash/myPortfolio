import { useTranslation } from "../../hook/useTranslation";

export const SuccessMessage = () => {
  const t = useTranslation();

  return (
    <div className="p-6 min-h-100 rounded-xl text-green-800 text-center">
      <p className="title-h2">{t.contacts.sendedMSG}</p>
      <span>{t.contacts.feedbackMSG}</span>
      <div className="bg-image-contacts mt-10" />
    </div>
  );
};
