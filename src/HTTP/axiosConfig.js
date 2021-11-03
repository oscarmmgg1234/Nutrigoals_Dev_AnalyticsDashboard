import axios from "axios";


export default class Server {
    constructor(){
        let request = axios.create({baseURL: "http://localhost", responseType: JSON})
        this.request = request;
    }
    GET = (endPoint, data) => {
        this.request.get(endPoint, data).then((res)=>{return res.data}) 
    }
    POST = (endPoint, data) => {
        this.request.get(endPoint, data).then((res)=>{return res.data}) 
    }

    
    
}

