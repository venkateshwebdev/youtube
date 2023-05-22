import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
    const isOpen = useSelector((store)=>store.isOpen)
    return ( <div className={`sidebar-container ${!isOpen&&"noHC"}`}>
        <Link to="/"> Home</Link>
        <Link to="/"> Subscriptions</Link>
        <Link to="/"> Dowloads</Link>
        <Link to="/"> Playlist</Link>
        <Link to="/"> Saved</Link>
    </div> );
}
 
export default SideBar;