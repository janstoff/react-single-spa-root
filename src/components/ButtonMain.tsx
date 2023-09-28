import React from 'react';

interface ButtonMainProps {
    readonly className?: string;
    readonly type?: 'button' | 'submit';
    readonly width?: string;
    readonly onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    readonly onMouseOver?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    readonly onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    readonly disabled?: boolean;
    readonly children?: React.ReactNode;
}

export const ButtonMain: React.FC<ButtonMainProps> = ({
    type = 'button',
    onClick,
    onMouseOver,
    onMouseLeave,
    children,
    disabled = false
}) => {
    return (
        <button
            type={type}
            className="text-center border rounded-md px-3 bg-primary text-white hover:bg-primary-dark text-base font-normal h-10"
            onClick={onClick && ((event) => onClick(event))}
            onMouseOver={onMouseOver && ((event) => onMouseOver(event))}
            onMouseLeave={onMouseLeave && ((event) => onMouseLeave(event))}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
