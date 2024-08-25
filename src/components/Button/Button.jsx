export default function Button({ text, bg, hover, children, onClick }) {
    console.log(text, bg, hover);
    return (
        <>
            <button
                onClick={onClick}
                className={`
                text-${text} 
                bg-${bg} 
                hover:${hover} 
                rounded-full
                w-full
                px-2 py-3
                border
                border-threads-gray-light
                duration-200
                `}
            >
                {children}
            </button>
        </>
    );
}
