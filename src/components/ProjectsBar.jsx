import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ProjectsBar({ title, description }) {
  return (
    <div
      className="
        group
        flex items-center justify-between
        bg-neutral-900
        px-8 py-6
        rounded-xl
        border border-neutral-800
        transition-all duration-300 ease-in-out
        hover:bg-neutral-800
        hover:border-neutral-700
        hover:shadow-xl
        cursor-pointer
        mb-6
        hover:translate-x-5
      "
    >
      {/* Left Content */}
      <div className="text-left">
        <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
          {title}
        </h3>

        {description && (
          <p className="text-gray-400 text-sm md:text-base">
            {description}
          </p>
        )}
      </div>

      {/* Arrow */}
      <ArrowForwardIcon
        className="
          text-gray-500
          transition-all duration-300
          group-hover:text-white
          group-hover:translate-x-2
        "
      />
    </div>
  );
}