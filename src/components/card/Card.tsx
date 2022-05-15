import { classnames } from '../../utils/classnames';

type CardProps = {
	children: any;
	className?: string;
	rounded?: boolean;
}

const Card = (props: CardProps) => {
	const {
		children,
		className,
		rounded = false,
	} = props;
	
	return (
		<div
			className={classnames(`p-5 rounded bg-stone-400 flex flex-col border-2 m-auto w-1/5 ${className}`, {
				'rounded-3xl': rounded,
			})}
		>
			{children}
		</div>
	);
};

export default Card;
