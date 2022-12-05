import { useContext, useEffect } from "react"
import { AuthContex } from "../../../context/auth"

function SignOut(){
    const { SignOut } = useContext(AuthContex)

    useEffect(() => {
        SignOut()
    }, [])
    return(
        <div>
            "Success on sign out"
        </div>
    )
}

export default SignOut