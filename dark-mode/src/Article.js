import moment from "moment"

export const Article =({...x}) =>{
    return (
        <article className="article">
            <h3>{x.title}</h3>
            <div className="info">
            <span>{moment(x.date).format("dddd Do, YYYY")}</span>
            <span>{x.length} min. read</span>
            </div>
            <p>{x.snippet}</p> 
        </article>
    )
}