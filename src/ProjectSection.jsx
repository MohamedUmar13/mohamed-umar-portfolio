import ProjectsBar from "./components/ProjectsBar";
import SectionHeading from "./components/SectionHeading";

export default function ProjectSection() {
  return (
    <section className="w-full bg-black py-20 px-6 md:px-20 text-white">

      <SectionHeading title="Projects" />

      <div className="max-w-3xl">
        <ProjectsBar
          title="Mobile Applications"
          description="Cross-platform Flutter apps with Firebase and REST API integrations."
        />

        <ProjectsBar
          title="Web Applications"
          description="MERN stack dashboards, ERP systems, and scalable production apps."
        />
      </div>

    </section>
  );
}