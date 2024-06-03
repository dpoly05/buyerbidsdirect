// PriceIcon.tsx
import React from 'react';

interface PriceIconProps {
  price: string;
}

const PriceIcon: React.FC<PriceIconProps> = ({ price }) => {
  return (
    <svg
      width="64px"
      height="64px"
      viewBox="0 0 36 36"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#000000"
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.648"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>map-marker</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Vivid.JS" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Vivid-Icons" transform="translate(-125.000000, -643.000000)">
            <g id="Icons" transform="translate(37.000000, 169.000000)">
              <g id="map-marker" transform="translate(78.000000, 468.000000)">
                <g transform="translate(10.000000, 6.000000)">
                  <path
                    d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"
                    id="Shape"
                    fill="#7088ff"
                  ></path>
                  <circle id="Oval" fill="#000000" fillRule="nonzero" cx="14" cy="14" r="7"></circle>
                  <text
                    x="14"
                    y="32"
                    textAnchor="middle"
                    fontSize="6"
                    fill="#000000"
                    fontFamily="Arial, Helvetica, sans-serif"
                  >
                    {price}
                  </text>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default PriceIcon;
