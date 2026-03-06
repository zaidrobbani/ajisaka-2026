import type { CSSProperties } from "react";

type LineTimelineProps = {
  position?: CSSProperties["position"];
  top?: CSSProperties["top"];
  right?: CSSProperties["right"];
  bottom?: CSSProperties["bottom"];
  left?: CSSProperties["left"];
  zIndex?: CSSProperties["zIndex"];
  className?: string;
};

const LineTImeline = ({
  position = "static",
  top,
  right,
  bottom,
  left,
  zIndex,
  className = "",
}: LineTimelineProps) => {
  const style: CSSProperties = {
    position,
    top,
    right,
    bottom,
    left,
    zIndex,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 2012"
      fill="none"
      className={`w-screen h-auto block ${className}`.trim()}
      style={style}
    >
      <g filter="url(#filter0_dn_250_87)">
        <path
          d="M91 1068V1248V1280C91 1335.23 135.772 1380 191 1380H1302C1351.71 1380 1392 1420.29 1392 1470C1392 1519.71 1351.71 1560 1302 1560H549.5C494.272 1560 449.5 1604.77 449.5 1660V1692V1872V1904C449.5 1959.23 494.271 2004 549.5 2004H2046.5C2082.95 2004 2112.5 1974.45 2112.5 1938C2112.5 1901.55 2082.95 1872 2046.5 1872H681C631.294 1872 591 1831.71 591 1782C591 1732.29 631.294 1692 681 1692H1410.5C1465.73 1692 1510.5 1647.23 1510.5 1592V1560V1380V1348C1510.5 1292.77 1465.73 1248 1410.5 1248H338C288.294 1248 248 1207.71 248 1158C248 1108.29 288.294 1068 338 1068H1751C1806.23 1068 1851 1023.23 1851 968V724C1851 668.772 1806.23 624 1751 624H539.5C489.794 624 449.5 583.706 449.5 534C449.5 484.294 489.794 444 539.5 444H1529C1584.23 444 1629 399.228 1629 344V100C1629 44.7715 1584.23 0 1529 0H-57C-93.4508 0 -123 29.5492 -123 66C-123 102.451 -93.4508 132 -57 132H1420.5C1470.21 132 1510.5 172.294 1510.5 222C1510.5 271.706 1470.21 312 1420.5 312H413C357.772 312 313 356.783 313 412.011V444V656C313 711.228 357.772 756 413 756H1631C1680.71 756 1721 796.294 1721 846C1721 895.706 1680.71 936 1631 936H191C135.772 936 91 980.772 91 1036V1068Z"
          fill="url(#paint0_linear_250_87)"
        />
        <path
          d="M-57 5H1529C1581.47 5 1624 47.533 1624 100V344C1624 396.467 1581.47 439 1529 439H539.5C487.033 439 444.5 481.533 444.5 534C444.5 586.467 487.033 629 539.5 629H1751C1803.47 629 1846 671.533 1846 724V968C1846 1020.47 1803.47 1063 1751 1063H338C285.533 1063 243 1105.53 243 1158C243 1210.47 285.533 1253 338 1253H1410.5C1462.97 1253 1505.5 1295.53 1505.5 1348V1592C1505.5 1644.47 1462.97 1687 1410.5 1687H681C628.533 1687 586 1729.53 586 1782C586 1834.47 628.533 1877 681 1877H2046.5C2080.19 1877 2107.5 1904.31 2107.5 1938C2107.5 1971.69 2080.19 1999 2046.5 1999H549.5C497.033 1999 454.5 1956.47 454.5 1904V1660C454.5 1607.53 497.033 1565 549.5 1565H1302C1354.47 1565 1397 1522.47 1397 1470C1397 1417.53 1354.47 1375 1302 1375H191C138.533 1375 96 1332.47 96 1280V1036C96 983.533 138.533 941 191 941H1631C1683.47 941 1726 898.467 1726 846C1726 793.533 1683.47 751 1631 751H413C360.533 751 318 708.467 318 656V412.011C318 359.543 360.534 317 413 317H1420.5C1472.97 317 1515.5 274.467 1515.5 222C1515.5 169.533 1472.97 127 1420.5 127H-57C-90.6894 127 -118 99.6894 -118 66C-118 32.3106 -90.6894 5 -57 5Z"
          stroke="url(#paint1_linear_250_87)"
          strokeWidth="10"
        />
      </g>
      <defs>
        <filter
          id="filter0_dn_250_87"
          x="-127"
          y="0"
          width="2243.5"
          height="2012"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_250_87"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.43478262424468994 0.43478262424468994"
            stitchTiles="stitch"
            numOctaves="3"
            result="noise"
            seed="199"
          />
          <feComponentTransfer in="noise" result="coloredNoise1">
            <feFuncR type="linear" slope="2" intercept="-0.5" />
            <feFuncG type="linear" slope="2" intercept="-0.5" />
            <feFuncB type="linear" slope="2" intercept="-0.5" />
            <feFuncA
              type="discrete"
              tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
            />
          </feComponentTransfer>
          <feComposite
            operator="in"
            in2="shape"
            in="coloredNoise1"
            result="noise1Clipped"
          />
          <feComponentTransfer in="noise1Clipped" result="color1">
            <feFuncA type="table" tableValues="0 0.15" />
          </feComponentTransfer>
          <feMerge result="effect2_noise_250_87">
            <feMergeNode in="shape" />
            <feMergeNode in="color1" />
          </feMerge>
          <feBlend
            mode="normal"
            in="effect2_noise_250_87"
            in2="effect1_dropShadow_250_87"
            result="effect2_noise_250_87"
          />
        </filter>
        <linearGradient
          id="paint0_linear_250_87"
          x1="14"
          y1="3.29126e-05"
          x2="1916.5"
          y2="2004"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#014233" />
          <stop offset="0.524038" stopColor="#02A882" />
          <stop offset="1" stopColor="#014233" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_250_87"
          x1="2163.28"
          y1="28.6601"
          x2="1054.72"
          y2="1896.34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#014233" />
          <stop offset="0.524038" stopColor="#02A882" />
          <stop offset="1" stopColor="#014233" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LineTImeline;
