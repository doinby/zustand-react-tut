import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import uniqid from 'uniqid';

const store = (set) => ({
	tasks: [],
	addTask: (title, state) =>
		set((store) => ({
			tasks: [...store.tasks, { id: uniqid(), title, state }],
		})),
	deleteTask: (id) =>
		set((store) => ({
			tasks: store.tasks.filter((task) => task.id !== id),
		})),
});

export const useStore = create(persist(devtools(store), { name: '' }));
