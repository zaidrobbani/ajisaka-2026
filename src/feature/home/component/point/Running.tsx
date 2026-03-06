import React from 'react'

const Running = () => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 162 46"
        fill="none"
        className="w-full h-auto animate-pulse"
        style={{
            animation: 'glow 2s ease-in-out infinite',
            filter: 'drop-shadow(0 0 8px rgba(212, 61, 106, 0.8))'
        }}
        >
        <g>
            <ellipse cx="81" cy="27" rx="81" ry="19" fill="#D43D6A" />
            <ellipse cx="81" cy="19" rx="81" ry="19" fill="url(#pt2_grad)" />
        </g>
        <defs>
            <linearGradient
            id="pt2_grad"
            x1="42.5"
            y1="-9"
            x2="46.5"
            y2="38"
            gradientUnits="userSpaceOnUse"
            >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#E18BA6" />
            </linearGradient>
        </defs>
        <style>{`
            @keyframes glow {
                0%, 100% {
                    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8));
                    opacity: 1;
                }
                50% {
                    filter: drop-shadow(0 0 20px rgba(255, 255, 255, 1)) drop-shadow(0 0 30px rgba(255, 255, 255, 0.6));
                    opacity: 0.9;
                }
            }
        `}</style>
        </svg>
    )
}

export default Running
