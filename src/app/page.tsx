import Image from "next/image";

import AboutMe from "./Components/aboutme";
import SkillsSection from "./Components/skils";
import ProjectsSection from "./Components/Projectsection";
import WhyHireMe from "./Components/WhyHireMe";
import Footer from "./Components/Footer";

export default function Home() {
  return (
   <div className="hide-widget">
   <AboutMe></AboutMe>
   <SkillsSection></SkillsSection>
   <ProjectsSection></ProjectsSection>
   <WhyHireMe></WhyHireMe>
   <Footer></Footer>
    </div>
  );
}
