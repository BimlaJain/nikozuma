import React from 'react';
import Image from 'next/image';
import { TEAM_MEMBERS } from '@/utils/helper';

const Team = () => {
    return (
        <div id='team' className='team-spacing'>
            <div className="container">
                <div className=" size-border mx-auto text-center"></div>
                <h2 className='story-heading text-center team-spacing'>Team</h2>
                <div className='d-flex flex-wrap gap-4 max-w-880 mx-auto align-items-center justify-content-center'>
                    {TEAM_MEMBERS.map((member, index) => (
                        <div key={index} className="text-center">
                            <Image className='team-image' src={member.image} alt={member.name} width={202} height={202} />
                            <h2 className='card-heading m-0'>{member.role}</h2>
                            <p className='card-text m-0'>{member.name}</p>
                            <p className='card-text m-0'>However at every junction in time, there is always a darkness that is waiting to overthrow</p>
                            <a href="/">
                                <Image className='twitter mx-auto' src="/assets/images/svg/twitter.svg" alt="twitter" width={20} height={20} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;