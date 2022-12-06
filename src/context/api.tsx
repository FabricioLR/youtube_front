import axios from "axios"

//https://apiparateste.pagekite.me/
//"http://localhost:3300/"

const api = axios.create({
    baseURL: "https://apiparateste.pagekite.me/"
})

export default api