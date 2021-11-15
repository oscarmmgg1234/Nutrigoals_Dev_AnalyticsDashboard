import axios from "axios";

class Auth_Server {
    constructor(){
        let request = axios.create({baseURL: "http://34.216.10.88:5006", responseType: 'json',})
        this.request = request;
    }
     Validate = async (username,password) =>{
        if(username != null && password != null){
        let result = false
        await this.request.get("/auth" ,{headers: {"username"  : username, "password" : password, "content-type": "application/json"}}).then((res)=>{result = (res.data.authorized === 'true')}) 
        return result
        }
    }
}

class Admin_Server {
    constructor(){
        let request = axios.create({baseURL: "http://34.216.10.88:5007", responseType: 'json',});
        this.request = request;
    }
    
}

export {Admin_Server, Auth_Server}
