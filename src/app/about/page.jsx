import AboutHero from "@/components/about/AboutHero";
import LeadershipSection from "@/components/about/LeadershipSection";
import OurJourney from "@/components/about/Ourjourney";
import VisionMissionValues from "@/components/about/VisionMissionValues";
import WhoWeAre from "@/components/about/Whoweare";
import PresentAcrossCountry from "@/components/home/Presentacrosscountry";
import SevenSection from "@/components/home/SevenSection";
import { createPageMetadata } from "@/lib/seo";
import PageLoadAnimation from "@/components/common/PageLoadAnimation";
import PageHero from "@/components/common/PageHero";

const AboutPage = () => {
  return (
    <>
      <PageHero
        title="About Us"
        description="For over three decades Empire Spices & Foods Ltd. has carried authentic Indian flavour from Nashik to kitchens across the world."
            video="/videos/spices_video.mp4"

      />
      <VisionMissionValues />
      <OurJourney />
      {/* <PresentAcrossCountry /> */}
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
