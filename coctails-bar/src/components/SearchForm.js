import {AppContext} from "../context";
import {useContext} from "react"

export const SearchForm =()=>{
    const { setSearchTerm} = useContext(AppContext)

    return (
        <div>Search</div>
    )
}