import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./common/Header";

const Hero = () => {
    return (
        <section className="hero-section text-white d-flex align-items-lg-center  overflow-hidden position-relative ">
            {/* <Header/> */}
            <div className="row align-items-lg-center ms-auto py-5 mx-auto max-w-1140">
                    <div className="col-lg-6 text-center text-lg-start px-0">
                    <div className="container mx-auto max-w-1140">
                        
                        <div className="text-primary size-border text-center"></div>
                        <h1 className="fw-bold heading-font text-primary">NEKOZUMA</h1>
                        <p className="text-light ">
                            The collection of 5555 NFTs on the Solana blockchain. The collection
                            serves to be a rising force against the anime meta of collections
                            with undoxxed teams and is therefore backed by the team at
                            Nuktabe NFT & Karmic Labs.
                        </p>
                        <Link href="#" className="btn btn-primary">
                            Connect Wallet
                        </Link>
                    </div>
                        </div>

                    <div className="col-lg-6 text-right mt-4 mt-lg-0 position-absolute hero-image-position px-0">
                        <Image
                            src="/assets/images/png/hero-image.webp"
                            alt="Nekozuma Character"
                            width={560}
                            height={560}
                            className="img-fluid"
                        />
                    </div>
            </div>
            <div className="position-absolute light-position">
                <Image src="/assets/images/png/left-light.png" alt="left-light" width={355} height={511} />
            </div>
        </section>
    );
};

export default Hero;
