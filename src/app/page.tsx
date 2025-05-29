import Image from "next/image";
import Hero from "./Components/Hero";
import AboutMe from "./Components/aboutme";
import SkillsSection from "./Components/skils";
import ProjectsSection from "./Components/Projectsection";
import WhyHireMe from "./Components/WhyHireMe";
import Footer from "./Components/Footer";

export default function Home() {
  return (
   <div className="hide-widget">
   {/* <Hero></Hero> */}
   <AboutMe></AboutMe>
   <SkillsSection></SkillsSection>
   <ProjectsSection></ProjectsSection>
   <WhyHireMe></WhyHireMe>
   <Footer></Footer>
    </div>
  );
}
