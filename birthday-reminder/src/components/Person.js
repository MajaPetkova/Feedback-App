export const Person =({people})=>{
    return(
      <article className="person">
      <img src={people.image} alt="name"  className="img"/>
      <div>
        <h4>{people.name}</h4>
        <p>{people.age}</p>
      </div>
      </article>
    )
}