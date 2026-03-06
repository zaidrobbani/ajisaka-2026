import React from 'react'

const Pass = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 162 46"
            fill="none"
            className="w-full h-auto"
            >
            <g filter="url(#pt_roadshow)">
                <ellipse cx="81" cy="27" rx="81" ry="19" fill="#485869" />
                <ellipse cx="81" cy="19" rx="81" ry="19" fill="#8795A4" />
            </g>
            <defs>
                <filter
                id="pt_roadshow"
                x="0"
                y="0"
                width="162"
                height="46"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
                >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                />
                </filter>
            </defs>
            </svg>
    )
}

export default Pass
