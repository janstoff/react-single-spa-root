import React from 'react';

interface CollapseExpandButtonProps {
    readonly arrowDirection: 'right' | 'left';
    readonly onClick: () => void;
}

export const CollapseExpandButton: React.FC<CollapseExpandButtonProps> = ({
    arrowDirection,
    onClick
}) => (
    <button className={`${arrowDirection === 'right' && 'rotate-180'}`} onClick={() => onClick()}>
        <svg className="h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_6867_3844)">
                <circle cx="14" cy="12" r="10" fill="white" />
                <circle cx="14" cy="12" r="9.5" stroke="#0D1F3D" />
            </g>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9324 8.48824C16.1277 8.68351 16.1277 9.00009 15.9324 9.19535L13.1281 11.9997L15.9324 14.804C16.1277 14.9993 16.1277 15.3159 15.9324 15.5111C15.7372 15.7064 15.4206 15.7064 15.2253 15.5111L11.7139 11.9997L15.2253 8.48824C15.4206 8.29298 15.7372 8.29298 15.9324 8.48824Z"
                fill="#0D1F3D"
            />
            <defs>
                <filter
                    id="filter0_d_6867_3844"
                    x="0"
                    y="0"
                    width="28"
                    height="28"
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
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0627451 0 0 0 0 0.152941 0 0 0 0 0.219608 0 0 0 0.06 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_6867_3844"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_6867_3844"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    </button>
);
