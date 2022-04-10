import Card from '../../components/card';

const LoginPage = () => {
  return (
		<div className="flex flex-col flex-grow flex-grow">
			<h1 className="text-3xl font-bold underline">
				Login page
			</h1>
			<div className="flex justify-center items-center flex-grow">
				<Card>
					Login form
				</Card>
			</div>
		</div>
  );
};

export default LoginPage;
