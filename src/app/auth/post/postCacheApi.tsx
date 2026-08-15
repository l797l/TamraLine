"use server";

import { unstable_cache } from "next/cache";
import api from "../axios";

export function postApi (page:number){
   return unstable_cache( 
  async()=>{
    console.log("🔥 API CALLED - page:", page);

  const result = await api.post("Post/GetAllPost", {
    pageNumber: page,
    pageSize: 5,
  });

  return result.data;
},
[`AllPost_${page}`],{
  revalidate:86400,
  tags:["Posts"]
  })();
}