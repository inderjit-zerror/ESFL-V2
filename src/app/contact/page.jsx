import { createPageMetadata } from "@/lib/seo";
import CompoContact from "@/components/contact/CompoContact";
import PageHero from "@/components/common/PageHero";

const Contact = () => {
  return (
    <>
      <PageHero
        title="Contact Us"
        description="Let's build something meaningful together. Whether it's a partnership, enquiry, or collaboration, we'd love to hear from you."
        imageSrc="/images/contact/contact_hero.png"
      />
      <CompoContact />
    </>
  );
};

export default Contact;

export async function generateMetadata() {
  return createPageMetadata("/contact");
}
