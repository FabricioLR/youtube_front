import style from "./loading.module.css"

type LoadingData = {
    active: boolean
}

function Loading(data: LoadingData){
    return(
        <>
            {
                data.active ?
                    <div id={style.localLoading}>
                        <div id={style.loader}></div>
                    </div>
                :
                    <></>
            }
        </>
    )
}

export default Loading