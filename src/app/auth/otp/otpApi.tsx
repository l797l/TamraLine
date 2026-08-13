import api from "../axios";

export async function SendCodeApi(phoneNumber:string){
     const result= await api.get(`otp/Createotp/${phoneNumber}`)
     
    return result
}

export async function CheckOtpApi(phoneNumber:string, otp:string){
     const result= await api.post(`otp/Checkotp`,
       {
         phoneNumber,
         otp
       }
     )
     
    return result
}