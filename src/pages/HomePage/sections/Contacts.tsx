import { SectionTitleContent } from "./components/SectionTitleContent";
import { ContactForm } from "./components/ContactForm";
import { useTranslation } from "../../../hook/useTranslation";

export const Contacts = () => {
  const t = useTranslation();

  return (
    <section className="w-full px-[5%] md:px-[12%] py-0 md:py-40" id="contacts">
      <SectionTitleContent
        h4={t.contacts.headH4}
        h2={t.contacts.headH2}
        description={t.contacts.description}
      />

      <ContactForm />
    </section>
  );
};
