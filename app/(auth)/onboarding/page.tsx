
import AccountProfile from "@/Components/forms/AccountProfile"
import React  from  "react"
import {currentUser} from  "@clerk/nextjs"



async function MainPage(){
const  user = await currentUser()
const  email  =  user?.emailAddresses?.map((mail)=>mail.emailAddress)
    

    const userData = {
        email:email
    }
   

    return (
       <AccountProfile user = {userData} btnTitle = "Continue" />
    )
    }

    export default MainPage