import { useContext, useState } from "react"
import style from "./header.module.css"
import styleProfile from "../profile/profile.module.css"
import { AuthContex } from "../../context/auth"
import ProfileImage from "../../images/profile.png"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { SearchTypes } from "../../storage/ducks/search/types"
import { FaSistrix } from "react-icons/fa"

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
            dispatch({ type: SearchTypes.LOAD_REQUEST, payload: { title: search, navigate }})
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