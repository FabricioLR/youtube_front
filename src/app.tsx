import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/home/Home"
import SignIn from "./pages/auth/signin/SignIn"
import SignUp from "./pages/auth/signup/Signup"
import Upload from "./pages/upload/Upload"
import Profile from "./pages/profile/Profile"
import Watch from "./pages/watch/Watch"
import Search from "./pages/search/Search"
import PublicProfile from "./pages/publicProfile/PublicProfile"
import Historic from "./pages/historic/Historic"

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/upload" element={<Upload/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/watch" element={<Watch/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/publicProfile" element={<PublicProfile/>}/>
                <Route path="/historic" element={<Historic/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App