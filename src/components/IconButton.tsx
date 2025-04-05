import React, { ReactNode, MouseEvent, ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    className?: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
    children,
    onClick,
    disabled = false,
    className = '',
    ...rest
}) => {
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;
        if (onClick) onClick(event);
    };

    return (
        <button
            className={`text-default/60 inline-flex items-center justify-center rounded-full p-2 transition-colors duration-200 focus:outline-none overflow-hidden ${disabled
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-100 cursor-pointer active:bg-gray-200'
                } ${className}`}
            onClick={handleClick}
            disabled={disabled}
            {...rest}
        >
            {children}
        </button>
    );
};