type CardProps = {
	children: JSX.Element | JSX.Element[] | string;
}

const Card = (props: CardProps) => {
	const {
		children,
	} = props;
	
	return (
		<div className="p-2 rounded bg-amber-50 flex flex-col border-2 m-auto">
			{children}
		</div>
	);
};

export default Card;
