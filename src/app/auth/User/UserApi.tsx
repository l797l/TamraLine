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
    
    return result.status;
  } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    console.log(error.response?.data);
  } else {
    console.log("حدث خطأ غير متوقع");
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