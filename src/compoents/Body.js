import ButtonSlider from "./ButtonSlider";
import SideBar from "./SideBar";
import VideoContaier from "./VideoContainer";
import Header from "./Header";
import { Outlet, useLocation } from "react-router";
import VideoPage from "../VideoPage";

const Body = () => {
    const loc = useLocation()
    return ( <div className="body-container">
    <Header />
    <div className="body-sub">
    <SideBar/>
    <Outlet />
    </div>
    </div> );
}
 
export default Body;