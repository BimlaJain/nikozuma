"use client";
import React from "react";

import Image from "next/image";
import { HEADER_LIST } from "@/utils/helper";

const Header = () => {
    return (
        <div className=" nav-pt position-relative max-w-1920 mx-auto">
            <Image className="position-absolute logo-image" src="/assets/images/webp/header-image.webp" alt="logo-image" width={540} height={93} />
            <div className="d-flex justify-content-between max-w-880 mx-auto px-3">
                <div className="d-flex align-items-center">
                    <div
                        className="text-white nav-logo position-relative z-10"
                    >
                        NEKOZUMA
                    </div>
                </div>
                <ul className="ms-auto d-flex align-items-center justify-content-center links-gap mb-0 position-relative z-10">
                    {HEADER_LIST.map((item, index) => (
                        <li key={index} className="nav-text ">
                            <a className="menulist text-decoration-none" href={item.link}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="d-flex icons-ml icons-gap  position-relative z-10">
                    <a className="icons" href="https://discord.com/channels"> <Image src="/assets/images/svg/discord.svg" alt="discord" width={24} height={24} /></a>
                    <a className="icons" href="https://x.com/?lang=en"> <Image src="/assets/images/svg/footer-twitter.svg" alt="twitter" width={24} height={24} /></a>
                </div>
            </div>
        </div>

    );
};

export default Header;
