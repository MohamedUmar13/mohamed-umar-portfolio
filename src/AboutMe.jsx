import SectionHeading from "./components/SectionHeading";

export default function AboutSection() {
    return (
        <section className="w-full bg-gradient-to-br from-neutral-950 via-neutral-900 to-black flex py-24 px-6 md:px-20 text-white">

            <div className="max-w-4xl mx-auto">

                <SectionHeading title="About Me" />

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Over the past 2.5 years, I’ve worked on production-level systems ranging from ERP platforms to business dashboards. I enjoy working across the full stack — from designing APIs and structuring databases to building intuitive frontend experiences.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                    I care deeply about clean architecture, maintainability, and writing code that scales. Beyond just building features, I focus on understanding the business logic behind them. My long-term goal is to evolve into a product-focused engineer capable of designing and delivering high-impact systems.
                </p>

            </div>

        </section>
    );
}