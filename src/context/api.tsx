import axios from "axios"

//"https://youtubeback-lm98.onrender.com/"
//"http://localhost:4000/"

const api = axios.create({
    baseURL: process.env.NODE_ENV == "development" ? "http://localhost:4000/" : "https://youtubeback-lm98.onrender.com/"
})

export default api
