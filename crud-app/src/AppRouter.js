import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import { CreateUser } from "./CreateUser";


export const AppRouter =() =>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/create" element={<CreateUser/>}/>
        </Routes>
        </BrowserRouter>
    )
}