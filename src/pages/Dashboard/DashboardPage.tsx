import Button from '../../ui/Button';
import React from 'react';
import TrainingCard from '../../components/trainingCard';

const DashboardPage = () => {
	const [isTrainingStarted, setTrainingStarted] = React.useState(false);
	
	const handleOnStartTraining = React.useCallback(() => {
		setTrainingStarted(true);
	}, []);
	
	return (
		<div className="flex-col">
			<h1 className="text-3xl font-bold underline text-stone-400">
				Dashboard
			</h1>
			<p className="mt-1 mb-2 text-stone-400">
				On this page you will be able to track you progress.
			</p>
			<Button
				onClick={handleOnStartTraining}
				className="w-fit"
				rounded
			>
				+ Start training
			</Button>
			{isTrainingStarted && (
				<TrainingCard />
			)}
		</div>
	);
};

export default DashboardPage;
