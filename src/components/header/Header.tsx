import { useContext, useState } from "react"
import style from "./header.module.css"
import styleProfile from "../profile/profile.module.css"
import { AuthContex } from "../../context/auth"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { SearchTypes } from "../../storage/ducks/search/types"
import { FaSistrix } from "react-icons/fa"
import ProfileImage from "../profileImage/ProfileImage"

function Header(){
    const [search, setSearch] = useState("")
    const { user } = useContext(AuthContex)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function profile(){
        document.getElementById(styleProfile.profile)?.classList.toggle(styleProfile.activeProfile)
    }

    function Search(){
        if (search != ""){
            dispatch({ type: SearchTypes.SEARCH_REQUEST, payload: { title: search, navigate }})
        }
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
                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} onKeyUp={(key) => {
                        if(key.key == "Enter"){
                            Search()
                        }
                    }}/>
                    <div onClick={Search}>
                        <FaSistrix/>
                    </div>
                </div>
                <div id={style.searchMenu}>
                    <FaSistrix/>
                </div>
                <ProfileImage divStyle={{cursor: "pointer"}} src={user?.profileImage ? user?.profileImage : ""} onClick={profile}/>
            </div>
        </header>
    )
}

export default Header