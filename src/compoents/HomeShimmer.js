const HomeShimmer = () => {
    return (
        <div className="home_Shimmer_container video-container">
            {[...Array(12)].map((e)=>
            <div style={{display:"flex" ,gap:"20px",boxShadow:"none"}} className="home_shimmer_card videoCard">
                <div className="shimmer_color" style={{width:"100%",height:"175px",borderRadius:"15px"}}></div>
                <div className="shimmer_color" style={{width:"60%",height:"30px",borderRadius:"7px"}}></div>
                <div className="shimmer_color"style={{width:"40%",height:"20px",borderRadius:"5px"}}></div>
            </div>)}
        </div>
    );
}
 
export default HomeShimmer;