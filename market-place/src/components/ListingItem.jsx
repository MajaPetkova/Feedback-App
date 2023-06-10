import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";


export const ListingItem = ({ x, id }) => {
  return <div className="category-listing-item">
  <Link to={`/category/${x.type}/${id}`} className="category-listing-link">
    <img src={x.imageUrls[0]} alt={x.name} className="categoryListing-img"/>
    <div className="categoryListingDetails">
        <p className="categoryListingLocation">{x.location}</p>
        <p className="categoryListingName">{x.name}</p>
        <p className="categoryListingPrice">${x.offer ? x.discountedPrice :x.regularPrice} {x.type ==="rent" && "/ Mount"}</p>
        <div className="listing-info">
          <img src={bedIcon} alt="bed" />  
           <p className="infoText">{x.bedrooms >1 ?`${x.bedrooms} Bedrooms`: '1 Bedroom' }</p>
        </div>
        <div className="listing-info">
        <img src={bathtubIcon} alt="bath" /> 
        <p className="infoText">{x.bathrooms >1 ?`${x.bathrooms} Bathrooms`: '1 Bathroom' } </p>
        </div>
    </div>
  </Link>
  </div>;
};
