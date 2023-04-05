import { useEffect, useState } from "react"
import { Spinner } from "../layout/Spinner";
import { UserItem } from "./UserItem";

export const UserResult = () =>{
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
       fetchUsers()
    },[]);

    const fetchUsers= async() =>{
       const res= await fetch("https://api.github.com/users")
       const data=await res.json();
      setUsers(data)
      setLoading(false)
    }


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