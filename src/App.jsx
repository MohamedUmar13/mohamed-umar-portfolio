import BottomBar from "./BottomBar";
import JourneySection from "./JourneySection";
import NameBar from "./NameBar";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";
import TopBar from "./TopBar";
import StatsSection from "./StatsSection";
import AboutSection from "./AboutMe";

export default function App() {

  return (
    <>
      <TopBar />
      <div className="w-full bg-gradient-to-br from-neutral-950 via-neutral-900 to-black text-white">
        <NameBar />
        <AboutSection />
        <JourneySection />
        <StatsSection />
        <SkillsSection />
        <ProjectSection />
      </div>
      <BottomBar />
    </>
  )
}
