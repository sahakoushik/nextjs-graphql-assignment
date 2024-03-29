"use client"
import Image from 'next/image'
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import Loading from '@/app/components/Loading'
import ImageLink from '@/app/components/ImageLink'


const ConferenceList = ({params}) => {
    const [type, setType] = useState([
        {id:1, name: "Schedules",value:"schedules"},
        {id:2, name: "Organizers",value:"organizers"},
        {id:3, name: "Speakers",value:"allSpeakers"},
        {id:4, name: "Sponsors",value:"sponsors"},
      ])

    const dragType = useRef(0)
    const draggedOverType = useRef(0)

    const [conferenceDetails, setConferenceDetails] = useState('');
    const [selected, setSelected] = useState('');
    
    useEffect(() => {
        params && getConferenceDataById()    
    }, [params])
    
    const getConferenceDataById = () =>{
        GlobalApi.getConferenceById(params.id).then(resp=> setConferenceDetails(resp.conference))
    }

    const handleSort = () => {
        const typeClone = [...type]
        const temp = typeClone[dragType.current]
        typeClone[dragType.current] = typeClone[draggedOverType.current]
        typeClone[draggedOverType.current] = temp
        setType(typeClone)
    }

    return (
        console.log('cd',conferenceDetails),
        <div className='-mt-24 py-48 px-6 md:px-32 bg-white'>
            {
                conferenceDetails ?
                <>
                    <div className='text-[48px] font-bold'>{conferenceDetails.name}</div>
                    <div className='text-[20px] text-[#0a142fd9]'>{conferenceDetails.slogan}</div>

                    <div className='flex flex-col lg:flex-row gap-12 pt-16'>
                        <div>
                            {type.map((item, index) => (
                                <div
                                    key={item.id}
                                    onClick={()=> setSelected(item.value)} className={`w-100 lg:w-[285px] xl:w-[365px] mb-4 cursor-pointer flex items-center h-[72px] rounded-lg border ${selected === item.value && 'bg-[#FFC93E]'}`}>
                                    <div className='rounded ml-4 mr-8 bg-[#FFFCF6] size-[56px] flex justify-center items-center'>
                                        <Image 
                                            draggable
                                            onDragStart={() => (dragType.current = index)}
                                            onDragEnter={() => (draggedOverType.current = index)}
                                            onDragEnd={handleSort}
                                            onDragOver={(e) => e.preventDefault()}
                                            src="/Vector.svg" height={25} width={23} alt="vector"/>
                                    </div>
                                    <div className={`text-center font-bold text-[#0A142F] ${selected === item.value && 'text-white'}`}>{item.name}</div>
                                </div>
                            ))}
                        </div>
                        

                        <div className='flex-1 bg-[#F9FAFB] p-[52px]'>

                        {/* Schedules     */}

                        {
                            selected === "schedules" &&
                            conferenceDetails?.schedules?.map((item)=>{
                                return(
                                    <div key={item.day} className='flex flex-col bg-white px-10 py-6 my-6 rounded'>
                                        <div className='text-xl font-bold'>{item.day}</div>
                                        {
                                            item.intervals.map((item)=>{
                                                return(
                                                    item.sessions.map((item)=>{
                                                        return(
                                                            <div key = {item.title} className='py-2'>
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
                                    <div key={item.name} className='flex flex-row bg-white items-center my-6 rounded'>
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
                                    <div key={item.name} className='flex flex-row bg-white items-center my-6 rounded'>
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
                                    <div key={item.name} className='flex flex-row bg-white items-center my-6 rounded'>
                                        <img
                                            className='p-4 rounded-lg'
                                            src={item.image.url}
                                            width={140} 
                                            height={140}
                                            alt="img"
                                        />
                                        <div className='p-4 flex-1'>
                                            <div className='flex flex-col lg:flex-row mb-5'>
                                                <div className='text-xl flex-1 font-bold'>{item.name}</div>
                                                <div className='flex gap-2'>
                                                    <ImageLink link={item.social.twitter} icon="twitter"/>
                                                    <ImageLink link={item.social.linkedin} icon="linkedin"/>
                                                    <ImageLink link={item.social.dribble} icon="dribble"/>
                                                    <ImageLink link={item.social.github} icon="github"/>
                                                </div>
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