import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { API_KEY } from "./helper";
import { Link } from "react-router-dom";
import SearchResultShimmer from "./compoents/SearchResultShimmer";
const SearchBlock = (props) => {
    return (<div className="search_result">
        <div><img src ={props.con?.snippet?.thumbnails?.medium?.url}/></div>
        <div className="search_result_data">
            <p className="titlese">{props.con?.snippet?.title}</p>
            <div style={{display:"flex",alignItems:"center",gap:"20px"}}><p className="titlesee">{props.con?.snippet?.channelTitle}</p><p>published 3 months ago</p></div>
            <p>{props.con?.snippet?.description}</p>
        </div>
        </div>
    );
}
const SearchResults = () => {
    const param = useParams()
    const [srData,setSrData] = useState([])
    console.log(param)
    useEffect(()=>{
        getData()
    },[param])
    const getData=async()=>{
        const rawData = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${param.id}&videoCaption=any&key=${API_KEY}`)
        const data = await rawData.json()
        console.log(data)
        setSrData(data.items)
    }
    return (
        !srData[0]?<SearchResultShimmer />:
    <div className="search_result_container">
            {srData?.map((data)=><Link to={`/watch/${data?.id.videoId?data?.id.videoId:data?.id.channelId}`}><SearchBlock con={data}/></Link>)}
    </div> );
}
 
export default SearchResults;

