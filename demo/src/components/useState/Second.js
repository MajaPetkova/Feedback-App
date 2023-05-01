import { useState } from "react"

export const Second =()=>{
    const [person, setPerson] = useState({
        name:"peter",
        age:32,
        hobby: "fitness"
    })
    // const[age, setAge] = useState(32);
    // const [hobby, setHobby] = useState( "fitness");

    const displayPerson=()=>{
    setPerson({...person,
        name:"john",
        // age:42,
        // hobby: "book"
    })
    }
    return (
        <div>
            <h2>UseState Object Example</h2>
            <h3>{person.name}</h3>
            <h4>{person.age}</h4>
            <h4>{person.hobby}</h4>
            <button onClick={displayPerson}>next person</button>
        </div>
    )
}