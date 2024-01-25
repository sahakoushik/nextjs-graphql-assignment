import React from 'react'
import Image from 'next/image'

const Sponsor = ({sponsorList, title}) => {
  return (
    <div>
        <div className='text-[#667085] text-center my-8'>{title}</div>
        <div className='flex flex-row gap-14 flex-wrap justify-center items-center'> 
            {
                sponsorList.map((item) => <Image className="h-[32px] md:h-[66px] object-contain" src={item.image.url} height={66} width={200} alt={item.name}/>)
            }
        </div>
    </div>
  )
}

export default Sponsor