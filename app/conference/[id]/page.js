"use client"
import Image from 'next/image'
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useState } from 'react'
import { useEffect } from 'react'

const imageLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

const ConferenceList = ({params}) => {
    const [conferenceDetails, setConferenceDetails] = useState('')
    useEffect(() => {
        console.log(params);
        params && getConferenceDataById()
    }, [params])
    
    const getConferenceDataById = () =>{
        GlobalApi.getConferenceById(params.id).then(resp=> setConferenceDetails(resp.conference))
    }
  return (
    // console.log('cd', conferenceDetails),
    <div>
        <div className='flex flex-row'>
            <div>Schedules</div>
            <div className='flex-1'>
            {
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
            </div> 
        </div>

        <div className='flex flex-row'>
            <div>organizers</div>
            <div className='flex-1'>
            {
                conferenceDetails?.organizers?.map((item)=>{
                    return(
                        <div className='flex flex-row bg-white items-center my-6 rounded'>
                            <Image
                                className='p-4 rounded-lg'
                                src={item.image.url} 
                                width={140} 
                                height={140}
                            />
                            <div className='flex flex-col'>
                                <div className='text-xl font-bold mb-5'>{item.name}</div>
                                <div>{item.about}</div>
                            </div>
                        </div>
                    )
                })
            }
            </div> 
        </div>
        
        <div className='flex flex-row'>
            <div>sponsors</div>
            <div className='flex-1'>
            {
                conferenceDetails?.sponsors?.map((item)=>{
                    return(
                        <div className='flex flex-row bg-white items-center my-6 rounded'>
                            <Image
                                className='p-4 rounded-lg'
                                src={item.image.url} 
                                width={140} 
                                height={140}
                            />
                            <div className='flex flex-col'>
                                <div className='text-xl font-bold mb-5'>{item.name}</div>
                                <div>{item.about}</div>
                            </div>
                        </div>
                    )
                })
            }
            </div> 
        </div>

        <div className='flex flex-row'>
            <div>allSpeakers</div>
            <div className='flex-1'>
            {
            conferenceDetails?.allSpeakers?.map((item)=>{
                return(
                    <div className='flex flex-row'>
                        <Image
                            src={item.image.url} 
                            width={140} 
                            height={140}
                        />
                        <div className='flex flex-col'>
                            <div className='flex flex-row'>
                                <div className='flex-1'>{item.name}</div>
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
{/*         
        <div className='flex  flex-row'>
            <div>Organizers</div>
            {
                conferenceDetails?.organizers?.map((item)=>{
                    return(
                        <div className='flex flex-row'>
                            <Image
                                src={item.image.url} 
                                width={140} 
                                height={140}
                            />
                            <div className='flex flex-col'>
                                <div>{item.name}</div>
                                <div>{item.about}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='flex  flex-row'>
            <div>Sponsors</div>
            {
                conferenceDetails?.sponsors?.map((item)=>{
                    return(
                        <div className='flex flex-row'>
                            <Image
                                src={item.image.url} 
                                width={140} 
                                height={140}
                            />
                            <div className='flex flex-col'>
                                <div>{item.name}</div>
                                <div>{item.about}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        <div className='flex  flex-row'> 
        
        <div>Speakers</div>
        {
            conferenceDetails?.allSpeakers?.map((item)=>{
                return(
                    <div className='flex flex-row'>
                        <Image
                            src={item.image.url} 
                            width={140} 
                            height={140}
                        />
                        <div className='flex flex-col'>
                            <div className='flex flex-row'>
                                <div className='flex-1'>{item.name}</div>
                                <div>images</div>
                            </div>
                            <div>{item.about}</div>
                        </div>
                    </div>
                )
            })
        }
        </div> */}
    </div>
  )
}

export default ConferenceList