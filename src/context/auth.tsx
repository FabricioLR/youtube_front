import { createContext, ReactNode, useState, useEffect } from "react"
import { Video } from "../storage/ducks/videos/types"
import api from "./api"

type User = {
    name: string
    foto_url: string
    id: string
    userVideos: Omit<Video, "user">[] | []
}

type AuthContextData = {
    user: User | null
    Register: Function
    Authenticate: Function
    SignOut: Function
    ChangeProfileImage: Function
}

type AuthProviderProps = {
    children: ReactNode
}

type RegisterData = {
    email: string
    name: string
    password: string
    navigate: Function
}

type AuthenticateData = {
    email: string
    name: string
    password: string
    navigate: Function
}

type AuthResponseData = {
    token: string
    user: {
        name: string
        foto_url: string
        id: string
        userVideos: Omit<Video, "user">[] | []
    }
}

type ChangeProfileImageData = {
    file: File
}

export const AuthContex = createContext({} as AuthContextData)

function AuthProvider(props: AuthProviderProps){
    const [ user, setUser ] = useState<User | null>(null)

    async function Register(data: RegisterData){
        try {
            const response = await api.post<AuthResponseData>("Register", data)

            if (response.status == 200){
                setUser({
                    name: response.data.user.name,
                    foto_url: response.data.user.foto_url,
                    id: response.data.user.id,
                    userVideos: []
                })
                sessionStorage.setItem("token", response.data.token)
                data.navigate("/")
            }
        } catch (error: any) {
            //alert(error.response.data.error)
        }
    }

    async function Authenticate(data: AuthenticateData){
        try {
            const response = await api.post<AuthResponseData>("Authenticate", data)

            if (response.status == 200){
                setUser({
                    name: response.data.user.name,
                    foto_url: response.data.user.foto_url,
                    id: response.data.user.id,
                    userVideos: response.data.user.userVideos
                })
                sessionStorage.setItem("token", response.data.token)
                data.navigate("/")
            }
        } catch (error: any) {
            //alert(error.response.data.error)
        }
    }

    useEffect(() => {
        if (user == null && sessionStorage.getItem("token") != "" && sessionStorage.getItem("token") != undefined){
            VerifyToken()
        }
    }, [])

    function SignOut(){
        setUser(null)
        sessionStorage.removeItem("token")
    }

    async function VerifyToken(){
        try {
            const response = await api.get<Omit<AuthResponseData, "token">>("AuthenticateByToken", {
                headers: {
                    token: sessionStorage.getItem("token")
                }
            })

            if(response.status == 200){
                setUser({
                    name: response.data.user.name,
                    foto_url: response.data.user.foto_url,
                    id: response.data.user.id,
                    userVideos: response.data.user.userVideos
                })
            }
        } catch(error) {
            console.log(error)
        }
    }

    async function ChangeProfileImage(data: ChangeProfileImageData){
        const formData = new FormData()
        formData.append("file", data.file)
        
        try {
            const response = await api.post<Omit<AuthResponseData, "token">>("ChangeUserImage", formData, {
                headers: {
                    token: sessionStorage.getItem("token")
                }
            })

            if (response.status == 200){
                setUser({
                    name: response.data.user.name,
                    foto_url: response.data.user.foto_url,
                    id: response.data.user.id,
                    userVideos: response.data.user.userVideos
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContex.Provider value={{ user, Register, Authenticate, SignOut, ChangeProfileImage }}>
            {props.children}
        </AuthContex.Provider>
    )
}

export default AuthProvider