import React from "react"


export default function ArticleLayout({children}:{children:React.ReactNode}){

        return (
            <div className =  "bg-gray-300/10 relative">
                {children}
            </div>
        )
}