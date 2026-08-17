import { setToken } from "../auth";
import api from "../axios";
import { LoginDto, RegisterDto } from "./UserDto";
import axios from "axios";

export const loginApi = async (dto: LoginDto) => {


  try {
    const result = await api.post("User/login", dto);
    
    
    if(result.data.token){
        setToken(result.data.token)
        localStorage.setItem("userId", result.data.userId);
      }
    
    return result;
  } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
  } else {
  }
}
  };

  export const registerApi = async (dto: RegisterDto) => {


  try {
    const result = await api.post("User/register", dto);
    
    return result.status;
  } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    console.log(error.response?.data);
  } else {
    console.log("حدث خطأ غير متوقع");
  }
}
  };

  export const GetUser=  async()=>{
    try{
      const result = await api.get("User/GetInformationUser")
      return result.data
    }catch(error:unknown){
       if (axios.isAxiosError(error)) {
    console.log(error.response?.data);
    }
    else {
    console.log("حدث خطأ غير متوقع");
  }
      throw error;
  }}

  export const UpdateUser= async(fullName:string , phoneNumber:string , gender:number)=>{
    try{
      const result = await api.put("User/UpdateUser",{
        fullName,
        phoneNumber,
        gender
      })
      return result.data
    }catch(error:unknown){
       if (axios.isAxiosError(error)) {
    console.log(error.response?.data);
    }
    else {
    console.log("حدث خطأ غير متوقع");
  }
      throw error;
  }}


  export const UpdatePasswordApi= async(phoneNumber:string,password:string)=>{
    const result = await api.patch("User/ForgotPassword", {
      phoneNumber,
      password
    })
    return result
    
  }