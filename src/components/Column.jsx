import Task from './Task';
import { useStore } from '../store';

export default function Column({ state, setNewState }) {
	const tasks = useStore((store) => store.tasks).filter(
		(task) => task.state === state
	);

	return (
		<>
			<section className='min-h-84 min-w-56 p-4 space-y-2 rounded shadow-sm bg-slate-50 dark:bg-slate-700 '>
				<div className='flex items-center justify-between'>
					<h2 className='text-lg text-center font-black'>{state}</h2>
					<button
						onClick={() => {
							setNewState(state);
							document.getElementById('new-task-modal').showModal();
						}}
						className='btn btn-soft btn-xs btn-success'
					>
						New
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='size-5'
						>
							<path d='M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z' />
						</svg>
					</button>
				</div>
				{tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
			</section>
		</>
	);
}
