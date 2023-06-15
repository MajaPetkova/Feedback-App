import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import { CreateUser } from "./CreateUser";
import { UpdateUser } from "./UpdateUser";


export const AppRouter =() =>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/create" element={<CreateUser/>}/>
        <Route path="/update/:id" element={<UpdateUser/>} />
        </Routes>
        </BrowserRouter>
    )
}