const SearchResultShimmer = () => {
    return ( 
        <div className="search_shimmer_container search_result_container">
            {[...Array(10)].map((e)=>
            <div className="search_shimmer_card search_result">
                <div className="shimmer_color" style={{height:"170px",width:"33%",margin:"0% 0% 0% 6%",borderRadius:"15px"}}></div>
                <div style={{width:"80vw",display:"flex",flexDirection:"column",gap:"20px"}}>
                <div className="shimmer_color" style={{height:"30px",width:"60%",borderRadius:"7px"}}></div>
                <div className="shimmer_color" style={{height:"20px",width:"15%",borderRadius:"5px"}}></div>
                <div className="shimmer_color" style={{height:"20px",width:"80%",borderRadius:"6px"}}></div>
                </div>
                
            </div>)}
        </div>
     );
}
 
export default SearchResultShimmer;