import React from 'react';
import Image from 'next/image';
import { TEAM_MEMBERS } from '@/utils/helper';

const Team = () => {
    return (
        <div id='team' className='pb-28'>
            <div className="container">
                <h2 className='story-heading text-center frank-gothic'>Team</h2>
                <div className='d-flex flex-wrap gap-4 max-w-880 mx-auto align-items-center justify-content-center'>
                    {TEAM_MEMBERS.map((member, index) => (
                        <div key={index} className="text-center">
                            <Image className='team-image' src={member.image} alt={member.name} width={202} height={202} />
                            <h2 className='card-heading frank-gothic'>{member.role}</h2>
                            <p className='card-text'>{member.name}</p>
                            <p className='card-text'>However at every junction in time, there is always a darkness that is waiting to overthrow</p>
                            <Image className='twitter mx-auto' src="/assets/images/svg/twitter.svg" alt="twitter" width={20} height={20} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;