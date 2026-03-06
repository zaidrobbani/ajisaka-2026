import React, { CSSProperties } from 'react'

type PointTimeLineIsCoommingProps = {
    scale?: number | string
    position?: CSSProperties['position']
    top?: CSSProperties['top']
    right?: CSSProperties['right']
    bottom?: CSSProperties['bottom']
    left?: CSSProperties['left']
    zIndex?: CSSProperties['zIndex']
    className?: string
}

const PointTimeLineIsCooming = ({
    scale = 1,
    position = 'static',
    top,
    right,
    bottom,
    left,
    zIndex,
    className = '',
}: PointTimeLineIsCoommingProps) => {
    const style: CSSProperties = {
        transform: `scale(${scale})`,
        position,
        top,
        right,
        bottom,
        left,
        zIndex,
        transformOrigin: 'center',
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="162" height="46" viewBox="0 0 162 46" fill="none" className={className} style={style}>
        <g filter="url(#filter0_n_250_103)">
            <ellipse cx="81" cy="27" rx="81" ry="19" fill="#D43D6A"/>
            <ellipse cx="81" cy="19" rx="81" ry="19" fill="#E18BA6"/>
        </g>
        <defs>
            <filter id="filter0_n_250_103" x="0" y="0" width="162" height="46" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feTurbulence type="fractalNoise" baseFrequency="0.43478262424468994 0.43478262424468994" stitchTiles="stitch" numOctaves="3" result="noise" seed="199"/>
            <feComponentTransfer in="noise" result="coloredNoise1">
                <feFuncR type="linear" slope="2" intercept="-0.5"/>
                <feFuncG type="linear" slope="2" intercept="-0.5"/>
                <feFuncB type="linear" slope="2" intercept="-0.5"/>
                <feFuncA type="discrete" tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "/>
            </feComponentTransfer>
            <feComposite operator="in" in2="shape" in="coloredNoise1" result="noise1Clipped"/>
            <feComponentTransfer in="noise1Clipped" result="color1">
                <feFuncA type="table" tableValues="0 0.15"/>
            </feComponentTransfer>
            <feMerge result="effect1_noise_250_103">
                <feMergeNode in="shape"/>
                <feMergeNode in="color1"/>
            </feMerge>
            </filter>
        </defs>
        </svg>
    )
}

export default PointTimeLineIsCooming
