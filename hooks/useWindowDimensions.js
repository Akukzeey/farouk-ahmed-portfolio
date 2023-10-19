import {useState, useEffect} from "react";

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(null);

    useEffect(() => {
        function getWindowDimensions() {
            const { innerWidth: width, innerHeight: height } = window;
            return {
                width,
                height
            };
        }

        function fetchDimensions() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('load', fetchDimensions);

        window.addEventListener('resize', fetchDimensions);

        return () => {
            window.removeEventListener('load', fetchDimensions);
            window.removeEventListener('resize', fetchDimensions);
        }
    }, []);

    return [windowDimensions, setWindowDimensions]
}

export default useWindowDimensions