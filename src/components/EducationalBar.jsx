import Lottie from "lottie-react";

export default function EducationBar({ img, description }) {
    return (
        <div className="
      flex items-center gap-6 
      bg-neutral-900 
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

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {description}
            </p>

        </div>
    );
}
