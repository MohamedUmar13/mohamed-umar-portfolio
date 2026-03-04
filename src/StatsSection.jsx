import SectionHeading from "./components/SectionHeading";
import StatsBar from "./components/StatsBar";

export default function StatsSection() {
  return (
    <section className="py-10 md:py-20 px-6 md:px-20">

      <div className="md:hidden">
        <SectionHeading title="Key Metrics" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <StatsBar count={2.6} title="Years of Experience" />
        <StatsBar count={15} title="Projects Delivered" />
        <StatsBar count={5} title="Production Deployments" />

      </div>
    </section>
  );
}