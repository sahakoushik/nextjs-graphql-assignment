"use client"
import Image from 'next/image'
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Loading from '@/app/components/Loading'


const ConferenceList = ({params}) => {
    const [type, setType] = useState([
        {id:1, name: "Schedules",value:"schedules",conferenceDetails:{}},
        {id:1, name: "Organizers",value:"organizers",conferenceDetails:{}},
        {id:1, name: "Speakers",value:"allSpeakers",conferenceDetails:{}},
        {id:1, name: "Sponsors",value:"sponsors",conferenceDetails:{}},
    ])
    const [conferenceDetails, setConferenceDetails] = useState('');
    const [selected, setSelected] = useState('');
    
    useEffect(() => {
        params && getConferenceDataById()

    
    }, [params])
    
    

    const getConferenceDataById = () =>{
        // GlobalApi.getConferenceById(params.id).then(resp=> setConferenceDetails(resp.conference))
        GlobalApi.getConferenceById(params.id).then(resp=> updatedState(resp.conference))
    }

    const updatedState = (value) => {
        setType((prevType)=> prevType.map((item)=> ({...item,conferenceDetails:value[item.value] })))
    }
    return (
        console.log('type',type),
        <div className='p-32 bg-white'>
            {
                type.map((item)=>{
                    return(
                        <div key={item.id} className='flex gap-12'>
                            <div onClick={()=> setSelected(item.value)} className={`w-[365px] mb-4 cursor-pointer flex items-center h-[72px] rounded-lg border ${selected === item.value && 'bg-[#FFC93E]'}`}>
                                <div className='rounded ml-4 mr-8 bg-[#FFFCF6] size-[56px] flex justify-center items-center'>
                                    <Image src="/Vector.svg" height={25} width={23} alt="vector"/>
                                </div>
                                <div className={`text-center font-bold text-[#0A142F] ${selected === item.value && 'text-white'}`}>{item.name}</div>
                            </div>

                            <div className='flex-1 bg-[#F9FAFB] p-[52px]'>
                                {
                                    item.conferenceDetails.map((type)=>{
                                        return(
                                            
                                            selected === "schedules" ?    
                                            <div className='flex flex-col bg-white px-10 py-6 my-6 rounded'>
                                                <div className='text-xl font-bold'>{type.day}</div>
                                                {
                                                    type.intervals.map((item)=>{
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
                                            </div>:
                                            null
                                            
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
                    
        </div>
    )
}

export default ConferenceList