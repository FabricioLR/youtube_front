import { useContext, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import Header from "../../components/header/Header"
import Profile from "../../components/profile/profile"
import HistoricVideo from "../../components/video/historicVideo/HistoricVideo"
import { AuthContex } from "../../context/auth"
import { HistoricState, HistoricTypes } from "../../storage/ducks/historic/types"
import style from "./historic.module.css"

type StateData = {
    historic: HistoricState
}

function Historic(){
    const State = useSelector(state => state) as StateData
    const dispatch = useDispatch()
    const { user } = useContext(AuthContex)

    useEffect(() => {
        dispatch({ type: HistoricTypes.GET_HISTORIC_REQUEST})
    }, [])

    function Clear(){
        dispatch({ type: HistoricTypes.CLEAR_HISTORIC_REQUEST })
    }

    return(
        <>
            <Header/>
            <Profile/>
            {
                user ? 
                    <div id={style.div}>
                        <div id={style.clearHistoric}>
                            <button onClick={Clear}>Clear Historic</button>
                        </div>
                        <div id={style.videos}>
                            {State.historic.data?.videos.map(video => <HistoricVideo video={video}/>)}
                        </div>
                    </div>
                    
                :
                    <div>please, sign in</div>
            }
        </>
    )
}

export default Historic