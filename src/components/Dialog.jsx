import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

// Dialog Component
export const Dialog = ({ children, fullWidth, open, onClose, className = '', ...rest }) => {

    const [opacity, setOpacity] = useState(0);
    const [shouldRender, setShouldRender] = useState(open); // Add shouldRender state

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
            setShouldRender(true); // Ensure rendering starts
            setTimeout(() => setOpacity(1), 200); // Add a small delay for the transition effect
        } else {
            setOpacity(0);
            setTimeout(() => {
                setShouldRender(false); // Stop rendering after transition
                document.body.style.overflow = 'auto';
            }, 200); // Match the transition duration
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [open]);

    if (!shouldRender) return null; // Conditionally render based on shouldRender

    return createPortal(
        <div
            className={`dialog-backdrop fixed z-50 inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 transition-opacity duration-200`}
            style={{ opacity }}
        >
            <div className='h-full w-full flex items-center justify-center'>
                <div className={`relative bg-white rounded-lg shadow-xl m-[32px] flex flex-col w-[calc(100%-64px)] max-h-[calc(100%-64px)] overflow-y-auto ${fullWidth ? 'w-full max-w-[600px]' : 'max-w-[600px]'} ${className}`} {...rest}>
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
};

Dialog.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    className: PropTypes.string,
};

// DialogTitle Component
export const DialogTitle = ({ children, className = '', ...rest }) => {
    return (
        <div className={`p-6 border-b border-gray-200 ${className}`} {...rest}>
            {typeof children === 'string' ?
                <h2 className="text-xl font-semibold">{children}</h2> :
                children
            }
        </div>
    );
};

DialogTitle.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

// DialogContent Component
export const DialogContent = ({ children, className = '', ...rest }) => {
    return (
        <div className={`p-6 h-fit overflow-y-auto ${className}`} {...rest}>
            {children}
        </div>
    );
};

DialogContent.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

// DialogActions Component
export const DialogActions = ({ children, className = 'flex justify-end p-6 gap-2', ...rest }) => {
    return (
        <div className={className} {...rest}>
            {children}
        </div>
    );
};

DialogActions.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
