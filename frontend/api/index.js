import axios from "axios";

const api = axios.create({
 
    baseURL: "https://medkit-backend.vercel.app/",
})

export default api;