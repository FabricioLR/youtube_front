import { useSelector } from "react-redux"
import Header from "../../components/header/Header"
import Profile from "../../components/profile/profile"
import SearchedVideo from "../../components/video/SearchedVideo/SearchedVideo"
import { SearchState } from "../../storage/ducks/search/types"

type StateData = {
    search: SearchState
}

function Search(){
    const State = useSelector(state => state) as StateData
    return(
        <>
            <Header/>
            <Profile/>
            <div>
                {
                    State.search.data.map(video => <SearchedVideo video={video}/>)
                }
            </div>
        </>
    )
}

export default Search