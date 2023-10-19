import {useEffect, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobileScreenButton} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
function HeroContacts() {

    const callRef = useRef();
    const mailRef = useRef();
    const whatsappRef = useRef();
    const twitterRef = useRef();
    const linkedInRef = useRef();
    const githubRef = useRef();

    const setToolTip = (ref, title) => {
        let toolTip = new window.bootstrap.Tooltip(ref.current, {
            title: title,
            placement: 'top',
            trigger: 'hover'
        })
    }

    useEffect(() => {
        window.bootstrap = require('bootstrap');
        setToolTip(callRef, "Call")
        setToolTip(mailRef, "Email")
        setToolTip(whatsappRef, "Whatsapp")
        setToolTip(twitterRef, "Twitter")
        setToolTip(linkedInRef, "LinkedIn")
        setToolTip(githubRef, "GitHub")
    })

    return (
        <div id="contact">
            <Link href="tel:+254707269635">
                <button ref={callRef} className="icons" aria-label="Call">
                    <FontAwesomeIcon icon={faMobileScreenButton} className="default"/>
                </button>
            </Link>
            <Link href="mailto:thiagoacookie@gmail.com">
                <button ref={mailRef} className="icons" aria-label="Email">
                    <FontAwesomeIcon icon={faEnvelope} className="default"/>
                </button>
            </Link>
            <Link href="https://github.com/akukzeey" target="_blank" rel="noreferrer">
                <button ref={githubRef} className="icons" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} className="default"/>
                </button>
            </Link>
            <Link href="https://wa.me/254707269635" target="_blank" rel="noreferrer">
                <button ref={whatsappRef} className="icons" aria-label="Whatsapp">
                    <FontAwesomeIcon icon={faWhatsapp} className="whatsapp"/>
                </button>
            </Link>
            <Link href="https://x.com/acookiesnr?t=AoLkgMw-fFDR6p_GQ5TESg&s=08" target="_blank" rel="noreferrer">
                <button ref={twitterRef} className="icons" aria-label="Twitter">
                    <FontAwesomeIcon icon={faTwitter} className="twitter"/>
                </button>
            </Link>
            <Link href="https://www.linkedin.com/in/farouk-ahmed-764899243/" target="_blank" rel="noreferrer">
                <button ref={linkedInRef} className="icons" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} className="linked"/>
                </button>
            </Link>
        </div>
    )
}

export default HeroContacts