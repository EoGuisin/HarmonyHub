import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { Container, SvgOnClick, Settings, AnimationTransition } from "./styles";
import { youtube, instagram, info, settings } from "../../images/svg";

interface Props {
    setSettings: Dispatch<SetStateAction<boolean>>;
}

export function FinalInfo(props: Readonly<Props>) {

    return (
        <Container>
            <AnimationTransition>
                <Settings onClick={() => props.setSettings(true)}>
                    <Image src={settings} id="divClickSettings" alt='settings' />
                </Settings>
            </AnimationTransition>
            <div style={{ marginRight: "0.5rem", display: "flex"}}>
                <AnimationTransition>
                    <SvgOnClick aria-label="instagram" target="_blank" href="https://www.instagram.com/eoguisin">
                        <Image src={instagram} alt='Instagram' />
                    </SvgOnClick>
                </AnimationTransition>
                <AnimationTransition>
                    <SvgOnClick aria-label="youtube" target="_blank" href="https://www.youtube.com/@eoguisin">
                        <Image src={youtube} alt='Youtube' />
                    </SvgOnClick>
                </AnimationTransition>
                <AnimationTransition>
                    <SvgOnClick aria-label="info" target="_blank" onClick={() => {}}>
                        <Image src={info} alt='Info' />
                    </SvgOnClick>
                </AnimationTransition>
            </div>
        </Container>
    )
}
