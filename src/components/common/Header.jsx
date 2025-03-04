"use client"
import React, { useState } from 'react';
import { HEADER_LIST } from '@/utils/helper';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar pt-0  flex-direction ">
            <a className="logo " href="#">
                <img src="/assets/images/png/logo.png" alt="logo" />
            </a>
            <button
                className="navbar-toggler position-absolute end-0 me-3 border-0 bg-transparent"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span className="text-white fs-2">{menuOpen ? '✖' : '☰'}</span>
            </button>
            {menuOpen && (
                <div className="container d-flex justify-content-end pt-90">
                    <div className="d-flex justify-space-between px-4 py-2" id="navbarNav">
                        <ul className="navbar-nav">
                            {HEADER_LIST.map((link, index) => (
                                <li className="nav-item" key={index}>
                                    <a className="nav-link text-white" href={link.href}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
