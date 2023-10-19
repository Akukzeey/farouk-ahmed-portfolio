import SmallProjectItem from "./SmallProjectItem";
import {
    faCss3,
    faHtml5,
    faJs,
    faNode,
    faReact,
    faSass,
    faWordpress
} from "@fortawesome/free-brands-svg-icons";

function SmallProjectsList({more, setMore}) {
    return(
        <div className={more ? "d-block" : "d-none"}>
            <div className="row">
                <SmallProjectItem title="Ip address trucker" sourceCode="https://github.com/Akukzeey/Ip-Address-Tracker" techUsed={[faHtml5, faCss3, faJs]} />
                <SmallProjectItem title="YouTube clone" sourceCode="https://github.com/Akukzeey/youtube-clone" techUsed={[faHtml5, faCss3, faJs, faReact]} />
                <SmallProjectItem title="Todo List" sourceCode="https://github.com/Akukzeey/todo_list_react" techUsed={[faHtml5, faCss3, faJs, faReact]} />
                <SmallProjectItem title="Nunu Glam" sourceCode="https://github.com/Akukzeey/nunu_glam" techUsed={[faHtml5, faCss3, faJs]} />
                <SmallProjectItem title="Landing Page" sourceCode="https://github.com/Akukzeey/Ecommerce-Landing-Page" techUsed={[faHtml5, faCss3, faJs]} />
                <SmallProjectItem title="Grid website" sourceCode="https://github.com/Akukzeey/todo_list_react" techUsed={[faHtml5, faCss3, faJs]} />
            </div>
            <div className="d-flex justify-content-center mb-5">
                <button onClick={() => setMore(!more)} className="btn btn-primary">Show {more ? "less" : "more"} projects</button>
            </div>
        </div>
    )
}

export default SmallProjectsList