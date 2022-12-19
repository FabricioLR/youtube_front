import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import Loading from "../../../components/loading/Loading"
import { AuthContex } from "../../../context/auth"
import style from "./signin.module.css"

function SignIn(){
    const [ show, setShow ] = useState("password")
    const [ password, setPassword ] = useState("")
    const [ email, setEmail ] = useState("")
    const [load, setLoad] = useState(false)
    const { Authenticate } = useContext(AuthContex)
    const navigate = useNavigate()

    function showPassword(e: any){
        if (e.target.checked){
            setShow("text")
        } else {
            setShow("password")
        }
    }

    async function signIn(){
        setLoad(true)
        await Authenticate({
            email,
            password,
            navigate
        })
        setLoad(false)
    }

    return(
        <>
            <div id={style.signin}>
                <form id={style.form} onSubmit={(e) => {e.preventDefault(); signIn()}}>
                    <Loading active={load}/>
                    <p>Bem Vindo de Volta</p>
                    <div id={style.email}>
                        <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div id={style.password}>
                        <input type={show} placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div id={style.check}>
                        <input type="checkbox" value="on" onChange={(e) => showPassword(e)}/> 
                        <label htmlFor="">Show</label>
                    </div>
                    <input type="submit" value="Sing In" id={style.submit}>
                    </input>
                </form>
            </div>
        </>
    )
}

export default SignIn