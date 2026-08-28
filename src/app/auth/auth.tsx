

export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  
  const json =localStorage.getItem("token"); 
  
  if(json){
   const data = JSON.parse(json);
  if(Date.now() > data.Time){
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("GetProfile")
    }
    else
      return data.token


  }
        return null
}

export function setToken(token: string) {
  if (typeof window !== "undefined") {
    const data = {
      token: token,
      Time : Date.now()+7*24*60*60*1000
    }
    localStorage.setItem("token", JSON.stringify(data));
  }
}

export function removeToken() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
}