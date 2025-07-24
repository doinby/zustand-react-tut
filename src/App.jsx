import Column from './components/Column';
import Task from './components/Task';

export default function App() {
	return (
		<main className='flex gap-12'>
			<Column title='Planned'>
				<Task />
			</Column>
			<Column title='Ongoing'>
				<Task />
			</Column>
			<Column title='Done'>
				<Task />
			</Column>
		</main>
	);
}
