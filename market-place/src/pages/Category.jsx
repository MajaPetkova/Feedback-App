import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import { Spinner } from "../components/Spinner";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { ListingItem } from "../components/ListingItem";

export const Category = () => {
  const [listings, setListings] = useState({});
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const listingsRef = collection(db, "listings");
        const q = query(
          listingsRef,
          where("type", "==", params.categoryName),
          orderBy("timestamp", "desc"),
          limit(10)
        );
        //   execute query
        const querySnap = await getDocs(q);
        const listings = [];
        querySnap.forEach((doc) => {
          listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setListings(listings);
        setLoading(false);
      } catch (err) {
        toast.error("Could not fetch listings");
      }
    };
    fetchListings();
  }, [params.categoryName]);

  return (
    <div className="category">
      <header>
        <p className="header">
          {params.categoryName == "rent"
            ? "Places for Rent"
            : "Places for Sale"}
        </p>
      </header>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
        <main>
            <ul className="categoryListing">
                {listings.map((x)=>(<ListingItem x={x.data} key={x.id} id= {x.id}/>))}
            </ul>
        </main>
        </>
      ) : (
        <p>No listings for {params.categoryName}</p>
      )}
    </div>
  );
};
