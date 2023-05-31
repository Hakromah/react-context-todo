import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
	const [title, setTitle] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setTitle(addSong);
		setTitle('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<label>Song name: </label>
			<input
				type="text"
				required
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<button>add a song</button>
		</form>
	);
};

export default NewSongForm;
