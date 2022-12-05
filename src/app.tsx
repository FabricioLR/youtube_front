import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/home/Home"
import SignIn from "./pages/auth/signin/SignIn"
import SignUp from "./pages/auth/signup/Signup"
import Upload from "./pages/upload/Upload"
import SignOut from "./pages/auth/signout/SignOut"
import Profile from "./pages/profile/Profile"

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/upload" element={<Upload/>}/>
                <Route path="/signout" element={<SignOut/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App