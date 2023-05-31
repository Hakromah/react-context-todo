import React, { useContext, useState } from 'react';
import { BookContext } from '../bookcontext/BookContext';

const BookForm = () => {
	const { dispatch } = useContext(BookContext);

	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: 'ADD_BOOK',
			book: {
				title,
				author,
			},
		});
		setTitle('');
		setAuthor('');
	};

	return (
		<form onSubmit={handleSubmit} className="p-5">
			<input
				className="w-full p-[10px] box-border my-3 mx-0 bg-[#3c1f3c] text-white border-0"
				type="text"
				value={title}
				placeholder="title"
				required
				onChange={(e) => setTitle(e.target.value)}
			/>
			<input
				className="my-3 mx-0 bg-[#3c1f3c] border-0 py-[6px] px-5 block w-full"
				type="text"
				value={author}
				placeholder="Auther"
				required
				onChange={(e) => setAuthor(e.target.value)}
			/>
			<button
				className="text-xl bg-[#291329] p-2 rounded-md shadow-lg"
				type="submit"
			>
				Submit a book
			</button>
		</form>
	);
};

export default BookForm;
