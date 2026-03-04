import Ug from "./assets/Ug.json";
import Sslc from "./assets/Sslc.json";
import Hsc from "./assets/Hsc.json";
import Job2 from "./assets/Job2.json";
import Job1 from "./assets/Job1.json";
import EducationBar from "./components/EducationalBar";
import EducationBarDot from "./components/EducationalBarDot";
import SectionHeading from "./components/SectionHeading";

export default function JourneySection() {
    return (
        <div className="py-20 px-6 md:px-20">

            {/* Section Title */}
            <SectionHeading title="Professional Journey" />

            <div className="relative max-w-5xl mx-auto">

                {/* Vertical Timeline Line */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-blue-500/30 via-gray-600 to-blue-500/30"></div>

                <div className="flex flex-col gap-10">

                    {/* LEFT ITEM */}
                    <div className="relative flex flex-col md:flex-row items-center md:items-start">

                        {/* DOT */}
                        <EducationBarDot />

                        {/* LEFT CONTENT */}
                        <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                            <EducationBar
                                img={Job2}
                                description="Application Developer"
                                place="TCLC.ai"
                                year="Aug 2024 – Present."
                            />
                        </div>

                        {/* EMPTY SPACE FOR DESKTOP */}
                        <div className="hidden md:block md:w-1/2"></div>

                    </div>

                    {/* RIGHT ITEM */}
                    <div className="relative flex flex-col md:flex-row items-center md:items-start">

                        <EducationBarDot />

                        <div className="hidden md:block md:w-1/2"></div>

                        <div className="w-full md:w-1/2 md:pl-12">
                            <EducationBar
                                img={Job1}
                                description="Junior Full Stack Developer"
                                place="Dynamic Liquids"
                                year="Jun 2023 – Jul 2024."
                            />
                        </div>

                    </div>

                    {/* LEFT ITEM */}
                    <div className="relative flex flex-col md:flex-row items-center md:items-start">

                        <EducationBarDot />

                        <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                            <EducationBar
                                img={Ug}
                                description="B.Sc. CS – CGPA: 8.36 / 10.0."
                                place="Bishop Heber College"
                                year="2020 – 2023."
                            />
                        </div>

                        <div className="w-1/2"></div>
                    </div>

                    {/* RIGHT ITEM */}
                    <div className="relative flex flex-col md:flex-row items-center md:items-start">

                        <EducationBarDot />
                        <div className="hidden md:block md:w-1/2"></div>

                        <div className="w-full md:w-1/2 md:pl-12">
                            <EducationBar
                                img={Hsc}
                                description="HSC (72.5%)"
                                place="SFS Matriculation Hr. Sec. School"
                                year="2019 – 2020."
                            />
                        </div>
                    </div>

                    {/* LEFT ITEM */}
                    <div className="relative flex flex-col md:flex-row items-center md:items-start">

                        <EducationBarDot />

                        <div className="w-full md:w-1/2 md:pr-12 md:text-right">
                            <EducationBar
                                img={Sslc}
                                description="SSLC (91.8%)"
                                place="SFS Matriculation Hr. Sec. School"
                                year="2017 – 2018."
                            />
                        </div>

                        <div className="w-1/2"></div>
                    </div>

                </div>

            </div>
        </div>
    );
}
