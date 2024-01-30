import React from "react";
import { Container, BackgroundListContainer, Wrapper } from "./styles";
import Image from "next/image";

export interface Backgrounds {
    background: string,
    id: number,
}

interface Props {
    setBackground: (prop: string) => void,
    setSettings: (prop: boolean) => void,
    backgrounds: Backgrounds[];
}

export function SettingsModal(props: Readonly<Props>) {
    
    function NewImageFile(event: React.ChangeEvent<HTMLInputElement>) {
        let imageFile = URL.createObjectURL(event.target.files![0])
        props.setBackground(imageFile)
    }

    return (
        <Container>
            <div style={{cursor: "pointer", right: "1rem", position: "absolute", fontSize: "30px"}} onClick={() => props.setSettings(false)}>x</div>
            <div style={{margin: 20}}>
                <Wrapper>
                    {props.backgrounds.map((item, index) => 
                    <BackgroundListContainer key={index} onClick={() => {
                        props.setBackground(item.background)
                        props.setSettings(false)
                    }}>
                        <Image
                            src={item.background}
                            style={{objectFit: "cover"}}

                            
                            width={200}
                            height={100}
                            alt="background List"
                            quality={100}
                        />
                    </BackgroundListContainer>)}
                </Wrapper>
                <div style={{marginTop: "2rem", justifyContent: "center", display: "flex"}}>
                    <input
                        type='file'
                        accept="image/*"
                        name="name"
                        onChange={(e) => {NewImageFile(e)}}
                    />
                </div>
            </div>
        </Container>
    )
}
