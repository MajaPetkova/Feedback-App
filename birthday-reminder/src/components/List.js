import { Person } from "./Person"

export const List =({people, clearHandler})=>{
    
    return(
      <section>
        {people.map((x)=>{
            return <Person key={x.id} people={x}/>
        }
        )}
          <button onClick={clearHandler}>Clear all</button>
      </section>
    )
}