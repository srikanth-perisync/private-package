import React, { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
    return (
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
            {children}
        </button>
    );
};
