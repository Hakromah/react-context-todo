import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
	const [songs, setSongs] = useState([
		{ title: 'almost home', id: 1 },
		{ title: 'memory gospel', id: 2 },
		{ title: 'this will be ddarkness', id: 3 },
	]);
	const addSong = (title) => {
		setSongs([...songs, { title, id: uuidv4() }]);
	};
	console.log(songs);
	return (
		<div className="p-7">
			<ul>
				{songs.map((song) => {
					return <li key={song.id}>{song.title}</li>;
				})}
			</ul>
			<NewSongForm addSong={addSong} />
		</div>
	);
};

export default SongList;
