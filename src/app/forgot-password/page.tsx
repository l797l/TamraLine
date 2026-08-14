"use client";

import {  useState } from "react";
import TelegramInstructions from "./components/TelegramInstructions";
import PhoneForm from "./components/PhoneForm";
import VerifyCodeForm from "./components/VerifyCodeForm";
import ResetPasswordForm from "./components/ResetPasswordForm";
import { CheckOtpApi, SendCodeApi } from "../auth/otp/otpApi";
import axios from "axios";

type Step = 1 | 2 | 3 | 4;

export default function ForgotPassword() {
  const [step, setStep] = useState<Step>(1);
  const [phone, setPhone] = useState("07");
  const [code, setCode] = useState("");
  const [loading,setLoading] = useState(false)
  const [messageErrorToCheck,setMessageErrorToCheck] = useState("")
  const [messageErrorToSend,setMessageErrorToSend] = useState("")


  const sendCodeOtp= async()=>{

    try{
       setLoading(true)
       const result = await SendCodeApi(phone);
       setStep(3)

    }
    catch(error:unknown){
      if(axios.isAxiosError(error))
         setMessageErrorToSend(
        error.response?.data?.message ?? "هناك خطا في الكود"
        
      ); 
             setStep(3)

        
    }finally{
       setLoading(false)

    }
     

   
  }

  const CheckCodeOtp= async()=>{

    try{
    setLoading(true)
   const result = await CheckOtpApi(phone,code);  

    if(result.status <300)
      setStep(4)
   
    }catch(error:unknown){
      if(axios.isAxiosError(error))
 setMessageErrorToCheck(
        error.response?.data?.message ?? "هناك خطا في الكود"
      );    }
    finally{
       setLoading(false);

    }
   
  }

  

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#EFE1D1] px-5">
      <div
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
        
      >
        {step === 1 && (
          <TelegramInstructions
            onNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <PhoneForm
            phone={phone}
            setPhone={setPhone}
            onNext={sendCodeOtp}
            loading = {loading}
            messageError={messageErrorToSend}
          />
        )}

        {step === 3 && (
          <VerifyCodeForm
            code={code}
            setCode={setCode}
            onNext={CheckCodeOtp}
            loading = {loading}
            messageError={messageErrorToCheck}

          />
        )}

        {step === 4 && (
          <ResetPasswordForm
            phone={phone}
            code={code}
            
          />
        )}
      </div>
    </main>
  );
}