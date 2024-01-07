import React from "react";
import { useRouteError } from "react-router-dom";

// import Box from '@mui/material/Box';
// import Skeleton from '@mui/material/Skeleton';

// export default function Shimmer() {
//   return (
//     <Box sx={{ width: 300 }}>
//       <Skeleton />
//       <Skeleton animation="wave" />
//       <Skeleton animation={false} />
//     </Box>
//   );
// }


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






const CardShimmer = () => {
    return (
      <div className="shimmer-card">
        <div className="shimmer-img stroke animate"></div>
        <div className="shimmer-title stroke animate"></div>
        <div className="shimmer-tags stroke animate "></div>
        <div className="shimmer-details stroke animate "></div>
      </div>
    );
  };
  
  const Shhimmer = () => {
    return (
      <div className="shimmer-container">
        {new Array(20).fill(0).map((element, index) => {
          return <CardShimmer key={index} />;
        })}
      </div>
    );
  };
  export default Shhimmer;

// const Shhimmer = ()=>{
//     return (
    
//     <div className="container card-list">
//         {new Array(20).fill(0).map((e , index)=><ShimmerLoad key={index} className="shimmer-card"></ShimmerLoad>)}
//     </div>
//     );
// }
// export default Shhimmer;