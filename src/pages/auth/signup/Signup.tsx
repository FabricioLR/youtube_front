import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContex } from "../../../context/auth"
import style from "./signup.module.css"

function SignUp(){
    const [ show, setShow ] = useState("password")
    const [ password, setPassword ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ name, setName ] = useState("")
    const { Register } = useContext(AuthContex)
    const navigate = useNavigate()

    function showPassword(e: any){
        if (e.target.checked){
            setShow("text")
        } else {
            setShow("password")
        }
    }

    async function signUp(){
        await Register({
            email,
            password,
            name,
            navigate
        })
    }

    return(
        <div id={style.signup}>
            <form id={style.form} onSubmit={(e) => {e.preventDefault(); signUp()}}>
                <p>Bem Vindo</p>
                <div id={style.name}>
                    <input type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)}/>
                </div>
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
                <input type="submit" value="Sing Up" id={style.submit}/>
            </form>
        </div>
    )
}

export default SignUp