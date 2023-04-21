import { MenuItem } from "./MenuItem";

export const Menu = ({items}) => {
  return <div className="section-center">
   {items.map(x => <MenuItem key= {x.id} {...x}/> )}
  </div>;
};
