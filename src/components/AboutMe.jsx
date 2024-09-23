import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { aboutmeImg } from "../utils/index.js";
import {useRef} from "react";
import { ScrollTrigger} from "gsap/ScrollTrigger";

import ResearchIcon from "./icons/ResearchIcon.jsx";
import FullStackIcon from "./icons/FullStackIcon.jsx";
import SystemIcon from "./icons/SystemIcon.jsx";
import StudentIcon from "./icons/StudentIcon.jsx";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {

    const introRef = useRef(null);
    const titleRef = useRef(null);
    const psRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: introRef.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: false,
                },
            }
        )

        gsap.fromTo(
            introRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: introRef.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: false,
                },
            }
        )

        gsap.fromTo(
            psRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 5,
                delay: 4,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: psRef.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: false,
                },
            }
        )
    }, []);

    return (
        <section id="about"
                 className="w-full min-h-screen flex flex-col items-center justify-center text-white mb-20">
            <div className="screen-max-width flex flex-col-reverse lg:flex-row items-center lg:space-x-12 p-4">

                {/* Left side - Content */}
                <div className="flex flex-col items-center lg:items-start text-left leading-relaxed lg:w-1/2 space-y-4">
                    <h1 ref={titleRef} className="section-title">About me</h1>
                    <p ref={introRef} id="introduction-passage"
                       className="text-xl sm:text-2xl sm:ml-5 lg:text-2xl font-light max-w-prose">
                        Hello! My name is Namir Garib, and I am a bachelor student at Kanazawa University,
                        majoring in Electrical Engineering and Computer Science. I am a passionate Systems Engineer and
                        Full-stack Developer based in Japan.
                    </p>
                    <p ref={psRef} className="text-base sm:text-lg sm:ml-5 lg:text-base font-light max-w-prose text-gray-500">
                        PS: I made these icons by myself. Not much of a designer, eh? 🤫
                    </p>
                </div>

                {/* Right side - Photo */}
                <div className="mt-8 pb-8 lg:mt-0 lg:w-1/2 flex justify-center">
                    <img src={aboutmeImg} alt="portrait"
                         className="rounded-full w-3/4 lg:w-2/3 xl:w-1/2 object-cover"/>
                </div>

            </div>

            <div className="color-container screen-max-width flex flex-col-reverse lg:flex-row items-center p-4
            max-sm:mx-4 mt-16">
                <ul className="flex flex-col space-y-20 p-10">
                    <li className="color-container-2 flex flex-col sm:flex-row sm:space-x-10 max-sm:space-y-5 sm:items-center">
                        <div className="flex sm:w-1/5 sm:scale-75">
                            <SystemIcon/>
                        </div>
                        <div>
                            <h3 className="container-title">Systems engineer</h3>
                            <p className="container-text mt-5">
                                Integrated multiple bioinformatics tools (samtools, gatk, bwa etc) into a
                                unified system and automated the processing pipeline using
                                <a href="https://snakemake.readthedocs.io/en/stable/"
                                   className="link-alt"> Snakemake</a>.
                                Currently working on deploying system to Google Cloud.
                            </p>
                        </div>
                    </li>
                    <li className="color-container-2 flex flex-col sm:flex-row sm:space-x-10 max-sm:space-y-5 sm:items-center">
                        <div className="flex sm:w-1/5 sm:scale-75">
                            <FullStackIcon/>
                        </div>
                        <div>
                            <h3 className="container-title">Full-stack Developer</h3>
                            <p className="container-text mt-5">
                                Currently working as a full-stack developer, specializing in building and optimizing
                                responsive,
                                high-performance websites. Proficient in modern web technologies such as&nbsp;
                                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"
                                   className="link-alt">React</a>,&nbsp;
                                <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer"
                                   className="link-alt">Vite</a>,&nbsp;
                                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"
                                   className="link-alt">Tailwind
                                    CSS</a>,&nbsp;
                                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer"
                                   className="link-alt">Next.js</a>, and&nbsp;
                                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer"
                                   className="link-alt">Node.js</a>,
                                with extensive experience
                                integrating various libraries and frameworks, including&nbsp;
                                <a href="https://greensock.com/gsap/" target="_blank" rel="noopener noreferrer"
                                   className="link-alt">GSAP</a>,
                                to create dynamic and engaging user experiences. I also monitor performance, click-through
                                rate and user engangement of websites for my clients using&nbsp;
                                <a href="https://sentry.io/welcome/" target="_blank" rel="noopener noreferrer"
                                   className="link-alt">Sentry</a>&nbsp;
                                for my clients using Sentry.
                            </p>
                        </div>

                    </li>
                    <li className="color-container-2 flex flex-col sm:flex-row sm:space-x-10 max-sm:space-y-5 sm:items-center">
                        <div className="flex sm:w-1/5 sm:scale-75">
                            <ResearchIcon/>
                        </div>
                        <div>
                            <h3 className="container-title">Research assistant</h3>
                            <p className="container-text mt-5">
                                Working part-time as a research assistant at Paleogenomics lab at Kanazawa University.
                                Currently working on developing a Vision Pro app, that enables users to preview the
                                internal structure of a bone before taking samples for the DNA analysis.
                            </p>
                        </div>
                    </li>
                    <li className="color-container-2 flex flex-col sm:flex-row sm:space-x-10 max-sm:space-y-5 sm:items-center">
                        <div className="flex sm:w-1/5 sm:scale-75">
                            <StudentIcon/>
                        </div>
                        <div>
                        <h3 className="container-title">Student</h3>
                            <p className="container-text mt-5">
                                I am still a bachelor student majoring in Electrical Engineering and Computer Science at
                                Kanazawa University. I am open for internship and job opportunities, as well as
                                collaboration.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    );
}

export default AboutMe;