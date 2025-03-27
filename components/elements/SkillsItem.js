import Image from "next/image";

function SkillsItem({src, name}) {
    return(
        <div className="col-4 skill-item">
            {src ? (
                <Image
                    src={src}
                    alt={name}
                    placeholder="blur"
                    blurDataURL={src}
                    layout="fixed"
                    width="48"
                    height="48"
                />
            ) : (
                <div className="no-image-placeholder"></div>
            )}
            <div className="skill-name">{name}</div>
        </div>
    )
}

export default SkillsItem