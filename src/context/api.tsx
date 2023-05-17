import axios from "axios"

//"https://youtubebackcopy.onrender.com"
//"http://localhost:4000/"

const api = axios.create({
    baseURL: "https://youtubebackcopy.onrender.com"
})

export default api
