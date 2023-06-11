import { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";

export const CreateListing = () => {
  const [geoLocationEnabled, setGeoLocationEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    offer: true,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0,
  });
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    offer,
    regularPrice,
    discountedPrice,
    images,
    latitude,
    longitude,
  } = formData;

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setFormData({ ...formData, userRef: user.uid });
      } else {
        navigate("/sign-in");
      }
    });
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const submitHandler = (e) => {};
  const onMutate = (e) => {};

  return (
    <div className="form-listing">
      <header>
        <p className="header">Create a Listing</p>
      </header>
      <main>
        <form onSubmit={submitHandler}>
            <div className="form-offer">
          <label className="form-label" htmlFor="type">Sale / Rent</label>
          <div className="formButtons">
          <button type="button" className={type === "sale" ? "formBtn active": "formBtn"} id="type" value="sale" onClick={onMutate}>Sell</button>
          <button type="button" className={type === "rent" ? "formBtn active": "formBtn"} id="type" value="rent" onClick={onMutate} >Rent</button>
          </div>
          </div>
          <div className="form-offer">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name"className="formInputName" value={name} onChange={onMutate} maxLength="30" minLength="5" required />
          </div>
          <div className="form-offer">
          <label htmlFor="bedrooms" className="form-label">Bedrooms</label>
          <input type="number" className="formInputSmall" id="bedrooms" value={bedrooms} onChange={onMutate} min="1" max="15" required />
          <label htmlFor="bathrooms" className="form-label">Bathrooms</label>
          <input type="number" className="formInputSmall" id="bathrooms" value={bathrooms} onChange={onMutate} min="1" max="15" required />
          </div>
          <div className="form-offer">
            <label htmlFor="parking" className="form-label">Parking</label>
            <div className="formButtons">
            <button className={parking ? "formBtn active": "formBtn"} type="button" id="parking" value={true} onClick={onMutate}>Yes</button>
            <button className={!parking && parking !== null ? "formBtn active": "formBtn"} type="button" id="parking" value={false} onClick={onMutate}>No</button>
          </div>
          </div>
          <div className="form-offer">
            <label htmlFor="furnished" className="form-label">Furnished</label>
            <div className="formButtons">
            <button className={furnished ? "formBtn active": "formBtn"} type="button" id="furnished" value={true} onClick={onMutate}>Yes</button>
            <button className={!furnished && furnished !== null ? "formBtn active": "formBtn"} type="button" id="furnished" value={false} onClick={onMutate}>No</button>
          </div>
          </div>
         <div className="form-offer">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea className="formInputAddress" id="address" cols="30" rows="2" value={address} onChange={onMutate} required></textarea>
            {!geoLocationEnabled && (
                    <div className="form-offer">
                        <label className="form-label" id="latitude">Latitude</label>
                        <input type="number" className="formInputSmall" id="latitude" value={latitude} onChange={onMutate} required />
                        <label className="form-label" id="longitude">Longitude</label>
                        <input type="number" className="formInputSmall" id="longitude" value={latitude} onChange={onMutate} required />
                    </div>
            )}
         </div>
        <div className="form-offer">
        <label htmlFor="offer" className="form-label">Offer</label>
            <div className="formButtons">
            <button className={offer ? "formBtn active": "formBtn"} type="button" id="offer" value={true} onClick={onMutate}>Yes</button>
            <button className={!offer && offer !== null ? "formBtn active": "formBtn"} type="button" id="offer" value={false} onClick={onMutate}>No</button>
          </div>
        </div>
        <div className="form-offer">
        <label htmlFor="regularPrice" className="form-label">Regular Price</label>
            <input type="number" className="formInputSmall" id="regularPrice" value={regularPrice} onChange={onMutate} min="20" max="750000000" required/>
            {type ==="rent" && <p className="formPriceText">$ / Mounth</p>}

        </div>
        {offer && <div className="form-offer">
        <label htmlFor="discountedPrice" className="form-label">Discounted Price</label>
         <input type="number" className="formInputSmall" id="discountedPrice" value={discountedPrice} onChange={onMutate} min="50" max="75000000"  required={offer}/>
        </div>}
        
        <div className="form-offer">
        <label htmlFor="images" className="form-label">Images</label>
        <p className="image-info">The first image will be the cover (max 6)</p>
        <input type="file" className="formInputFile" id="images" onChange={onMutate} max="6" accept=".jpg,.png,.jpeg" multiple required />
        </div>
        <div className="form-offer">
        <button className="formBtnSubmit" type="submit">Create Listing</button>
        </div>
        </form>
      </main>
    </div>
  );
};
