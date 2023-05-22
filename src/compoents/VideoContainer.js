import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import { API_KEY } from "../helper";
import HomeShimmer from "./HomeShimmer";
const VideoContaier = () => {
    const [imageData,setImageData] = useState([])
    console.log("lorem ipsum : " + imageData)
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        const rawData = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`)
        const data = await rawData.json()
        console.log(data)
        setImageData(data.items)
        console.log(imageData)
    }
    // return(
    //     <HomeShimmer />
    // )
    return(
        !imageData[0]?(<HomeShimmer/>)
        : (
            <div className="video-container">
                {imageData?.map((e)=><VideoCard data={e}/>)}
        
            </div> )
    )
    

}
 
export default VideoContaier;