export default function Button({ children, onClick, withoutMarginTop }) {
    return (
        <>
            <button
                onClick={onClick}
                className={`
                    text-black 
                    bg-white 
                    hover:bg-threads-gray-light 
                    duration-200
                    rounded-full
                    w-full
                    ${!withoutMarginTop && "mt-4"}
                    mt-4
                    p-4
                    border
                    border-threads-gray-light
                `}
            >
                {children}
            </button>
        </>
    );
}
