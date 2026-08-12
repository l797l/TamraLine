import React from 'react'
import Api from "../axios"
async function  postApi() {
  const result = await Api.post("Post/GetAllPost" , {
    pageNumber : 1,
    pageSize:5
})
return result.data 
}

export default postApi