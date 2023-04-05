import { useEffect, useContext } from "react"
import { Spinner } from "../layout/Spinner";
import { UserItem } from "./UserItem";
import { GithubContext } from "../../context/github/GithubContext";

export const UserResult = () =>{
   const {fetchUsers, loading, users} = useContext(GithubContext)
    useEffect(()=>{
       fetchUsers()
    },[]);
   
    if(!loading) {
        return(
            <div className="users">
                {users.map(x=> (
                    <UserItem key={x.id} user={x}/>
                ) )}
            </div> 
        )
    }else{
      return <Spinner/> 
    }
  
}