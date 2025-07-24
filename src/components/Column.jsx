export default function Column({ title, children }) {
	return (
		<section className='min-h-84 min-w-56 p-4 rounded shadow-sm bg-slate-50 '>
			<h2 className='text-lg text-center font-black'>{title}</h2>
			{children}
		</section>
	);
}
