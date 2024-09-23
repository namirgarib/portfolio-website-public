import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import {portraitImg} from "../utils/index.js";
import SocialMedia from './SocialMedia';
import CanvasBackground from "./CanvasBackground";
import {Canvas} from "@react-three/fiber";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
    useGSAP(() => {

        gsap.to("#pretext", {
            duration: 1.5,
            delay: 1,
            text: { value: '> console.log("Hello, it\'s me");' },
            ease: "power1.in",
            onComplete: () => {
                document.getElementById("pretext").innerHTML =
                    '> console.log(<span class="highlight-text">"Hello, it\'s me"</span>);';
            }
        })

        gsap.to("#hero", {
            delay: 3,
            duration: 2,
            opacity: 1,
            y: 0,
            ease: "power1.in"
        })

        gsap.to("#portrait", {
            duration: 2,
            delay: 3,
            opacity: 1,
            y: -50,
            onComplete: function() {
                gsap.to("#portrait", {
                    duration: 3,
                    y: "-=20",
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut"
                });
            }
        });

        gsap.to("#student", {
            delay: 5,
            duration: 2,
            opacity: 1,
            x: 0
        })

        gsap.to("#sys-eng", {
            delay: 6,
            duration: 2,
            opacity: 1,
            x: 0
        })

        gsap.to("#fs-dev", {
            delay: 7,
            duration: 2,
            opacity: 1,
            x: 0
        })

        gsap.to("#dv", {
            delay: 8,
            opacity: 1,
            ease: "bounce.in"
        })

        gsap.to(".social-media a", {
            delay: 9,
            opacity: 1,
            y: 0,
            stagger: 0.25
        })

        gsap.to(".btn", {
            delay: 9,
            x: 0,
            opacity: 1
        })

    }, [])

    return (
        <section className="hero w-full nav-height mb-10">
            <CanvasBackground />
            <div className="hero-content flex screen-max-width h-full items-center justify-center">
                <div className="flex flex-col w-full translate-y-[-10vh] sm:translate-y-0 sm:w-1/2 px-4 sm:px-8">
                    <div className="flex">
                        <p id="pretext" className="hero-small-text font-mono whitespace-nowrap">
                            <span className="command-start">{/* > console.log( */}</span>
                            <span className="highlight-text">{/* "Hello, it's me" */}</span>
                            <span className="command-end">{/* ); */}</span>
                        </p>
                    </div>
                    <div className="flex">
                        <p id="hero" className="hero-title font-bold whitespace-nowrap">
                            Name Surname
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:space-x-2 items-start sm:items-center">
                        <span id="student" className="hero-highlights sm:text-left text-center whitespace-nowrap">
                            Student
                        </span>
                        <span id="dv" className="hero-highlights hidden sm:inline-block"> | </span>
                        <span id="sys-eng" className="hero-highlights sm:text-left text-center whitespace-nowrap sm:ml-2">
                            Systems Engineer
                        </span>
                        <span id="dv" className="hero-highlights hidden sm:inline-block"> | </span>
                        <span id="fs-dev" className="hero-highlights sm:text-left text-center whitespace-nowrap sm:ml-2">
                            Full-stack Developer
                        </span>
                    </div>
                    <div className="flex flex-row items-center space-x-10 sm:space-x-20">
                        <div className="flex flex-col py-5">
                            <SocialMedia/>
                        </div>
                        <a href="/assets/files/mock-pdf.pdf" download="mock-pdf.pdf"
                           className="btn whitespace-nowrap mt-5 sm:inline-block">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="hidden sm:flex w-1/2 items-center justify-center px-8 min-h-screen">
                    <img id="portrait" src={portraitImg} alt="portrait" width="400" height="400"/>
                </div>
            </div>


        </section>
    )
}

export default Hero;