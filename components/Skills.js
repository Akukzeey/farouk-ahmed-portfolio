import SkillsList from "./elements/SkillsList";
import SkillsItem from "./elements/SkillsItem";

function Skills() {
    return (
        <div id="skills">
            <h1 className="heading" data-aos="fade-up">Skills</h1>
            <div>
                <h2 className="heading2" data-aos="fade-up">Languages</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/js.webp" name="JavaScript" />
                    <SkillsItem src="/images/skills/html.webp" name="HTML" />
                    <SkillsItem src="/images/skills/css.webp" name="CSS" />
                </SkillsList>
            </div>
            <div>
                <h2 className="heading2" data-aos="fade-up">Frameworks & Libraries</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/react.webp" name="React.js" />
                    <SkillsItem src="/images/skills/next.webp" name="Next.js" />
                    <SkillsItem src="/images/skills/redux.webp" name="Redux" />
                    <SkillsItem src="/images/skills/bootstrap.webp" name="Bootstrap" />
                    <SkillsItem src="/images/skills/sass.webp" name="Sass" />
                </SkillsList>
            </div>
            <div>
                <h2 className="heading2" data-aos="fade-up">Other Technologies</h2>
                <SkillsList>
                    <SkillsItem src="/images/skills/rest.webp" name="Rest API" />
                    <SkillsItem src="/images/skills/git.webp" name="Git" />
                    <SkillsItem src="/images/skills/wordpress.webp" name="Wordpress" />
                </SkillsList>
            </div>
        </div>
    )
}

export default Skills