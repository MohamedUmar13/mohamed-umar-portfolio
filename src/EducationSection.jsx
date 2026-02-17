import Ug from "./assets/Ug.json";
import Sslc from "./assets/Sslc.json";
import Hsc from "./assets/Hsc.json";
import Job2 from "./assets/Job2.json";
import Job1 from "./assets/Job1.json";
import EducationBar from "./components/EducationalBar";
import EducationBarDot from "./components/EducationalBarDot";

export default function EducationSection() {
    return (
        <div className="w-full bg-neutral-950 py-32 px-6 md:px-20 text-white">

            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-24">
                Professional Journey
            </h2>

            <div className="relative max-w-5xl mx-auto">

                {/* Vertical Timeline Line */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-blue-500/30 via-gray-600 to-blue-500/30"></div>

                <div className="flex flex-col gap-24">

                    {/* LEFT ITEM */}
                    <div className="relative flex items-center justify-between">

                        {/* Dot */}
                        <EducationBarDot />
                        <div className="w-1/2 pr-12 text-right">
                            <EducationBar
                                img={Job2}
                                description="Full Stack Developer – TCLC.ai (Aug 2024 – Present). Building scalable mobile and web applications using Flutter and the MERN stack."
                            />
                        </div>

                        <div className="w-1/2"></div>
                    </div>

                    {/* RIGHT ITEM */}
                    <div className="relative flex items-center justify-between">

                        <EducationBarDot />

                        <div className="w-1/2"></div>

                        <div className="w-1/2 pl-12">
                            <EducationBar
                                img={Job1}
                                description="Junior Full Stack Developer – Dynamic Liquids (Jun 2023 – Jul 2024). Contributed to Flutter-based mobile apps and expanded into React.js and backend development."
                            />
                        </div>
                    </div>

                    {/* LEFT ITEM */}
                    <div className="relative flex items-center justify-between">

                        <EducationBarDot />

                        <div className="w-1/2 pr-12 text-right">
                            <EducationBar
                                img={Ug}
                                description="B.Sc. Computer Science – Bishop Heber College (2020 – 2023). CGPA: 8.36 / 10.0."
                            />
                        </div>

                        <div className="w-1/2"></div>
                    </div>

                    {/* RIGHT ITEM */}
                    <div className="relative flex items-center justify-between">

                        <EducationBarDot />

                        <div className="w-1/2"></div>

                        <div className="w-1/2 pl-12">
                            <EducationBar
                                img={Hsc}
                                description="HSC – SFS Matriculation Hr. Sec. School (2019 – 2020). 72.5%."
                            />
                        </div>
                    </div>

                    {/* LEFT ITEM */}
                    <div className="relative flex items-center justify-between">

                        <EducationBarDot />

                        <div className="w-1/2 pr-12 text-right">
                            <EducationBar
                                img={Sslc}
                                description="SSLC – SFS Matriculation Hr. Sec. School (2017 – 2018). 91.8%."
                            />
                        </div>

                        <div className="w-1/2"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}
