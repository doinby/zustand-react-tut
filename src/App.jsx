import Column from './components/Column';

export default function App() {
	return (
		<main className='flex gap-12'>
			<Column state='planned' />
			<Column state='ongoing' />
			<Column state='finished' />
		</main>
	);
}
