import { useEffect } from "react";
import ReactGA from "react-ga4";




const Analytics = () => {
    useEffect(() => {
        ReactGA.initialize("G-NS5MM8T1NJ");
    },[])
    return null;
}

export default Analytics;