import React from "react";
import { useRouteError } from "react-router-dom";

export const ShimmerLoad =()=>{
    const err = useRouteError();
    console.log(err);

    return (
    <div className="container text-center">
        <h1>{err?.status}</h1>
        <h1>Route {err?.statusText}</h1>
        <h1>Durgesh is working on it</h1>
        <div className="spinner-border" role="status"></div>
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