import { useFormStatus } from "react-dom";

export default function Button({
    children,
    onClick,
    withoutMarginTop,
    formButton,
}) {
    const { pending } = useFormStatus();
    return (
        <>
            <button
                onClick={onClick}
                disabled={formButton && pending}
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
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                `}
            >
                {children}
            </button>
        </>
    );
}
