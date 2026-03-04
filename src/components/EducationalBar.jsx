import Lottie from "lottie-react";

export default function EducationBar({ img, description, place, year }) {
    return (
        <div className="
      flex items-center gap-6 
      bg-white/5 backdrop-blur-sm 
      border border-white/10 
      p-6 
      rounded-xl 
      shadow-md
      transition-all duration-300 ease-in-out
      hover:-translate-y-2
      hover:shadow-2xl
      hover:bg-neutral-800
    ">
            <div className="w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
                <Lottie animationData={img} loop={true} />
            </div>

            <div className="flex flex-col">
                <h3 className="text-white text-lg md:text-xl font-semibold">
                    {description}
                </h3>

                <p className="text-blue-400 text-sm mt-1">
                    {place}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                    {year}
                </p>
            </div>

        </div>
    );
}
