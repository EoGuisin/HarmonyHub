import React, { useState, useRef } from "react";
import Image from "next/image";
import { Container, DateText, HourText, SvgOnClick, WrapperPlaylistIcons, Volume } from "./styles";
import { play, pause, previous, next } from "../../images/svg";
import moment from 'moment'
import 'moment/locale/pt-br'
import { Backgrounds } from "../SettingsModal";

interface Props {
    index: number,
    setIndex: (id: number) => void,
    setBackground: (prop: string) => void,
    backgrounds: Backgrounds[],
}

export function Main(props: Props) {
    const [playSong, setPlaySong] = useState<boolean>(false);
    const [date, setDate] = useState<Date>(new Date());
    const musicRef = useRef<HTMLAudioElement>(null);
    const MAX = 100;
    const playlist = [ "/music/playlist-1.mp3", "/music/playlist-2.mp3", "/music/playlist-3.mp3", "/music/playlist-4.mp3", "/music/playlist-5.mp3" ];

    function toggleAudio(): void {
        if(playSong) {
            musicRef.current?.pause();
            setPlaySong(false);
        } else {
            musicRef.current?.play();
            setPlaySong(true);
        }
    }

    function handleVolume(e: React.ChangeEvent<HTMLInputElement>): void {
        const { value } = e.target;
        const volume = Number(value) / MAX;
        musicRef.current!.volume = volume;
    }

    function newDate() {
        setDate(new Date());
    }
    setInterval(newDate, 3000);

    function HandlePrevMusic() {
        if(props.index == 0) {
            props.setIndex(playlist.length);
            props.setBackground(props.backgrounds[playlist.length].background);
        }
        else {
            props.setIndex(props.index - 1);
            props.setBackground(props.backgrounds[props.index - 1].background);
        }
        
    }

    function HandleNextMusic() {
        if(props.index == playlist.length) {
            props.setIndex(0);
            props.setBackground(props.backgrounds[0].background);
        }
        else {
            props.setIndex(props.index + 1);
            props.setBackground(props.backgrounds[props.index + 1]?.background);
        }
       
    }

    return (
        <Container>
            <HourText>{date.getHours()}:{date.getMinutes()}</HourText>
            <WrapperPlaylistIcons>
                <DateText>{moment(date).format('dddd')} - {moment(date).format('LL')}</DateText>
                <div style={{display: "flex", gap: "6rem"}}>
                    <SvgOnClick onClick={() => HandlePrevMusic()}>
                        <Image src={previous} alt='previous' />
                    </SvgOnClick>

                    <SvgOnClick onClick={() => toggleAudio()}>
                        {!playSong ? (
                            <Image src={play} alt='Play' />
                        ) : (
                            <Image src={pause} alt='Pause' />
                        )}
                    </SvgOnClick> 
                    <SvgOnClick onClick={() => HandleNextMusic()}>
                        <Image src={next} alt='next' />
                    </SvgOnClick>
                    <audio ref={musicRef} src={playlist[props.index]} autoPlay />
                </div>
            </WrapperPlaylistIcons>
            <Volume type="range" min={0} max={MAX} onChange={(e) => handleVolume(e)} />
        </Container>
    )
}
