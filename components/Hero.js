import Proposition from "./elements/Proposition";
import MyImage from "./elements/MyImage";
import HeroContacts from "./elements/HeroContacts";
import useWindowDimensions from "../hooks/useWindowDimensions";

function Hero() {

    const [windowDimensions] = useWindowDimensions()

    const renderHeroImage = () => {
        if (windowDimensions){
            const {width} = windowDimensions
            if (width>= 768){
                return(
                    <div className="col-md-4" id="small-column">
                        <MyImage />
                    </div>
                )
            } else return null
        } else return null
    }

    return(
        <div className="container-fluid">
            <div className="row" id="hero" >
                <div className="col-md-8" id="big-column">
                    <Proposition />
                    <HeroContacts />
                </div>
                {renderHeroImage()}
            </div>
        </div>
    )
}

export default Hero