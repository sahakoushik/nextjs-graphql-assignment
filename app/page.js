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
        {/* <div className="p-24 bg-[#fff]">
          <div className="font-bold text-5xl text-center p-8 text-[#0A142F]">Conferences</div>
          <VerticalTimeline>
            {conferences.map((item) => {
              return (
                <VerticalTimelineElement
                  className="vertical-timeline-element--content"
                  contentStyle={{ background: '#F9FAFB', borderRadius:"8px" }}
                  iconStyle={{ padding:'12px',background: '#F9FAFB', border: '2px Solid #CDCDCD', borderColor:"#F9FAFB" }}
                  lineColor="#CDCDCD"
                  icon={<Image src="/storm.svg" height={36} width={36}/>}
                  key={item.key}
                  date={item.startDate}
                  dateClassName="date"
                  visible={true}
                >
                  <Link href={'/conference/'+item.id} className="flex flex-row items-start"> 
                    <Image src="./Marker.svg" height={16} width={16} className="mr-4 mt-1" alt="maker"/>
                    <div>
                        <h3 className="text-slate-900 font-bold">
                            {item.name}
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle">
                            {item.slogan}
                        </h5>
                    </div>
                  </Link>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div> */}
        
        <SponsorsList conferenceData={conferences}/>
      </>
    </div>
  );
}
