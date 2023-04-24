import { SingleItem } from "./SingleItem";

export const ItemList = ({ items, removeItem, editItem }) => {
  return (
    <div className="items">
      {items.map((x) => {
        return <SingleItem key={x.id} item={x} removeItem={removeItem} editItem={editItem}/>;
      })}
    </div>
  );
};
