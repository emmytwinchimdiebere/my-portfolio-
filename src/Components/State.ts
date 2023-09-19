import {create } from "zustand"


type storeProps = {
    isOpen :boolean
    onclose: ()=>void,
    onOpen:()=>void,
}

export const createStore = create<storeProps>()((set)=>({
    isOpen:true,
    onclose: ()=>set((state)=>({isOpen:!state.isOpen})),
    onOpen: ()=>set((state)=>({isOpen:state.isOpen})),
}))