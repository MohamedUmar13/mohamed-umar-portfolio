import Counter from "./Counter";

export default function StatsBar({ count, title }) {
    return (
        <>
            <div className="
                  flex flex-col items-center justify-center
                  bg-neutral-900
                  p-10
                  rounded-2xl
                  border border-neutral-800
                  transition-all duration-300
                  hover:scale-[1.03]
                  hover:shadow-xl
                ">
                <h3 className="text-5xl font-bold text-white mb-4">
                    <Counter end={count} suffix="+" />
                </h3>
                <p className="text-gray-400 text-lg">
                    {title}
                </p>
            </div>
        </>
    );
}

