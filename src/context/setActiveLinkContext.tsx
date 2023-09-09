"use client"
import React, { useState, useContext, createContext} from 'react';
import { setActiveSectionProps } from '@/types/types';
import { ActiveLinkProps } from '@/types/types';
import { ActiveLinkStateProps } from '@/types/types';



 const ActiveSectionContext =  createContext<setActiveSectionProps | null>(null)

const SetActiveLinkContextProvider = ({children}:ActiveLinkProps) => {
    const [activeLink, setActiveLink] = useState<ActiveLinkStateProps>("Home");
    const [lastTimeLinkClicked, setLastTimeLinkClicked]  = useState(0);


  
    return (
        <ActiveSectionContext.Provider value={{
            activeLink: activeLink,
            setActiveLink:setActiveLink,
            lastTimeLinkClicked:lastTimeLinkClicked,
            setLastTimeLinkClicked:setLastTimeLinkClicked 
        }}>
        {children}
      </ActiveSectionContext.Provider>
    )
}

export default SetActiveLinkContextProvider;

export const useActiveSectionProvider = ()=>{
    const context = useContext(ActiveSectionContext);

    if(context  === null){
        throw new Error ("the contect provider cannot  be used outside the provider components");
       }

       return context 
}