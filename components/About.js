import useWindowDimensions from "../hooks/useWindowDimensions";
import Image from "next/image";
import me from "../public/images/main-img-2.png"

function About() {
    const [windowDimensions] = useWindowDimensions()

    const renderAboutPhoto = () => {
        if (windowDimensions) {
            const {width} = windowDimensions
            if (width < 768) {
                return (
                    <div className="about-photo-container">
                        <div className="about-photo d-flex justify-content-center" data-aos="fade-up">
                            <Image src={me} alt={me} placeholder="blur" layout="fill"/>
                        </div>
                    </div>
                )
            } else return null
        } else return null
    }

    return (
        <div id="about">
            <h1 className="heading" data-aos="fade-up">About</h1>
            {renderAboutPhoto()}
            <p className="paragraph" data-aos="fade-up">
                I&apos;m Farouk Ahmed, a self-taught front-end developer and software tester from Nairobi, Kenya. My journey into web development began in 2020 with HTML, CSS, and JavaScript, and over time, I expanded my expertise to include React, Next.js, WordPress, Bootstrap, SEO, and SASS. Alongside development, I specialize in software testing, ensuring applications are not only visually appealing but also functional, reliable, and optimized for a seamless user experience.
            </p>
            <p className="paragraph" data-aos="fade-up">
                My portfolio reflects my dedication to building and refining digital experiences. I focus on crafting responsive, high-performance interfaces while applying rigorous testing practices to enhance quality and usability. I thrive in continuous learning, staying updated with emerging technologies and best practices to improve both development and testing processes.
            </p>
            <p className="paragraph" data-aos="fade-up">
                Beyond coding and testing, I enjoy exploring new technologies, collaborating with developers and testers, and exchanging insights to grow in this ever-evolving field. I'm always open to new opportunities, exciting projects, and challenges that push me to create and refine even better solutions.
            </p>
            <div className="d-flex justify-content-center">
                <a href="/farouk_ahmed_cv (2).pdf" className="btn btn-primary mt-4" data-aos="fade-up">Download CV</a>
            </div>
        </div>
    )
}

export default About