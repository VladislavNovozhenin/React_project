import React from "react";

interface IIconsProps {
    className?: string;
}

export function HeaderDiagram({ className }: IIconsProps) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_23251_122)">
                <path d="M10 20H14V4H10V20ZM4 20H8V12H4V20ZM16 9V20H20V9H16Z" fill="#DC3E22" />
            </g>
            <defs>
                <clipPath id="clip0_23251_122">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}


