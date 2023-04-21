export const BtnContainer =({jobs, currentItem, setCurrentItem})=>{
return (
<div className="btn-container">
{jobs.map((x, index)=>{
    return <button onClick={()=> setCurrentItem(index)} key={x.id} className={index===currentItem ? "btn-active" : "job-btn"}>{x.company}</button>
})}
</div>
)
}