import { classnames } from '../../utils/classnames';
import React from 'react';

type ButtonProps = {
	rounded?: boolean;
	color?: 'primary' | 'secondary';
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = (props: ButtonProps) => {
	const {
		className,
		children,
		rounded = false,
		color = 'primary',
		...rest
	} = props;
	
	return (
		<button
			className={classnames(`border-2 p-2 ${className}`, {
				'rounded-3xl': rounded,
				'text-sea bg-stone-400': color === 'primary',
				'text-amber-700 bg-sea': color === 'secondary',
			})}
			type="button"
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
