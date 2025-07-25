import { useState } from 'react';
import Column from './components/Column';
import NewTaskModal from './components/NewTaskModal';

const states = ['planned', 'ongoing', 'finished'];

export default function App() {
	const [newState, setNewState] = useState('');
	const [newTask, setNewTask] = useState('');

	return (
		<>
			<main className='flex gap-12 items-center justify-center'>
				{states.map((state) => (
					<Column key={state} state={state} setNewState={setNewState} />
				))}
			</main>
			<NewTaskModal
				newTask={newTask}
				setNewTask={setNewTask}
				newState={newState}
			/>
		</>
	);
}
