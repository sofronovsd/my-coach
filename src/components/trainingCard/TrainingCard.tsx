import React, { useState } from 'react';
import TextInput from '../../ui/TextInput';
import Card from '../card';
import RoundInput from './RoundInput';
import Button from '../../ui/Button';

export type TrainingRound = {
	index: number;
	count: number;
}

const TrainingCard = () => {
	const [name, setName] = useState('');
	const [rounds, setRounds] = useState<TrainingRound[]>([]);
	return (
		<Card className="w-fit">
			<TextInput
				className="mb-2"
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
				placeholder="Insert training name"
				rounded
			/>
			{rounds && (
				<div className="flex">
					{rounds.map(round => {
						return (
							<RoundInput key={round.index} round={round} />
						);
					})}
					<Button
						onClick={() => {
							setRounds(prevState => [...prevState, {
								count: 0,
								index: (prevState[prevState.length - 1]?.index | 0) + 1,
							}]);
						}}
					>
						+
					</Button>
					<Button
						onClick={() => {
							setRounds(prevState => prevState.splice(0, prevState.length - 1));
						}}
					>
						-
					</Button>
				</div>
			)}
		</Card>
	);
};

export default TrainingCard;
