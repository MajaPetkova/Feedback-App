import { Link, useParams } from "react-router-dom";
import data from "../data";

export const SingleProduct = () => {
  const { id } = useParams();
  //   console.log(id);
  const product = data.find((x) => x.id === id);
  const { image, name } = product;
  return (
    <>
      <div>
        <h5>Single Product</h5>
        <h4>{name}</h4>
        <img src={image} alt="" />
      </div>
     
    </>
  );
};
