import { AppContext } from "../context"
import {useContext} from "react";
import { Loading } from "./Loading";


export const CocktailList = () =>{
    const {loading, cocktails} = useContext(AppContext);

    if(loading) {
        return <Loading/>
    }
    if(cocktails.length < 1){
       return <h2 className="no-found">no cocktails mached your search criteria</h2>
    }
    return (
        <section className="">
         
   
        </section>
    )
}