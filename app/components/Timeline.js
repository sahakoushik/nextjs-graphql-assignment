import React from 'react'
import { forwardRef } from 'react';
import Image from "next/image";
import Link from 'next/link'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

const Timeline = forwardRef(({ conferences }, ref) => {

    return (
        <div className="p-24 bg-[#fff]" ref={ref}>
          <div className="font-bold text-5xl text-center p-8 text-[#0A142F]">Conferences</div>
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
                  {/* <Link href={'/conference/'+item.id}>
                    <h3 className="text-slate-900 font-bold">
                      {item.name}
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                      {item.slogan}
                    </h5>
                    <p id="description" className="text-sm text-[#617187]">{item.startDate}</p>
                  </Link> */}
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
    )
})

export default Timeline