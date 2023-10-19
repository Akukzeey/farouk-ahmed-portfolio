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
                I&apos;m Farouk Ahmed, a self-taught developer hailing from Nairobi, Kenya. My journey into the web development realm ignited in 2020. I began with HTML, CSS, and JavaScript, gradually mastering their intricacies. Over the years, my skills have grown to encompass a wide array of technologies, including React, Next.js, WordPress, Bootstrap, SEO, and SASS.
            </p>
            <p className="paragraph" data-aos="fade-up">

            </p>
            <p className="paragraph" data-aos="fade-up">
                My portfolio is a testament to my passion for frontend development. It showcases a collection of projects that I&apos;ve meticulously crafted to deliver user-friendly interfaces and seamless user experiences. I believe in the power of self-driven learning to keep pace with the ever-evolving tech landscape.
            </p>
            <p className="paragraph" data-aos="fade-up">
                When not coding, I&apos;m exploring new technologies, staying updated with industry trends, and collaborating with fellow developers to exchange insights. I&apos;m excited to connect with like-minded professionals, collaborate on exciting projects, and contribute to the dynamic world of frontend development. My journey is an ongoing adventure, and I eagerly anticipate the opportunities and experiences ahead.
            </p>
            <div className="d-flex justify-content-center">
                <a href="/farouk_ahmed_cv.pdf" className="btn btn-primary mt-4" data-aos="fade-up">Download CV</a>
            </div>
        </div>
    )
}

export default About