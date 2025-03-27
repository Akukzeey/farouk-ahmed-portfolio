import {useState} from "react";
import ProjectList from "./elements/ProjectList";

function Projects() {

    const [more, setMore] = useState(false)

    return(
        <div id="projects">
            <h1 className="heading" data-aos="fade-up">Projects</h1>
            <ProjectList />
        </div>
    )
}

export default Projects