import React, {useState, useRef} from "react";
import Song from "./components/Song"
import Player from "./components/Player"
import "./styles/app.scss"
import data from "./data"
import Library from "./components/Library";
import Nav from "./components/Nav"

function App(){
const [songs, setSongs] = useState(data());
const [currentSong, setCurrentSong] = useState(songs[0]);
const [isPlaying, setIsPlaying] = useState(false);
const audioRef = useRef(null);
const [songInfo, setSongInfo] = useState({
  currentTime: 0,
  duration: 0,
  animationPercentage: 0,
})
const [libraryStatus, setLibraryStatus] = useState(false);

const timeUpdatehandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  ///calculate varicable
  const roundedCurrent = Math.round(current);
  const roundedDuration = Math.round(duration);
  const animation = Math.round((roundedCurrent / roundedDuration)* 100);
  setSongInfo({...songInfo, currentTime: current, durationTime: duration, animationPercentage: animation })
}

const songEndHandler =async () => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        await setCurrentSong(songs[(currentIndex + 1) % songs.length])
       if(isPlaying) audioRef.current.play();
}

    return (
      <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
          <Nav libraryStatus={libraryStatus}
               setLibraryStatus={setLibraryStatus} />
          <Song currentSong={currentSong} />
          <Player audioRef={audioRef} 
                  isPlaying={isPlaying} 
                  setIsPlaying={setIsPlaying} 
                  currentSong={currentSong} 
                  songInfo={songInfo} 
                  setSongInfo={setSongInfo}
                  songs={songs}
                  setCurrentSong={setCurrentSong}
                  setSongs={setSongs} />
          <Library songs={songs} 
                   setCurrentSong={setCurrentSong} 
                   audioRef={audioRef} 
                   isPlaying={isPlaying}
                   setSongs={setSongs}
                   libraryStatus={libraryStatus} />
          <audio onTimeUpdate={timeUpdatehandler}
                 onLoadedMetadata={timeUpdatehandler} 
                 ref={audioRef} 
                 src={currentSong.audio}  
                 onEnded={songEndHandler} ></audio>
      </div>
    );
}

export default App;