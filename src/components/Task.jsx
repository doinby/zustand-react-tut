import { useStore } from '../store';

export default function Task({ task: { id } }) {
	const task = useStore((store) => store.tasks.find((task) => task.id === id));
	const deleteTask = useStore((store) => store.deleteTask);

	return (
		<article className='p-3 space-y-2 border-1 border-slate-300 dark:border-slate-950 shadow-sm bg-slate-200 dark:bg-slate-800'>
			<h3 className='text-sm'>{task.title}</h3>
			<div className='w-full flex items-center justify-between'>
				<button
					onClick={() => deleteTask(task.id)}
					className='btn btn-xs btn-ghost btn-error'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 16 16'
						fill='currentColor'
						className='size-4'
					>
						<path
							fillRule='evenodd'
							d='M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z'
							clipRule='evenodd'
						/>
					</svg>
				</button>
				<div className='badge badge-xs badge-dash badge-primary'>
					{task.state}
				</div>
			</div>
		</article>
	);
}
