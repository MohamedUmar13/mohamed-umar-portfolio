export default function SectionHeading({ title }) {
    return (
        <>
            <h2 className="group text-3xl md:text-4xl font-bold mb-16 relative inline-block">
                {title}
                <span className="absolute left-0 -bottom-3 h-1 w-full bg-blue-500 rounded-full 
                   origin-left scale-x-50 
                   transition-transform duration-300 ease-out 
                   group-hover:scale-x-105">
                </span>
            </h2>
        </>
    );
}