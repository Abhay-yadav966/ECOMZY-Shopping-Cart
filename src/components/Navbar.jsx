import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  // fetching data from redux 
  const cart = useSelector( (state) => ( state.cart ) );

  return (
    <div className="bg-slate-900" >
        <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto " >
          <NavLink to="/" >
            <img src="../logo.png" alt="" className="h-14 ml-5 "/>
          </NavLink>
          <div className="flex items-center text-slate-100 font-medium mr-5 space-x-6 " >
            <NavLink to="/" >
              <p>Home</p>
            </NavLink>
            <NavLink to="/cart">
              <div className="relative">
                <FaShoppingCart className="text-2xl" />
                {
                  cart.length == 0 ? (<span></span>) : (<span className=" absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white " >{cart.length}</span>)
                }
              </div>
            </NavLink>
          </div>
        </nav>
    </div>
  );
};

export default Navbar;
