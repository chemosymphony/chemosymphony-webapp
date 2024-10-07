import React, { forwardRef, useImperativeHandle, useRef, useEffect, useState } from 'react';
import backgroundMusic from "../../assets/music/song.mp3";
import styled from 'styled-components';
import muteIcon from '../../assets/images/mute.png'; // Substitua pelo caminho correto da imagem de mute
import unmuteIcon from '../../assets/images/unmute.png'; // Substitua pelo caminho correto da imagem de unmute

const PlayButton = styled.button`
  position: fixed;
  font-family: "Press Start 2P", "Montserrat", serif;
  text-transform: uppercase;
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
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1000;
`;

const BackgroundMusic = forwardRef((_, ref) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(localStorage.getItem('isPlaying') === 'true');
    const [isMuted, setIsMuted] = useState(localStorage.getItem('isMuted') === 'true');
    const [hasError, setHasError] = useState(false)

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
                setHasError(true)
            }
        };

        playAudio();
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.muted = isMuted; // Aplica o estado de mutação ao áudio
        }
    }, [isMuted]);

    const toggleMute = () => {
        setIsMuted(prevMuted => {
            const newMutedState = !prevMuted; // Inverte o estado de mutação
            localStorage.setItem('isMuted', newMutedState.toString()); // Armazena o novo estado
            return newMutedState; // Retorna o novo estado
        });
    };

    return (
        <>
            <audio ref={audioRef} loop>
                <source src={backgroundMusic} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            {!hasError && (
                <PlayButton onClick={toggleMute}>
                    <img src={isMuted && isPlaying ? muteIcon : unmuteIcon} alt={isMuted ? 'Unmute' : 'Mute'} style={{ width: '20px', height: '20px' }} />
                    {isMuted && isPlaying ? 'Unmute' : 'Mute'}
                </PlayButton>
            )}
        </>
    );
});

export default BackgroundMusic;
