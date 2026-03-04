import SectionHeading from "./components/SectionHeading";

export default function AboutSection() {
    return (

        <div className="flex py-10 md:py-20 px-6 md:px-20">

            <div className="max-w-4xl ">

                <SectionHeading title="About Me" />

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Over the past 2.5 years, I’ve worked on production-level systems ranging from ERP platforms to business dashboards. I enjoy working across the full stack — from designing APIs and structuring databases to building intuitive frontend experiences.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                    I care deeply about clean architecture, maintainability, and writing code that scales. Beyond just building features, I focus on understanding the business logic behind them. My long-term goal is to evolve into a product-focused engineer capable of designing and delivering high-impact systems.
                </p>

            </div>

        </div>
    );
}