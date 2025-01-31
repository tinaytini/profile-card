import React from "react";

interface TwitterProps extends React.SVGProps<SVGSVGElement> { }

export const Twitter: React.FC<TwitterProps> = (props) => {
    return (
        <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props} // Allows passing props like `className`, `fill`, `width`, etc.
        >
            <path
                d="M23.1707 9.875H25.9273L19.9048 16.7583L26.9898 26.125H21.4423L17.0973 20.4442L12.1257 26.125H9.36736L15.809 18.7625L9.01236 9.875H14.7007L18.6282 15.0675L23.1707 9.875ZM22.2032 24.475H23.7307L13.8707 11.4383H12.2315L22.2032 24.475Z"
                fill="#4338CA"
            />
        </svg>
    );
};
