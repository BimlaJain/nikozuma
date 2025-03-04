import React from 'react'
import Image from 'next/image'
const Story = () => {
    return (
        <div id='story' className='pt-5 max-w-1920 mx-auto'>
            <h2 className='text-center story-heading px-3 frank-gothic'>Story</h2>
            <p className='story-pera text-center mx-auto px-3 fs-6 m-0'>Nekozuma which means lightning cats in Japanese (Neko = Cats // Inazuma = Lightning) is a collection of 5555 NFTs on the Solana blockchain. The story centers around 3 eras of cats living in different timelines - past, present, future. In each timeline, there are 3 deities that are all powerful and are meant to protect the world of Nekos.</p>
            <p className='story-pera2 text-center mx-auto story-padding px-3 m-0'>However at every junction in time, there is always a darkness that is waiting to overthrow the good. Hence, each timeline has its own arch nemesis. This means that there will be a total of 4 godly nekos from each timeline making a total of 12 godly nekos that will be fully animated.</p>
            <Image className='story-image' src="/assets/images/webp/story-image.webp" alt="story-image" width={1280} height={357} />
        </div>
    )
}

export default Story