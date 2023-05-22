import {useDispatch, useSelector} from "react-redux"
import ToogleSlice from "../ToogleSlice"
import { changeOnCLick } from "../ToogleSlice"
import { useContext, useEffect, useRef, useState } from "react"
import ModeContext from "../ModeContext"
import { Link } from "react-router-dom"
import { useOutsideAlerter } from "../hooks/useOutsideClick"
const Header = () => {
    const [searchInput,setSearchInput] = useState("")
    const [searchData,setSearchData] = useState([])
    const [searchDataVisable,setSearchDataVisable] = useState(false)
    const cntxt = useContext(ModeContext)

    console.log("cntxt ", cntxt)
    const myRef = useRef();
    useOutsideAlerter(myRef, () => {
        setSearchDataVisable(false)
    });
    const dispatch = useDispatch()
    const handleMenuClick=()=>{
        dispatch(changeOnCLick())
    }
    const handleMode = ()=>{
        cntxt?.setPageMode((prev)=>!prev)
    }
    useEffect(()=>{
        const timer = setTimeout(()=>getS(),200)
        return()=>(
            clearTimeout(timer)
        )
    },[searchInput])
    const getS = async()=>{
        const rawData = await fetch(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchInput}`)
        const data = await rawData.json()
        console.log(data[1])
        setSearchData(data[1])
    }
    return ( <>
    <div className={`header-container`}>
    <div onClick={handleMenuClick} style={{cursor:"pointer",fontSize:"22px"}}>☰</div>
        {/* <img onClick={handleMenuClick} className="menu" src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"/> */}
        {/* <h3>Karthika</h3> */}
        <img className="logo" src="https://tse1.mm.bing.net/th?id=OIP.24tVO_vZawqqsC7nvmW1XgHaEK&pid=Api&P=0"/>
        <div className="search" ref={myRef}>
            <input  type="text" placeholder="Search...." onChange={(e)=>setSearchInput(e.target.value)} onFocus={()=>setSearchDataVisable(true)}  value={searchInput}/>
            <div className="search_image"><img style={{height:"30px"}} src="https://e7.pngegg.com/pngimages/770/106/png-clipart-computer-icons-search-box-magnifying-glass-search-for-miscellaneous-desktop-wallpaper-thumbnail.png" /></div>
            <div onClick={()=>setSearchDataVisable(false)}  className={`auto-suggetion-data ${searchDataVisable&&"showME"}`}>{searchData?.map((e)=><Link to={`/search/${e}`}><p>{e}</p></Link>)}</div>
        </div>
        <div style={{cursor:"pointer",fontSize:"22px"}} onClick={handleMode}>👁</div>
        <div style={{cursor:"pointer",fontSize:"18px"}}>👤</div>
{/* 
        <img className="user" src="https://tse4.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&P=0"/> */}
    </div>
    </> );
}
 
export default Header;