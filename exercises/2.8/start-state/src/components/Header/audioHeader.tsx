import { useRef } from "react";
import sound from "../../assets/sounds/Infecticide-11-Pizza-Spinoza.mp3";

const AudioPlayer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
  
    const handleHeaderClick = () => {
      // Accessing the current value of audioRef (the actual audio element)
      if (audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }
    };
  
    return (
      <div>
        <header onClick={handleHeaderClick}></header>
        <audio ref={audioRef} src={sound}></audio>
      </div>
    );
  };

  export default AudioPlayer;