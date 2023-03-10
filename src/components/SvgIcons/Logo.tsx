import React, { FC, SVGProps } from 'react';

const Logo: FC<SVGProps<SVGSVGElement>> = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" fill="none" {...props}>
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="m39.535 6.172-.282-.158a9 9 0 0 0-8.788.158L12.08 16.897l-.25.152a8.223 8.223 0 0 0 .25 14.054l30.846 17.993c.491.287.737.43 1.008.43.27 0 .516-.144 1.007-.43l3.465-2.021c.659-.385.988-.577.988-.864 0-.288-.33-.48-.988-.864L15.103 25.92l-.142-.09a2.223 2.223 0 0 1 .142-3.75l18.386-10.725.19-.102a3 3 0 0 1 2.833.102l18 10.5.168.106A3 3 0 0 1 56 24.446v21.108l-.007.199a3 3 0 0 1-1.481 2.392l-18 10.5-.19.102a3 3 0 0 1-2.834-.102l-18-10.5-.168-.106A3 3 0 0 1 14 45.554v-7.552c0-.56 0-.841-.133-1.073-.133-.23-.375-.372-.86-.655L9.505 34.23c-.668-.39-1.002-.584-1.253-.44C8 33.934 8 34.321 8 35.094v10.46l.005.3a9 9 0 0 0 4.46 7.474l18 10.5.283.158a9 9 0 0 0 8.787-.158l18-10.5.256-.155a9 9 0 0 0 4.21-7.62V24.447l-.006-.3a9 9 0 0 0-4.46-7.474l-18-10.5Zm24.245 48.3c-.27 0-.517.144-1.008.43l-3.465 2.022c-.659.384-.988.577-.988.864 0 .287.33.479.988.863l9.19 5.36c.667.39 1.001.585 1.252.441.251-.144.251-.53.251-1.304v-4.056c0-.56 0-.841-.133-1.072-.133-.232-.375-.373-.86-.656l-4.22-2.461c-.491-.287-.737-.43-1.008-.43Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient id="a" x1="8" x2="70" y1="5" y2="65" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FF15" />
        <stop offset="1" stopColor="#0FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default Logo;
