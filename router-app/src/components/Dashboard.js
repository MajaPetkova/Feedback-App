export const Dashboard =({user}) =>{
    return(
        <section>
            <h4>Hello, {user?.name}</h4>
        </section>
    )
}