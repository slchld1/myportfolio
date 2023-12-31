import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize= SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0];

    return (
        <Link to='https://github.com/slchld1' target='_blank' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                {children}
            </button>
        </Link>
    )
    };
    export const ButtonLinkedIn = ({
        children,
        type,
        onClick,
        buttonStyle,
        buttonSize
    }) => {
        const checkButtonStyle = STYLES.includes(buttonStyle)
            ? buttonStyle
            : STYLES[0];
    
        const checkButtonSize= SIZES.includes(buttonSize)
            ? buttonSize
            : SIZES[0];
    
        return (
            <Link to='https://www.linkedin.com/in/minjae-c-065167128/' target='_blank' className='btn-mobile'>
                <button
                    className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                    onClick={onClick}
                    type={type}
                    >
                    {children}
                </button>
            </Link>
        )
        };
        export const ButtonEmail = ({
            children,
            type,
            onClick,
            buttonStyle,
            buttonSize
        }) => {
            const checkButtonStyle = STYLES.includes(buttonStyle)
                ? buttonStyle
                : STYLES[0];
        
            const checkButtonSize= SIZES.includes(buttonSize)
                ? buttonSize
                : SIZES[0];
        
            return (
                <Link to='mailto:jaecho203@gmail.com' target='_blank' className='btn-mobile'>
                    <button
                        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                        onClick={onClick}
                        type={type}
                        >
                        {children}
                    </button>
                </Link>
            )
            };
export default Button && ButtonLinkedIn;