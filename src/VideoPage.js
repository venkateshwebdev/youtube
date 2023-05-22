import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SideBar from "./compoents/SideBar";
import { API_KEY } from "./helper";
    // AIzaSyDL-CdOOwHs9m6ZZDjmmyJvxV9zDxnhn7Q
const VideoPage = (props) => {
    const [videoData,setVideoData] = useState();
    const param = useParams()
    useEffect(()=>{
        getData();
    },[])
    const getData = async()=>{
        const rawdata = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${param.id}&key=${API_KEY}`)
        const data = await rawdata.json()
        console.log(data)
        setVideoData(data.items[0])
    }

    return ( 
    <div className="video-page-container">
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${param.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h3>{videoData?.snippet?.title}</h3>
        </div>
     );
}
 
export default VideoPage;