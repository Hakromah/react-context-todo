import React from 'react';
import BookContextProvider from './bookcontext/BookContext';
import Navbarbook from './bookcomponents/Navbarbook';
import BookList from './bookcomponents/BookList';
import BookForm from './bookcomponents/BookForm';
function App() {
	return (
		<div className='bg-[#4c2a4c] my-5 mx-auto w-[90%] max-w-[700px] text-[#eee]'>
			<BookContextProvider>
				<Navbarbook />
				<BookForm/>
				<BookList/>
			</BookContextProvider>
		</div>
	);
}

export default App;
