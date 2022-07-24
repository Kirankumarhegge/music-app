import React from "react";


const LibrarySong = ({song, songs, setCurrentSong, setSongs, audioRef, isPlaying, id }) => {

   const songSelectorHandler = async () => {
    //  const songSelected = songs.filter(state => state.id === song.id);
    //  setCurrentSong(songSelected[0]);
    //...this is another way bt hard one u shud knw...///
    setCurrentSong(song);
    //..this is easy one..//
    //...highlight selected song..//
    const newSong = songs.map(song => {
      if(song.id === id){
        return {
          ...song,
          active: true,
        }
      } else{
        return{
          ...song,
          active: false,
        }
      }
    })
   setSongs(newSong);

   if(isPlaying) audioRef.current.pause();
   }

    return (
      <div onClick={songSelectorHandler} className={`library-song ${song.active ? 'selected' : "" }`}>
        <img alt={song.name} src={song.cover}></img>
        <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
        </div>
      </div>
    )
}

export default LibrarySong;