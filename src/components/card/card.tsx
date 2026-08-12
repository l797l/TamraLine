import React from 'react'
import data from "../../app/auth/post/postApi"
 
 async function card() {
  
    const response = await data ( )
    console.log(response)

 


  return (
    <>
  <h1>
   {response[0].fullName
}
  </h1>
    </>
  )
}

export default card