import { useContext, useState } from "react"
import style from "./header.module.css"
import styleProfile from "../profile/profile.module.css"
import { AuthContex } from "../../context/auth"
import ProfileImage from "../../images/profile.png"
import { Link } from "react-router-dom"

function Header(){
    const { user } = useContext(AuthContex)
    function profile(){
        document.getElementById(styleProfile.profile)?.classList.toggle(styleProfile.activeProfile)
    }

    return(
        <header id={style.header}>
            <div id={style.container}>
                <Link to="/">
                    <div id={style.logo}>
                        <img src="" alt="" />
                    </div>
                </Link>
                <div id={style.search}>
                    <input type="text" name="" id="" />
                    <div>
                        <span>S</span>
                    </div>
                </div>
                <div id={style.searchMenu}>
                    <span>S</span>
                </div>
                { user ?
                    <div id={style.profile} onClick={profile}>
                        <img src={user.foto_url == "" ? ProfileImage : user.foto_url} alt="" />
                    </div>
                    :
                    <div id={style.profile} onClick={profile}>
                        <img src={ProfileImage} alt="" />
                    </div>
                }
                
            </div>
        </header>
    )
}

export default Header