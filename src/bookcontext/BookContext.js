import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../bookreducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
	
	const [books, dispatch] = useReducer(bookReducer, [], () => {

		const getData = localStorage.getItem('books');
		return getData ? JSON.parse(getData) : [];
	});

	//save to local storage and retrive it on the browser
	useEffect(() => {
		localStorage.setItem('books', JSON.stringify(books));
	}, [books]);

	return (
		<BookContext.Provider value={{ books, dispatch }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
