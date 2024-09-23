import { logo } from "../utils/";
import { navLists } from "../constants/index.js";
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useNavigate } from "react-router-dom";

// Register the GSAP ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
    const dropdownRef = useRef(null); // Ref for the dropdown element
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            gsap.to(window, {
                scrollTo: { y: section, offsetY: 10 },  // Adjust offsetY to match the height of your fixed navbar
                duration: 1,  // Duration of the scroll (1 second)
                ease: 'power2.out'  // Easing function
            });
        }
    };

    // Navigation logic
    const handleNavigation = (nav) => {
        if (nav.path.startsWith('#')) {
            if (window.location.pathname === '/') {
                scrollToSection(nav.id);
            } else {
                navigate('/');
                setTimeout(() => {
                    scrollToSection(nav.id);
                }, 100);
            }
        } else {
            navigate(nav.path);
        }
        setIsOpen(false);
    };

    // GSAP (for dropdown menu)
    useEffect(() => {
        if (isOpen) {
            const dropdownHeight = dropdownRef.current.scrollHeight; // Get the full height of the dropdown content
            gsap.fromTo(dropdownRef.current,
                { height: 0, opacity: 0 },
                { height: dropdownHeight, opacity: 1, duration: 0.5, ease: 'power2.out', onComplete: () => {
                        dropdownRef.current.style.height = 'auto'; // Set height to auto after animation for flexibility
                    } }
            );
        } else {
            gsap.fromTo(dropdownRef.current,
                { height: dropdownRef.current.scrollHeight, opacity: 1 },
                { height: 0, opacity: 0, duration: 0.5, ease: 'power2.in' }
            );
        }
    }, [isOpen]);

    return (
        <>
            <header style={{ backgroundColor: 'transparent' }} className="w-full py-5 sm:px-6 px-5 flex items-center justify-between">
                <nav className="flex w-full screen-max-width items-center bg-transparent">
                    {/* Logo */}
                    <a href="/">
                        <img src={logo} alt={"NamirLogo"} width={50} height={50} className="icon-image rounded-md" />
                    </a>

                    {/* Added on 2024/09/18 by Namir Garib */}
                    <div className="flex-grow"></div>

                    {/* Full Nav for larger screens */}
                    <div className="flex flex-1 justify-end max-sm:hidden">
                        {navLists.map((nav) => (
                            <div
                                key={nav.id}
                                onClick={() => {handleNavigation(nav)}}
                                className="px-5 text-sm font-bold cursor-pointer text-gray hover:text-white transition-all whitespace-nowrap"
                            >
                                {nav.name}
                            </div>
                        ))}
                    </div>

                    {/* Hamburger Menu for small screens */}
                    <div className="sm:hidden flex items-center">
                        {/* Hamburger Icon */}
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-white focus:outline-none">
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Dropdown Menu for small screens */}
            <div ref={dropdownRef} className="overflow-hidden flex-col w-full bg-[#060606] text-white sm:hidden">
                {isOpen && (
                    navLists.map((nav, index) => (
                        <div
                            key={nav.id}
                            onClick={() => { handleNavigation(nav) }
                            }
                            className={`flex w-full items-center px-8 py-4 text-sm font-bold cursor-pointer hover:text-gray-400 transition-all
                                ${index !== navLists.length - 1 ? 'border-b border-gray-800' : ''}`}
                        >
                            {nav.name}
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default Navbar;
