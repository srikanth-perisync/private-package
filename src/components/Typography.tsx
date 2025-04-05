import React, { ReactNode } from 'react';

type Variant =
    | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    | 'subtitle1' | 'subtitle2'
    | 'body1' | 'body2'
    | 'caption' | 'overline';

type Align = 'left' | 'center' | 'right' | 'justify';
type Color = 'inherit' | 'primary' | 'secondary' | 'error' | 'warning'
    | 'info' | 'success' | 'textPrimary' | 'textSecondary';

type Display = 'block' | 'inline' | 'inlineBlock';
type FontWeight = 'light' | 'regular' | 'medium' | 'semibold' | 'bold';
type FontStyle = 'italic' | 'normal';
type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'none';

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    children: ReactNode;
    variant?: Variant;
    component?: React.ElementType;
    align?: Align;
    color?: Color;
    noWrap?: boolean;
    paragraph?: boolean;
    display?: Display;
    fontWeight?: FontWeight;
    fontStyle?: FontStyle;
    textTransform?: TextTransform;
    className?: string;
}

export const Typography = ({
    children,
    variant = 'body1',
    component = 'p',
    align = 'left',
    color = 'inherit',
    noWrap = false,
    paragraph = false,
    display = 'block',
    fontWeight,
    fontStyle,
    textTransform,
    className = '',
    ...rest
}: TypographyProps) => {
    const variantStyles: Record<Variant, string> = {
        h1: 'text-5xl font-bold',
        h2: 'text-4xl font-bold',
        h3: 'text-3xl font-semibold',
        h4: 'text-2xl font-semibold',
        h5: 'text-xl font-medium',
        h6: 'text-lg font-medium',
        subtitle1: 'text-base font-semibold',
        subtitle2: 'text-sm font-medium',
        body1: 'text-base',
        body2: 'text-sm',
        caption: 'text-xs',
        overline: 'text-xs uppercase tracking-wider',
    };

    const alignStyles: Record<Align, string> = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
    };

    const colorStyles: Record<Color, string> = {
        inherit: 'text-inherit',
        primary: 'text-primary',
        secondary: 'text-secondary',
        error: 'text-red-600',
        warning: 'text-yellow-500',
        info: 'text-blue-500',
        success: 'text-green-500',
        textPrimary: 'text-gray-800',
        textSecondary: 'text-gray-600',
    };

    const displayStyles: Record<Display, string> = {
        block: 'block',
        inline: 'inline',
        inlineBlock: 'inline-block',
    };

    const fontWeightStyles: Record<FontWeight, string> = {
        light: 'font-light',
        regular: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
    };

    const fontStyleStyles: Record<FontStyle, string> = {
        italic: 'italic',
        normal: 'not-italic',
    };

    const textTransformStyles: Record<TextTransform, string> = {
        uppercase: 'uppercase',
        lowercase: 'lowercase',
        capitalize: 'capitalize',
        none: 'normal-case',
    };

    const paragraphClass = paragraph ? 'mb-4' : '';
    const noWrapClass = noWrap ? 'whitespace-nowrap overflow-hidden text-ellipsis' : '';

    let finalClassName = `${variantStyles[variant]} ${alignStyles[align]} ${colorStyles[color]} ${displayStyles[display]} ${paragraphClass} ${noWrapClass} `;

    if (fontWeight) {
        finalClassName += ` ${fontWeightStyles[fontWeight]}`;
    }

    if (fontStyle) {
        finalClassName += ` ${fontStyleStyles[fontStyle]}`;
    }

    if (textTransform) {
        finalClassName += ` ${textTransformStyles[textTransform]}`;
    }

    finalClassName += ` ${className}`

    const Element = component;

    return (
        <Element className={finalClassName.trim()} {...rest}>
            {children}
        </Element>
    );
};
