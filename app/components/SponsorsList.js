import React from 'react'
import Sponsor from './Sponsor';

const SponsorsList = ({conferenceData}) => {
  console.log('inside sponsors',conferenceData);

const removeDuplicates =(array, property) => {
    let uniqueObjects = {};
    return array.filter(obj => {
      if (!uniqueObjects[obj[property]]) {
        uniqueObjects[obj[property]] = true;
        return true;
      }
      return false;
    });
}

  const getSponsors = (conferenceData, sponsorType, property) => {
    const sponsors =  conferenceData.flatMap((conference) => conference[sponsorType])
    return removeDuplicates(sponsors, property)
}

const goldSponsors = getSponsors(conferenceData, 'goldSponsors', 'name');
const silverSponsors = getSponsors(conferenceData, 'silverSponsors', 'name');
const bronzeSponsors = getSponsors(conferenceData, 'bronzeSponsors', 'name');
const platformSponsors = getSponsors(conferenceData, 'platformSponsors', 'name');


console.log('Gold Sponsors:', goldSponsors);
console.log('Silver Sponsors:', silverSponsors);
console.log('Bronze Sponsors:', bronzeSponsors);
console.log('Platform Sponsors:', platformSponsors);

  return (
    <div className='py-[100px] bg-[#F9FAFB] w-full'>
        <div className='font-bold text-[48px] text-center'>Our Sponsor</div>

        <Sponsor title="🥇 Gold Sponsor" sponsorList={goldSponsors}/>
        <Sponsor title="🥈Silver Sponsors" sponsorList={silverSponsors}/>
        <Sponsor title="🥉Bronze Sponsors" sponsorList={bronzeSponsors}/>
    </div>
  )
}

export default SponsorsList