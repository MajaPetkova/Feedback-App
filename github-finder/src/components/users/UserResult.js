import { useEffect, useState } from "react"

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
                    <h3>{x.login}</h3>
                ) )}
            </div>
        )
    }else{
      return <h3>Loading...</h3>  
    }
  
}