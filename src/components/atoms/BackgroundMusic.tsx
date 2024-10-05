import React, { forwardRef, useImperativeHandle, useRef } from 'react';

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
            <source src="/assets/music/song.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    );
});

export default BackgroundMusic;
