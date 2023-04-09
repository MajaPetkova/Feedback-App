import { Person } from "./Person"

export const List =({people})=>{
    return(
      <section>
        {people.map((x)=>{
            return <Person key={x.id} people={x}/>
        }
        )}
      </section>
    )
}