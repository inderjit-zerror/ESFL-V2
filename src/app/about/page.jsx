import AboutHero from "@/components/about/AboutHero";
import LeadershipSection from "@/components/about/LeadershipSection";
import OurJourney from "@/components/about/Ourjourney";
import VisionMissionValues from "@/components/about/VisionMissionValues";
import WhoWeAre from "@/components/about/Whoweare";
import PresentAcrossCountry from "@/components/home/Presentacrosscountry";
import SevenSection from "@/components/home/SevenSection";
import { createPageMetadata } from "@/lib/seo";
import PageLoadAnimation from "@/components/common/PageLoadAnimation";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <VisionMissionValues />
      <OurJourney />
      <PresentAcrossCountry />
      <WhoWeAre />
      <LeadershipSection />
      <SevenSection />
    </>
  );
};

export default AboutPage;

export async function generateMetadata() {
  return createPageMetadata("/about");
}
