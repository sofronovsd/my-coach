import React, { useState } from 'react';
import { TrainingRound } from './TrainingCard';
import TextInput from '../../ui/TextInput';

type RoundInputProps = {
	round: TrainingRound;
}

const RoundInput = ({ round }: RoundInputProps) => {
	const [value, setValue] = useState(round.count);
	return (
		<TextInput
			className="w-10"
			value={value}
			onChange={(e) => {
				setValue(+e.target.value);
			}}
			rounded
		/>
	);
};

export default RoundInput;
