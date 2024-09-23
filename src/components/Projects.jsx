import gsap from "gsap";
import { useGSAP} from "@gsap/react";
import ModelViewer from "./ModelViewer.jsx";
import {useRef, useState} from "react";
import * as THREE from "three";
import {Canvas} from "@react-three/fiber";
import {View} from "@react-three/drei";

const Projects = () => {

    // Camera control for the model view
    const cameraControl = useRef();

    // MODEL
    const modelControl = useRef(new THREE.Group());

    // Rotation
    const [modelRotation, setRotation] = useState(0);

    /* useGSAP(() => {

        gsap.to("#in-making", {
            opacity: 0,
            color: "red",
            duration: 1,
            repeat: -1,
            yoyo: true,

        })
    }) */

    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(' adrian@jsmastery.pro');
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    };

    return (
        <section id="projects" className="w-full h-full">

            {/* PROJECTS SECTION */}
            <div className="screen-max-width p-4 pb-20">
                { /* Title */}
                <div className="flex flex-col items-center lg:items-start text-left leading-relaxed lg:w-1/2 space-y-4">
                    <h1 className="section-title">Projects</h1>
                </div>

                {/* Section content */}
                <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                    <div className="col-span-1 xl:row-span-3">
                        <div className="grid-container">
                            <img src="/assets/images/equalizer.gif" alt="equalizer"
                                 className="w-full sm:h-[276px] h-fit object-contain"/>

                            <div>
                                <p className="grid-headtext">JUCE Audice Plugin</p>
                                <p className="grid-subtext">
                                    A simple equalizer built with JUCE framework for MacOS. It provides user with advanced
                                    control over audio processing, allowing them to seamlessly cascade multiple audio filters,
                                    as well as offering precise adjustments of filter parameters.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 xl:row-span-3">
                        <div className="grid-container">
                            <video
                                src="/assets/videos/md-editor.mov"
                                className="w-full sm:h-[276px] h-fit object-contain"
                                autoPlay
                                loop
                                muted
                                playsInline
                                controls={false}
                            >
                                Your browser does not support the video tag.
                            </video>

                            <div>
                                <p className="grid-headtext">MD Notebook</p>
                                <p className="grid-subtext">
                                    A simple and lightweight Markdown editor designed for quickly previewing and
                                    editing of Markdown files, allowing users to make edits without launching a
                                    full-fledged code editor.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 xl:row-span-4">
                        <div className="grid-container">
                            <div className="rounded-3xl w-full h-[326px] flex justify-center items-center">
                                {/* bone model here */}
                                <div className="container-3D-2">
                                    <ModelViewer
                                        controlRef={modelControl}
                                        setRotationState={setRotation}/>
                                    <Canvas
                                        className="w-full sm:w-1/2 h-full"
                                        style={{
                                            position: 'fixed',
                                            top: 0,
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            overflow: 'hidden',
                                            pointerEvents: 'none'
                                        }}
                                        eventSource={document.getElementById('root')}>
                                        <View.Port/>
                                    </Canvas>
                                </div>
                            </div>
                            <div>
                                <p className="grid-headtext">3D Model Renderer</p>
                                <p className="grid-subtext">
                                    As part of a research initiative at Kanazawa University, I developed a high-performance 3D model renderer in Python that efficiently reconstructs 3D models from TIFF images.
                                    The above model is a petrous bone fragment recovered from Bayanbulag site in Mongolia.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-2 xl:row-span-3">
                        <div className="grid-container">
                            <img src="/assets/images/virhwm.png" alt="grid-3"
                                 className="w-full sm:h-[266px] h-fit object-contain"/>

                            <div>
                                <p className="grid-headtext">Virtual Hardware Simulator</p>
                                <p className="grid-subtext">
                                    An intuitive virtual hardware simulator featuring a basic Arithmetic Logic
                                    Unit (ALU) and a multiplier unit. This simulator allows users to modify
                                    micro-instruction codes dynamically, enabling the simulation of a wide range of
                                    hardware. The tool offers an interactive platform to explore and experiment
                                    with digital hardware concepts and micro-architecture, making it ideal for
                                    educational purposes and hardware design experimentation.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-1 xl:row-span-2">
                        <div className="grid-container">
                            <img
                                src="/assets/images/ATCG_yoyo.gif"
                                alt="aDNA"
                                className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                            />

                            <div>
                                <p className="grid-headtext">aDNA Soft Clipping Tool</p>
                                <p className="grid-subtext">
                                    A specialized utility designed to efficiently process SAM/BAM files by performing
                                    soft clipping of sequence reads, inspired by the well-known SAMtools project.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                { /*
                <div className="flex flex-col">
                    <p className="section-content my-5">
                        For now, play with this 3D model of a bone
                    </p>
                    <div className="flex flex-col sm:flex-row sm:space-x-10">
                        <div className="container-3D mb-5 sm:w-2/3">
                            <ModelViewer
                                controlRef={modelControl}
                                setRotationState={setRotation}/>
                            <Canvas
                                className="w-full sm:w-1/2 h-full"
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    overflow: 'hidden',
                                    pointerEvents: 'none'
                                }}
                                eventSource={document.getElementById('root')}>
                                <View.Port/>
                            </Canvas>
                        </div>
                        <div className="mx-auto sm:w-1/3">
                            <p className="font-light max-sm:text-sm text-xl text-justify px-4">
                                This bone was excavated from a mass grave at the Bayanbulag site in Mongolia and is
                                believed
                                to belong to a warrior from the Han-Xiongnu War, a conflict between the Han Dynasty and
                                the
                                Xiongnu confederation, spanning from 133 BCE to 89 CE. As part of my research at the
                                Paleogenomics Lab at Kanazawa University, I developed a highly efficient tool using
                                Python and C++ to reconstruct 3D models from TIFF images.
                                <br/>
                                (Still working on improving it)
                            </p>
                        </div>
                    </div>
                </div>

                */ }
            </div>
        </section>
    );
}

export default Projects;