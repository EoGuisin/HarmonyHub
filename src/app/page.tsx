"use client";
import { Header, Main, FinalInfo, SettingsModal } from "../components";
import { Container } from "./styles";
import { useEffect, useState } from "react";
import GIF0 from "../images/gifs/fyrS.gif";
import GIF1 from "../images/gifs/75uC.gif";
import GIF2 from "../images/gifs/A54z.gif";
import GIF3 from "../images/gifs/SYMb.gif";
import GIF4 from "../images/gifs/TS0a.gif";
import GIF5 from "../images/gifs/2SDg3.gif";

interface Location {
  city: string,
  principalSubdivisionCode: string,
}

export default function Home() {
  const [background, setBackground] = useState<string>(GIF0.src);
  const [settings, setSettings] = useState<boolean>(false);
  const [location, setLocation] = useState<Location>();
  const [index, setIndex] = useState<number>(0);
  const backgrounds = [
    {
      id: 0,
      background: GIF0.src,
    },
    {
      id: 1,
      background: GIF1.src,
    },
    {
      id: 2,
      background: GIF2.src,
    },
    {
      id: 3,
      background: GIF3.src,
    },
    {
      id: 4,
      background: GIF4.src,
    },
    {
      id: 5,
      background: GIF5.src,
    },
  ];

  const findMyState = async () => {
    const success = (position: any) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const apiKey = "bdc_5b5c91f536ad4087a4b6339fadcf6bb7";
      console.log(latitude + " " + longitude)
      const geoApiUrl = `https://api-bdc.net/data/reverse-geocode-with-timezone?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=${apiKey}`;
      fetch(geoApiUrl)
        .then(res => res.json())
        .then(data => {
          setLocation(data)
        });
    }
    const error = () => {
      console.log("Unable to retrieve your location");
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }

  useEffect(() => {
    findMyState();
  },[]);

  return (
    <div>
      <img
        src={background}
        style={{width: "100%", height: "100%", position: "absolute", objectFit: "cover"}}
        alt="background"
      />
      <Container>
        <Header location={location} index={index} />
        <Main backgrounds={backgrounds} index={index} setIndex={setIndex} setBackground={setBackground} />
        <FinalInfo setSettings={setSettings} />
      </Container>
      {settings && <SettingsModal backgrounds={backgrounds} setBackground={setBackground} setSettings={setSettings} />}
    </div>
  )
}
