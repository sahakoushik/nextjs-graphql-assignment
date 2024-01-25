"use client"
import Image from "next/image";
import Link from 'next/link'
import GlobalApi from "./_utils/GlobalApi";
import { useEffect,useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import HeroSection from "./components/HeroSection";
import SponsorsList from "./components/SponsorsList";

export default function Home() {
  
  const [conferences, setConferences] = useState([])
  
  useEffect(()=>{
    getAllConf();
  },[]);

  const getAllConf = () =>{
    GlobalApi.getConfList().then(resp => {
      console.log("resp", resp)
      setConferences(resp.conferences)
    })
  }
  return (
    // console.log("conf", conferences),
    <div className="flex min-h-screen flex-col justify-between w-100 bg-[url('/square.svg')] bg-no-repeat">
      <>
        <HeroSection/>
        <div className="p-24 bg-white">
          <VerticalTimeline>
            {conferences.map((item) => {
              // let isWorkIcon = element.icon === "work";
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
                  // iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  // icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                >
                  <Link href={'/conference/'+item.id}>
                    <h3 className="text-slate-900 font-bold">
                      {item.name}
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                      {item.slogan}
                    </h5>
                    <p id="description" className="text-sm text-[#617187]">{item.startDate}</p>
                  </Link>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
        <SponsorsList conferenceData={conferences}/>
      </>
    </div>
  );
}
