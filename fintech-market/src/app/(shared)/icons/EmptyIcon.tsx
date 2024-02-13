export default function EmptyIcon() {
  return (
    <svg width="204" height="79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#a)">
        <rect x="4.5" y="1" width="175" height="40" rx="8" fill="#fff" />
      </g>
      <circle cx="24.5" cy="21" r="10" fill="#D6DAE1" />
      <rect x="44.5" y="13" width="125" height="6" rx="3" fill="#D6DAE1" />
      <rect x="44.5" y="23" width="65" height="6" rx="3" fill="#D6DAE1" />
      <g filter="url(#b)">
        <rect x="24.5" y="31" width="175" height="40" rx="8" fill="#fff" />
      </g>
      <circle cx="44.5" cy="51" r="10" fill="#D6DAE1" />
      <rect x="64.5" y="43" width="125" height="6" rx="3" fill="#D6DAE1" />
      <rect x="64.5" y="53" width="65" height="6" rx="3" fill="#D6DAE1" />
      <defs>
        <filter
          id="a"
          x=".5"
          y="0"
          width="183"
          height="49"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.06 0 0 0 0 0.0866667 0 0 0 0 0.14 0 0 0 0.05 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3074_128884"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect2_dropShadow_3074_128884"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.12 0 0 0 0 0.173333 0 0 0 0 0.28 0 0 0 0.15 0" />
          <feBlend
            in2="effect1_dropShadow_3074_128884"
            result="effect2_dropShadow_3074_128884"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_3074_128884"
            result="shape"
          />
        </filter>
        <filter
          id="b"
          x="20.5"
          y="30"
          width="183"
          height="49"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.06 0 0 0 0 0.0866667 0 0 0 0 0.14 0 0 0 0.05 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3074_128884"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect2_dropShadow_3074_128884"
          />
          <feOffset />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.12 0 0 0 0 0.173333 0 0 0 0 0.28 0 0 0 0.15 0" />
          <feBlend
            in2="effect1_dropShadow_3074_128884"
            result="effect2_dropShadow_3074_128884"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_3074_128884"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
