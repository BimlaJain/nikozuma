import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-section text-white d-flex align-items-lg-center  overflow-hidden position-relative mx-auto max-w-1920">
                <div className="row align-items-lg-center ms-auto py-5 mx-auto max-w-880">
                    <div className="col-lg-6 text-center text-lg-start px-0">
                        <div className="container mx-auto max-w-1140">
                            <div className="text-primary size-border mr-auto text-center"></div>
                            <h1 className="fw-bold heading-font text-primary">NEKOZUMA</h1>
                            <p className="text-light ">
                                The collection of 5555 NFTs on the Solana blockchain. The collection
                                serves to be a rising force against the anime meta of collections
                                with undoxxed teams and is therefore backed by the team at
                                Nuktabe NFT & Karmic Labs.
                            </p>
                            <Link href="#" className="btn btn-primary position-relative z-10">
                                Connect Wallet
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 text-right mt-lg-4 mt-5 mt-lg-0 position-absolute hero-image-position px-0">
                        <Image
                            src="/assets/images/webp/hero-image.webp"
                            alt="Nekozuma Character"
                            width={557}
                            height={557}
                            className="img-fluid"
                        />
                    </div>
                </div>
                <div className="position-absolute light-position">
                    <Image src="/assets/images/webp/hero-left-light.webp" alt="left-light" width={355} height={511} />
                </div>
            </div>
        </div>
    );
};

export default Hero;