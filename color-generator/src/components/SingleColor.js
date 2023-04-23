export const SingleColor =({index, color}) =>{
    const{hex, weight} = color
    return(
        <article className={index > 10 ? "single": "color"} style={{background: `#${hex}`}}>
        <p className="percent">{weight}%</p>
        <p className="hex">#{hex}</p>
        </article>
    )
}