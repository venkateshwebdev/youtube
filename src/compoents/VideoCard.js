import { Link } from "react-router-dom";
const VideoCard = ({data})=>{
    return(
        <Link to={`/watch/${data.id}`}>
                <div className="videoCard">
                {console.log("this is the rendderd data ")}
                <img src={data?.snippet?.thumbnails?.medium?.url}/>
                <div style={{padding:"0px 10px"}}>
                <p className="titlesee">{data?.snippet?.title.slice(0,70)}</p>
                <p>{Math.round(data?.statistics?.viewCount/100000) + "M views"}</p>
                </div>
            </div></Link>
    )
}

export default VideoCard;