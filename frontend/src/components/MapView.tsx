import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export default function MapView({ ...props }: Props) {
  return (
    <div className="bg-background-dark" {...props}>
      <div className="relative h-full w-full">
        <img
          alt="Dark stylized world map showing continents from space with city lights"
          className="h-full w-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1XhFFecGxm3nAQ1-4IBKoUyhPWyyyv3TzByle8RzebO2JqEugbVGXHI8OC4uTZYZ8C3gUBorbuL2CX9T7kKmdnM38RiLy_8lGfSd2FSE9Eb7kk7GdNIDKsdAf3VPJclTagzBPnXsARwgYPNyiOz0wDAEq_i_6xdCLCjF7HK23X7K6Fd2zEKfA1ib09xRQhmwrYzQujeA2hSm27jD73IdgHLUtji8iMVuCKiFKE2-lb8Jc5pNqK7mGUdkpzPjx7_41azN8H3gpn80"
        />
        <svg
          className="fill- fill-success-green pointer-events-none absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Path airline start */}
          <defs>
            <linearGradient id="gradientLine" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop
                offset="0%"
                style={{ stopOpacity: 0, stopColor: "#39ff14" }}
              />
              <stop
                className="bg-success-green"
                offset="20%"
                style={{ stopOpacity: 0.8, stopColor: "#39ff14" }}
              />
              <stop
                offset="80%"
                style={{ stopOpacity: 0.8, stopColor: "#39ff14" }}
              />
              <stop
                offset="100%"
                style={{ stopOpacity: 0, stopColor: "#39ff14" }}
              />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur
                result="coloredBlur"
                stdDeviation="2.5"
              ></feGaussianBlur>
              <feMerge>
                <feMergeNode in="coloredBlur"></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>

          <path
            id="flightPath"
            d="M 200 400 Q 450 150 800 300"
            fill="none"
            filter="url(#glow)"
            stroke="url(#gradientLine)"
            strokeDasharray="10 5"
            strokeLinecap="round"
            strokeWidth="3"
          ></path>
          {/* Path airline end */}

          {/* Animated airplane following the path */}
          <g filter="url(#glow)" className="rotate-90">
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              rotate="auto"
              path="M 200 400 Q 450 150 800 300"
            />
            <path
              d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
              fill="white"
              transform="translate(-12, -12) scale(1.2)"
            ></path>
          </g>
          <circle cx="200" cy="400" fill="var(--primary)" r="6"></circle>
          <circle cx="200" cy="400" fill="white" r="4"></circle>
          <text
            fill="white"
            fontFamily="Space Grotesk"
            fontSize="12"
            fontWeight="bold"
            x="215"
            y="405"
          >
            KJFK
          </text>
          <circle cx="800" cy="300" fill="var(--primary)" r="6"></circle>
          <circle cx="800" cy="300" fill="white" r="4"></circle>
          <text
            fill="white"
            fontFamily="Space Grotesk"
            fontSize="12"
            fontWeight="bold"
            x="815"
            y="305"
          >
            EGLL
          </text>
        </svg>
      </div>
    </div>
  );
}
