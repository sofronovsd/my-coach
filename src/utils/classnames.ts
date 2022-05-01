type ConditionsType = {
	[key: string]: boolean;
}

export const classnames = (className?: string, conditions?: ConditionsType) => {
	let resultClassName = [];
	if (className) {
		resultClassName.push(className);
	}
	if (conditions) {
		const keys = Object.keys(conditions);
		keys.forEach(key => {
			if (conditions[key]) {
				resultClassName.push(key);
			}
		})
	}
	
	return resultClassName.join(' ');
}
