import ProjectItem from "./ProjectItem";
import portfolio from "../../public/images/projects/portfolio-img.png";
import apple from '../../public/images/projects/apple-img.png'
import commerce from '../../public/images/projects/amazon-cellular-prj.png'
import deesignal from '../../public/images/projects/deesignal-project.png'
import interactive from '../../public/images/projects/interactive-project.png'
import {
    faHtml5,
    faCss3,
    faJs,
    faSass,
    faBootstrap,
    faNode,
    faReact,
} from "@fortawesome/free-brands-svg-icons";

function ProjectList() {
    return (
        <>
            <ProjectItem
                title="Apple Clone"
                description={
                    <>
                        <p>
                            This is a fully functional e-commerce website which is fast, has good SEO and is fully responsive across all screens. It uses google maps api to
                            calculate delivery fee and give accurate directions for efficient deliveries.It&apos;s integrated with google analytics and facebook pixel to boost sales.
                        </p>
                    </>
                }
                techUsed={[faHtml5, faCss3, faSass, faBootstrap, faJs, faNode,"next.svg", "mongodb.svg"]}
                demo="https://www.apple-express.co.ke/"
                sourceCode="https://github.com/faizscripts/apple"
                src={apple}
            />
            <ProjectItem
                title="Deesignal Media"
                description={
                    <>
                        <p>
                            This React-based portfolio provides a user-friendly interface, ensuring a seamless exploration of my showcased work. With intuitive navigation and responsive design, it offers an engaging experience, making it easy for visitors to discover my projects and expertise.
                        </p>
                    </>
                }
                techUsed={[faHtml5, faCss3, faSass, faBootstrap, faJs, faReact]}
                demo="https://deesignal.faroukahmed.com/"
                sourceCode="https://github.com/Akukzeey/deesignal-portfolio"
                src={deesignal}
            />
            <ProjectItem
                title="Amazon Cellular"
                description={
                    <p>
                        This is a Front end interface for an e-commerce site which sells electronics. It is made using HTML, CSS and JavaScript.
                    </p>
                }
                techUsed={[faHtml5, faCss3, faSass, faBootstrap, faJs]}
                demo="https://www.faroukahmed.com/ac-frontend-master/index.html"
                sourceCode="https://github.com/Akukzeey/Ecommerce-Website/tree/master/ac-frontend-master"
                src={commerce}
            />
            <ProjectItem
                title="Interactive Media"
                description={
                    <>
                        <p>
                            Elevate your content with an interactive React card, designed to captivate users through engaging, dynamic interactions and seamless functionality.
                        </p>
                    </>
                }
                techUsed={[faHtml5, faCss3, faSass, faBootstrap, faJs, faReact]}
                demo="https://atm.faroukahmed.com/"
                sourceCode="https://github.com/Akukzeey/Interactive_Atm_Card"
                src={interactive}
            />
        </>
    )
}

export default ProjectList