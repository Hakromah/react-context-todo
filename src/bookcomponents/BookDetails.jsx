import React, { useContext } from 'react';
import { BookContext } from '../bookcontext/BookContext';

const BookDetails = ({ book }) => {
	const { dispatch } = useContext(BookContext);
	return (
		<li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
			<h1 className="title">{book.title}</h1>
			<h1 className="author">{book.author}</h1>
		</li>
	);
};

export default BookDetails;
