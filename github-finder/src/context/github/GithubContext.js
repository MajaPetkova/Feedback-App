import { createContext, useState } from "react";

export const GithubContext= createContext();
// const url= "https://api.github.com/users";

export const GithubProvider = ({children}) =>{
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers= async() =>{
        const res= await fetch("https://api.github.com/users")
        const data=await res.json();
       setUsers(data)
       setLoading(false)
     }
  
     return <GithubContext.Provider value ={{users, loading , fetchUsers} }>
        {children}
     </GithubContext.Provider>
}