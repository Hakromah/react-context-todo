import React, { useContext } from 'react';
import { BookContext } from '../bookcontext/BookContext';

const Navbarbook = () => {
	const { books } = useContext(BookContext);

	return (
		<div className='navbar py-2 px-5 text-center bg-[#6d3d6d]'>
			<h1 className='my-2 mx-0 text-[2.5em]'>Hassan Reading List</h1>
			<p className='text-2xl'>Currently you have
			<span className='text-orange-400 font-bold text-2xl ml-2'>{books.length}
			</span> books to get through...</p>
		</div>
	);
};

export default Navbarbook;
