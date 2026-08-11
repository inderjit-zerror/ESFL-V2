import { createPageMetadata } from "@/lib/seo";
import CompoContact from "@/components/contact/CompoContact";
import PageLoadAnimation from "@/components/common/PageLoadAnimation";

const Contact = () => {
  return (
    <>
    
      <CompoContact />
    
    </>
  );
};

export default Contact;

export async function generateMetadata() {
  return createPageMetadata("/contact");
}
