import React from 'react';
import { classnames } from '../../utils/classnames';

type TextInputProps = {
	rounded?: boolean;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const TextInput = (props: TextInputProps) => {
	const {
		rounded = false,
		className,
		...rest
	} = props;
	return (
		<input
			className={classnames(`text-sea p-2 border-2 border-sea focus:text-amber-700 hover:border-amber-700 focus:border-2 focus:border-amber-700 focus:outline-none ${className}`, {
				'rounded-3xl': rounded,
			})}
			type="text"
			{...rest}
		/>
	);
};

export default TextInput;
