import { useState } from 'react';
import { useStore } from '../store';

export default function NewTaskModal({ newTask, setNewTask, newState }) {
	const MODAL = document.getElementById('new-task-modal');
	const FORM = document.getElementById('new-task-form');
	const addTask = useStore((store) => store.addTask);
	const [hasError, setHasError] = useState(false);
	const regex = /^(\S+\s*){1,10}$/;

	function resetForm() {
		MODAL.close();
		FORM.reset();
		setNewTask('');
		setHasError(false);
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (newTask.match(regex)) {
			addTask(newTask, newState);
			resetForm();
		} else setHasError(true);
	}

	return (
		<dialog id='new-task-modal' className='modal'>
			<form
				id='new-task-form'
				className='modal-box relative max-w-120 flex flex-col gap-4 items-center justify-center'
			>
				<div method='dialog'>
					<button
						type='reset'
						onClick={resetForm}
						className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='size-5'
						>
							<path d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z' />
						</svg>
					</button>
				</div>
				<div className='w-full flex flex-col gap-1'>
					<input
						type='text'
						placeholder='Enter new task...'
						onChange={(e) => setNewTask(e.target.value)}
						className='input input-primary w-full'
					/>
					<label className={`text-error text-sm ${!hasError && 'hidden'}`}>
						Task name needs to be between 4 - 10 characters
					</label>
				</div>
				<button
					type='submit'
					value='submit'
					onClick={(e) => handleSubmit(e)}
					className='btn btn-primary btn-wide'
				>
					Submit
				</button>
			</form>

			{/* Out-of-bound close button - DO NOT REMOVE */}
			<form method='dialog' className='modal-backdrop'>
				<button onClick={resetForm}>close</button>
			</form>
		</dialog>
	);
}
