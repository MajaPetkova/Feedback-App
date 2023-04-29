import { FaCartPlus } from "react-icons/fa";

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h4>useReducer</h4>
        <div className="nav-container">
          <FaCartPlus />
          <div className="amount-container">
            <p className="total-amount">2</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
