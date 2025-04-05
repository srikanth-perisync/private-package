import React from 'react';
import PropTypes from 'prop-types';

// Radio Component (Tailwind CSS)
function Radio({ checked, onChange, value, ...rest }) {
    return (
        <input
            type="radio"
            className="h-4 w-4 cursor-pointer text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            checked={checked}
            onChange={onChange}
            value={value}
            {...rest}
        />
    );
}

Radio.propTypes = {
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

// FormControlLabel Component (Tailwind CSS)
function FormControlLabel({ control, label, value, ...rest }) {
    return (
        <label className="inline-flex items-center cursor-pointer">
            {control}
            <span className="ml-2 text-sm text-gray-700">{label}</span>
        </label>
    );
}

FormControlLabel.propTypes = {
    control: PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

// RadioGroup Component (Tailwind CSS)
function RadioGroup({ value, onChange, children, ...rest }) {
    return (
        <div {...rest} className='flex flex-col gap-4'>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        control: (
                            <Radio
                                checked={child.props.value === value}
                                onChange={onChange}
                                value={child.props.value}
                            />
                        ),
                    });
                }
                return child;
            })}
        </div>
    );
}

RadioGroup.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export { Radio, RadioGroup, FormControlLabel };