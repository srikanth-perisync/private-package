import React, { useState, ReactNode } from 'react';

type Placement = 'top' | 'bottom' | 'left' | 'right';

interface TooltipProps {
    children: ReactNode;
    title: string;
    placement?: Placement;
}

export const Tooltip = ({ children, title, placement = 'bottom' }: TooltipProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const placementStyles: Record<Placement, string> = {
        top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
        left: 'right-full top-1/2 -translate-y-1/2 mr-2',
        right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    };

    const effect = ['top', 'bottom'].includes(placement) ? 'translate-x-0' : 'translate-y-0';

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {children}
            <div
                className={`absolute bg-gray-800 text-white rounded px-4 py-[2px] text-sm shadow-md transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : `opacity-0 ${effect}`
                    } ${placementStyles[placement]}`}
            >
                {title}
            </div>
        </div>
    );
};
