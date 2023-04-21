import spinner from "./assets/spinner.gif"

export const Loading =()=>{
    return(
        <div className="loading">
            <img src={spinner} alt="loading..." />
        </div>
    )
}