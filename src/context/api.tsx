import axios from "axios"

//"https://youtubebackcopy.onrender.com"
//"http://localhost:80/"

const api = axios.create({
    baseURL: "http://localhost:80/"
})

export default api