import spinner from "../assets/jpg/loading.gif"

export const Spinner =()=>{
    return (
        <div className="spinner-container">
           <img src={spinner} alt="loading..." />
        </div>
    )
}