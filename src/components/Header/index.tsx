import { useState } from "react";
import Image from "next/image";
import { PlaylistTitle, AddressText_1, AddressText_2, Wrapper, Container, SvgOnClick } from "./styles";
import { fullscreen , exitFullscreen, musicNote } from "../../images/svg";



interface Location {
    city: string,
    principalSubdivisionCode: string,
}

interface Props {
    index: number,
    location: Location | undefined,
}

export function Header(props: Props) {
    const [fullScreen, setFullScreen] = useState<boolean>(false);

    function Fullscreen() {
        document.documentElement.requestFullscreen();
        setFullScreen(true);
    }
    function ExitFullscreen() {
        document.exitFullscreen();
        setFullScreen(false);
    }

    return (
        <Container>
            <Wrapper>
                <SvgOnClick onClick={() => {console.log("Music Note")}}>
                    <Image src={musicNote} alt='Music Note' />
                </SvgOnClick>
                <PlaylistTitle>lofi music - radio station {props.index + 1}</PlaylistTitle>
            </Wrapper>
            <Wrapper>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <AddressText_1>{props.location?.city}</AddressText_1>
                    <AddressText_2>{props.location?.principalSubdivisionCode.replace("-", " / ")}</AddressText_2>
                </div>
                {!fullScreen ? 
                <SvgOnClick onClick={() => Fullscreen()}>
                    <Image  src={fullscreen} alt='Fullscreen' />
                </SvgOnClick> : 
                <SvgOnClick onClick={() => ExitFullscreen()}>
                    <Image  src={exitFullscreen} alt='exitFullscreen' />
                </SvgOnClick>}
            </Wrapper>
        </Container>
    )
}