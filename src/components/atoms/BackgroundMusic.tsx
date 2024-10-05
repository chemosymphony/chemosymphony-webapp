import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import backgroundMusic from "../../assets/music/song.mp3"

const BackgroundMusic = forwardRef((_, ref) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    useImperativeHandle(ref, () => ({
        play: () => {
            if (audioRef.current) {
                audioRef.current.play();
            }
        },
    }));

    return (
        <audio ref={audioRef} loop>
            <source src={backgroundMusic} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    );
});

export default BackgroundMusic;
