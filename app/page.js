"use client"
import Image from "next/image";
import Link from 'next/link'
import GlobalApi from "./_utils/GlobalApi";
import { useEffect,useState, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import HeroSection from "./components/HeroSection";
import SponsorsList from "./components/SponsorsList";
import Timeline from "./components/Timeline";
import Loading from "./components/Loading"

export default function Home() {
  
  const [conferences, setConferences] = useState([])
  const timelineRef = useRef(null);

  useEffect(()=>{
    getAllConf();
  },[]);

  const getAllConf = () =>{
    GlobalApi.getConfList().then(resp => {
      console.log("resp", resp)
      setConferences(resp.conferences)
    })
  }
  
  const scrollToTimeline = () => {
    // Scroll to the Timeline component
    timelineRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    // console.log("conf", conferences),
    <div className="flex min-h-screen flex-col justify-between w-100 bg-[url('/square.svg')] bg-no-repeat">
      <>
        <HeroSection scrollToTimeline={scrollToTimeline}/>
        <Timeline conferences={conferences} ref={timelineRef}/>
        <SponsorsList conferenceData={conferences}/>
      </>
    </div>
  );
}
