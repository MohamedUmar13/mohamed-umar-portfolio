import { TypeAnimation } from "react-type-animation";
import ContactButtons from "./components/ContactButtons";
import ResumeButton from "./components/ResumeButton";
import workImg from "./assets/about_img.png";
import blob from "./assets/about-img-bg.png";


export default function NameBar() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-black flex items-center px-6 md:px-20 text-white">

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT SIDE - TEXT */}
        <div className="max-w-3xl">

          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-blue-500">
              Mohamed Umar M
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Flutter Specialist",
              2000,
              "MERN Stack Engineer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent block mb-4 pb-2"
          />

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
            Full Stack Developer specializing in Flutter and MERN stack applications.
            I build scalable systems, role-based platforms, and data-driven solutions
            that support real-world business workflows.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <ContactButtons />
          </div>
          <div className="flex justify-center gap-6 flex-wrap">
            <ResumeButton />
          </div>


        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="relative group w-full md:w-[520px]">

          {/* Glow */}
          <div className="absolute inset-0 
                  bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 
                  blur-3xl opacity-25 
                  group-hover:opacity-35 
                  transition duration-500">
          </div>

          {/* Masked Image */}
          <div
            className="relative shadow-2xl animate-float"
            style={{
              WebkitMaskImage: `url(${blob})`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              WebkitMaskPosition: "center",
              maskImage: `url(${blob})`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          >
            <img
              src={workImg}
              alt="Presenting mobile application architecture"
              className="w-full h-[450px] object-cover"
            />
          </div>

        </div>

      </div>
    </div>
  );
}
