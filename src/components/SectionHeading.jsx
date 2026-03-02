export default function SectionHeading({title}) {
    return (
        <>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 relative inline-block">
                {title}
                <span className="absolute left-0 -bottom-3 w-16 h-1 bg-blue-500 rounded-full"></span>
            </h2>
        </>
    );
}