import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({songs, setCurrentSong, setSongs, audioRef, isPlaying, id, libraryStatus}) => {

    return (
         <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
             <h2>Library</h2>
             <div className="library-songs">
             {songs.map(song => (
              <LibrarySong song={song} 
                           songs={songs} 
                           setCurrentSong={setCurrentSong} 
                           isPlaying={isPlaying} 
                           key={song.id} 
                           id ={song.id}
                           audioRef={audioRef}
                           setSongs={setSongs} />
          ))}
             </div>
         </div>
    )
}

export default Library;