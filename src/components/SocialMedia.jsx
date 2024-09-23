import React from 'react';
import Facebook from "./icons/Facebook.jsx";
import Linkedin from "./icons/Linkedin.jsx";
import Github from "./icons/Github.jsx";

function SocialMedia() {

    return (
        <div className="social-media flex space-x-4 mt-5">
            <a href="https://github.com/namirgarib">
                <Github />
            </a>
            <a href="https://www.linkedin.com/in/namir-garib-82350b16a/">
                <Linkedin />
            </a>
            <a href="https://facebook.com/namirgarib1">
                <Facebook />
            </a>
        </div>
    );
}

export default SocialMedia;
