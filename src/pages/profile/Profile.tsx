import { useContext, useState } from "react"
import { AuthContex } from "../../context/auth"
import ProfileImage from "../../images/profile.png"

function Profile(){
    const { user, ChangeProfileImage } = useContext(AuthContex)
    const [file, setFile] = useState(null)

    async function ChangeImage(){
        await ChangeProfileImage({ file })
    }

    return (
        <>
            {
                user ? 
                    <div>
                        <div>
                            <img src={user.foto_url == "" ? ProfileImage : user.foto_url} alt="" />
                        </div>
                        <div>
                            <form onSubmit={(e) => {e.preventDefault(); ChangeImage()}}>
                                <div>
                                    <label>Select profile image</label>
                                    <input type="file" onChange={(e: any) => setFile(e.target.files[0])} required/>
                                </div>
                                    <input type="submit" value="Save"/>
                            </form>
                        </div>
                    </div>
                    :
                    <div>Please, sign in</div>
            }
        </>
    )
}

export default Profile