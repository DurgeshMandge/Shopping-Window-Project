import React from "react";

export const ShimmerLoad =()=>{
    return (
    <div class="container text-center">
        <span class="sr-only">Wait...</span>
        <div class="spinner-border" role="status"></div>
    </div>
    );
}

const Shhimmer = ()=>{
    return (
    
    <div className="container card-list">
        {Array(20).fill("").map((e , index)=><div key={index} className="shimmer-card"></div>)}
    </div>
    );
}
export default Shhimmer;