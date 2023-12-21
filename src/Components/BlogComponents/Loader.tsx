import React from "react"
import Backdrop from '@mui/material/Backdrop';
import {InfinitySpin} from "react-loader-spinner";




export default function PostLoader({loader}:any){
    return(
        <Backdrop className="flex flex-col gap-5"
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open = {loader}
      
      >
        <span className = "font-light">wait your post is being processed... </span>
        <InfinitySpin width='200' color="#4fa94d"/> 
    
      </Backdrop> 
    )
}