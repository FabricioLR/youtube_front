import { useContext } from "react"
import { AuthContex } from "../../context/auth"
import { Link } from "react-router-dom"
import style from "./profile.module.css"

function Profile(){
    const { user } = useContext(AuthContex)

    return(
        <div id={style.profile}>
            {
            user == null ?
                <>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                </>
            :
                <>
                    <Link to="/profile">Profile</Link>
                    <Link to="/upload">Upload</Link>
                    <Link to="/signout">Sign Out</Link>
                </>
            }
        </div>
    )
}

export default Profile