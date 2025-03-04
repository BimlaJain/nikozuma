import React from 'react'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className='py-5 footer-bg position-relative'>
            <img className='position-absolute footer-left-image' src="/assets/images/webp/footer-left-image.webp" alt="left-image" />
            <img className='position-absolute footer-right-image' src="/assets/images/webp/footer-right-image.webp" alt="right-image" />
            <div className="container">
                <h2 className='footer-heading text-center pb-4'>NEKOZUMA</h2>
                <div className="d-flex align-items-center justify-content-center gap-4">
                    <a className='icons' href="https://discord.com/channels"> <Image src="/assets/images/svg/discord.svg" alt="discord" width={32} height={32} /></a>
                    <a className='icons' href="https://x.com/?lang=en"> <Image src="/assets/images/svg/footer-twitter.svg" alt="twitter" width={32} height={32} /></a>
                </div>
            </div>
        </div>
    )
}
export default Footer