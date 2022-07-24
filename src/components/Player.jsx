import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleRight, faAngleLeft, faPause } from "@fortawesome/free-solid-svg-icons";


const Player = ({currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, songs, setCurrentSong, setSongs}) => {


   function playSongHandler(){
     if(isPlaying){
         audioRef.current.pause();
         setIsPlaying(!isPlaying)
     } else{
        audioRef.current.play();
        setIsPlaying(!isPlaying)
     }
   }

   const getTime = (time) => {
       return (
        "0" + Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
       )
   }

   const dragHandler = (e) => {
      audioRef.current.currentTime = e.target.value;
      setSongInfo({...songInfo, currentTime: e.target.value })
   }  
      
   const skipTrackHandler = async (direction) => {
      let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      if(direction === "skip-forward"){
        await setCurrentSong(songs[(currentIndex + 1) % songs.length])
        activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
      }if (direction === "skip-back"){
        if((currentIndex - 1) % songs.length === -1){
         await setCurrentSong(songs[songs.length - 1 ])
         activeLibraryHandler(songs[songs.length - 1 ])
          if(isPlaying) audioRef.current.play();
          return;
        }
        await setCurrentSong(songs[(currentIndex - 1) % songs.length])
        activeLibraryHandler(songs[(currentIndex - 1) % songs.length])
      }
      if(isPlaying) audioRef.current.play();
       }

   const trackAnim = {
     transform: `translateX(${songInfo.animationPercentage}%)`
   };

   const activeLibraryHandler = (nextPrev) =>{
    const newSong = songs.map(song => {
      if(song.id === nextPrev.id){
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
   }

    return (
      <div className="player-container">
        <div className="time-control">
          <p>{getTime(songInfo.currentTime)}</p>
            <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong[1]})`}} className="track">
              <input min={0} 
                    max={songInfo.durationTime || 0} 
                    value={songInfo.currentTime} 
                    onChange={dragHandler} 
                    type="range" />
                 <div style={trackAnim} className="animate-track"></div>
              </div>
          <p>{songInfo.durationTime ? getTime(songInfo.durationTime) : "00:00"}</p>
        </div>
      <div className="play-control">
          <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={faAngleLeft} />
          <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
          <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="skip-front" size="2x" icon={faAngleRight} />
      </div>
      </div>
    )
}

export default Player;