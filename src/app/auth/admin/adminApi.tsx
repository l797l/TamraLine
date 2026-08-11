import api from "../axios";

export async function getPostsStatus() {
    const result = await api.get("Post/GetStatusAdmin")
    return result.data
}

export async function updateStatus(status:number , phoneNumber:string){
    const result = await api.post("Post/UpdateStatus",{status , phoneNumber})
    return result
}