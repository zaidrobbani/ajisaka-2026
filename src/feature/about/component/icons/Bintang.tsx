import React from 'react'

interface BintangProps {
    scale?: number;
    position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
    className?: string;
}

const Bintang: React.FC<BintangProps> = ({ scale = 1, position, className }) => {
  return (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="80" 
        height="80" 
        viewBox="0 0 80 80" 
        fill="none"
        className={className}
        style={{
            transform: scale !== 1 ? `scale(${scale})` : undefined,
            position: position
        }}
    >
        <mask id="mask0_250_789" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="9" y="9" width="62" height="62">
        <path d="M70 65V15C70 13.6739 69.4732 12.4021 68.5355 11.4645C67.5978 10.5268 66.3261 10 65 10H15C13.6739 10 12.4021 10.5268 11.4645 11.4645C10.5268 12.4021 10 13.6739 10 15V65C10 66.3261 10.5268 67.5978 11.4645 68.5355C12.4021 69.4732 13.6739 70 15 70H65C66.3261 70 67.5978 69.4732 68.5355 68.5355C69.4732 67.5978 70 66.3261 70 65Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M40.0009 30.5266L35.1743 40.3766L24.2109 41.9666L32.1526 49.7299L30.2543 60.5266L40.0009 55.3316L49.7493 60.5266L47.8659 49.7299L55.7926 41.9666L44.8909 40.3766L40.0009 30.5266Z" fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M30.5273 21.0532H49.474" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </mask>
        <g mask="url(#mask0_250_789)">
        <path d="M0 0H80V80H0V0Z" fill="white"/>
        </g>
    </svg>
  )
}

export default Bintang
