import React, { forwardRef, useImperativeHandle, useRef, useEffect, useState } from 'react';
import backgroundMusic from "../../assets/music/song.mp3";
import styled from 'styled-components';

const PlayButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: white;
  color: #0e0e0e;
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const BackgroundMusic = forwardRef((_, ref) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useImperativeHandle(ref, () => ({
        play: () => {
            if (audioRef.current) {
                audioRef.current.play();
                localStorage.setItem('isPlaying', 'true');
            }
        },
    }));

    useEffect(() => {
        const playAudio = async () => {
            try {
                if (audioRef.current && localStorage.getItem('isPlaying') === 'true') {
                    await audioRef.current.play();
                    setIsPlaying(true);
                }
            } catch (err) {
                console.log('Autoplay failed, user interaction required.');
            }
        };

        playAudio();
    }, []);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
            localStorage.setItem('isPlaying', 'true');
        }
    };

    return (
        <>
            <audio ref={audioRef} loop>
                <source src={backgroundMusic} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            {!isPlaying && (
                <PlayButton onClick={handlePlay}>
                    Play Music
                </PlayButton>
            )}
        </>
    );
});

export default BackgroundMusic;
