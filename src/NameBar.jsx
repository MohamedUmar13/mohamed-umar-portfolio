import { TypeAnimation } from "react-type-animation";

export default function NameBar() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-black flex items-center px-6 md:px-20 text-white">
      
      <div className="max-w-3xl"> {/* maximum width */}

        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight"> { /* reduces the vertical space */}
          Hi, I'm{" "} {/* gives space */}
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
          Full Stack Developer with 2.5 years of experience building scalable
          mobile and web applications using Flutter and the MERN stack.
          Experienced in designing role-based systems, integrating REST APIs,
          implementing real-time features, and developing data-driven dashboards.
          Strong focus on clean architecture, maintainable code, and delivering
          production-ready solutions.
        </p>

      </div>
    </div>
  );
}
