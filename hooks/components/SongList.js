import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid'; 
import NewSongForm from './NewSongForm'; 
function SongList() {
    const[songs, setSongs] = useState([
        {title:"This is my first song", id:1},
        {title:"This is my second song", id:2},
        {title:"This is my third song", id:3}
    ]);

    const[age, setAge] = useState(20);
    const incAge = () => {
        setAge(age+1)
    }
    const addSong = (title) => {
        setSongs([...songs, {title:title, id:uuidv1()}])
    }

    useEffect(() => {
        console.log('Use effect hook run for songs', songs)
    }, [songs])

    useEffect(() => {
        console.log('Use effect hook run for age', age)
    }, [age])
    
  return (
    <div className="song-list">
        <ul>
            {
                songs.map((song)=>{
                    return(<li key={song.id}>{song.title}</li>)
                })
            }
        </ul>
        <NewSongForm addSong = {addSong} />
        <button onClick={incAge}>Add 1 to {age}</button>
    </div>
  );
}

export default SongList;
