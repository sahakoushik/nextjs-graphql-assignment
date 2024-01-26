"use client"
import Image from 'next/image'
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Loading from '@/app/components/Loading'


const ConferenceList = ({params}) => {
    const [conferenceDetails, setConferenceDetails] = useState('');
    const [selected, setSelected] = useState('');
    
    useEffect(() => {
        params && getConferenceDataById()

    
    }, [params])
    
    const getConferenceDataById = () =>{
        GlobalApi.getConferenceById(params.id).then(resp=> setConferenceDetails(resp.conference))
    }

    return (
        console.log(conferenceDetails),
        <div className='p-32 bg-white'>
            {
                conferenceDetails ?
                <>
                    <div className='text-[48px] font-bold'>{conferenceDetails.name}</div>
                    <div className='text-[20px] text-[#0a142fd9]'>{conferenceDetails.slogan}</div>

                    <div className='flex gap-12'>
                        <div>
                            <div onClick={()=> setSelected("schedules")} className={`w-[365px] mb-4 cursor-pointer flex items-center h-[72px] rounded-lg border ${selected === "schedules" && 'bg-[#FFC93E]'}`}>
                                <div className='rounded ml-4 mr-8 bg-[#FFFCF6] size-[56px] flex justify-center items-center'>
                                    <Image src="/Vector.svg" height={25} width={23}/>
                                </div>
                                <div className={`text-center font-bold text-[#0A142F] ${selected === "schedules" && 'text-white'}`}>Schedules</div>
                            </div>
                            <div onClick={()=> setSelected("organizers")} className={`w-[365px] mb-4 cursor-pointer flex items-center h-[72px] rounded-lg border ${selected === "organizers" && 'bg-[#FFC93E]'}`}>
                                <div className='rounded ml-4 mr-8 bg-[#FFFCF6] size-[56px] flex justify-center items-center'>
                                    <Image src="/Vector.svg" height={25} width={23}/>
                                </div>
                                <div className={`text-center font-bold text-[#0A142F] ${selected === "organizers" && 'text-white'}`}>Organizers</div>
                            </div>
                            <div onClick={()=> setSelected("allSpeakers")} className={`w-[365px] mb-4 cursor-pointer flex items-center h-[72px] rounded-lg border ${selected === "allSpeakers" && 'bg-[#FFC93E]'}`}>
                                <div className='rounded ml-4 mr-8 bg-[#FFFCF6] size-[56px] flex justify-center items-center'>
                                    <Image src="/Vector.svg" height={25} width={23}/>
                                </div>
                                <div className={`text-center font-bold text-[#0A142F] ${selected === "allSpeakers" && 'text-white'}`}>Speakers</div>
                            </div>
                            <div onClick={()=> setSelected("sponsors")} className={`w-[365px] mb-4 cursor-pointer flex items-center h-[72px] rounded-lg border ${selected === "sponsors" && 'bg-[#FFC93E]'}`}>
                                <div className='rounded ml-4 mr-8 bg-[#FFFCF6] size-[56px] flex justify-center items-center'>
                                    <Image src="/Vector.svg" height={25} width={23}/>
                                </div>
                                <div className={`text-center font-bold text-[#0A142F] ${selected === "sponsors" && 'text-white'}`}>Sponsors</div>
                            </div>
                        </div>

                        <div className='flex-1 bg-[#F9FAFB] p-[52px]'>

                        {/* Schedules     */}

                        {
                            selected === "schedules" &&
                            conferenceDetails?.schedules?.map((item)=>{
                                return(
                                    <div className='flex flex-col bg-white px-10 py-6 my-6 rounded'>
                                        <div className='text-xl font-bold'>{item.day}</div>
                                        {
                                            item.intervals.map((item)=>{
                                                return(
                                                    item.sessions.map((item)=>{
                                                        return(
                                                            <div className='py-2'>
                                                                <div className='text-[#0A142F]'> Duration : {item.begin} - {item.end}</div>
                                                                
                                                                <ul className="list-disc pl-8">
                                                                    <li className='text-[#0A142F]'>{item.title}</li>
                                                                </ul>
                                                            </div>
                                                        )
                                                    })
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }

                        {/* organizers */}

                        {
                            selected === "organizers" &&
                            conferenceDetails?.organizers?.map((item)=>{
                                return(
                                    <div className='flex flex-row bg-white items-center my-6 rounded'>
                                        <img
                                            className='p-4 rounded-lg'
                                            src={item.image.url}
                                            width={140} 
                                            height={140}
                                            alt="img"
                                        />
                                        <div className='flex flex-col p-4'>
                                            <div className='text-xl font-bold mb-5'>{item.name}</div>
                                            <div>{item.about}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* sponsors  */}

                        {
                            selected === "sponsors" &&
                            conferenceDetails?.sponsors?.map((item)=>{
                                return(
                                    <div className='flex flex-row bg-white items-center my-6 rounded'>
                                        <img
                                            className='p-4 rounded-lg'
                                            src={item.image.url}
                                            width={140} 
                                            height={140}
                                            alt="img"
                                        />
                                        <div className='flex flex-col p-4'>
                                            <div className='text-xl font-bold mb-5'>{item.name}</div>
                                            <div>{item.about}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* allSpeakers */}

                        {
                            selected === "allSpeakers" &&
                            conferenceDetails?.allSpeakers?.map((item)=>{
                                return(
                                    <div className='flex flex-row bg-white items-center my-6 rounded'>
                                        <img
                                            className='p-4 rounded-lg'
                                            src={item.image.url}
                                            width={140} 
                                            height={140}
                                            alt="img"
                                        />
                                        <div className='flex flex-col p-4'>
                                            <div className='flex flex-row'>
                                                <div className='text-xl flex-1 font-bold mb-5'>{item.name}</div>
                                                <div>images</div>
                                            </div>
                                            <div>{item.about}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div> 
                    </div>
                </>  
                :
                <div className='h-screen'>
                    <Loading/>
                </div>
            }
            
        </div>
    )
}

export default ConferenceList