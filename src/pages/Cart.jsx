import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect } from "react";
import { useState } from "react";


const Cart = () => {
  
  
  // fetching data from redux
  const cart = useSelector( (state) => (state.cart) );

  // state varible for total amount
  const [ totalAmount, setTotalAmount ] = useState(0);

  useEffect( () => (
    setTotalAmount( cart.reduce( (acc, curr) =>  acc + curr.price ,0 ) )
    ) , [cart]);
   
   
  
  const Navigate = useNavigate();

  function clickHandler(){
    Navigate("/");
  }
  return(
    <div>
        {
          cart.length > 0 ?
          ( <div className="flex gap-x-7 max-w-6xl mx-auto " >
              <div className="w-[60%]" >
                {
                  cart.map( ( item , index ) => (
                    <CartItem key = { item.id } post = {item}  />
                  ) )
                }
              </div>

              <div className=" flex justify-between flex-col my-14 w-[40%] " >
                <div>
                  <p className="font-semibold text-xl text-green-800 mt-5 uppercase " >Your Cart</p>
                  <p className="font-semibold text-5xl text-green-700 uppercase " >Summary</p>
                  <p className="text-xl mt-5 " >
                    <span className=" text-gray-700 font-semibold " >Total Items :</span> {cart.length}
                  </p>
                </div>
                <div>
                  <p className="text-xl font-bold " >
                    <span className="text-gray-700 font-semibold" >Total Amount :</span>{`$${totalAmount}`}
                  </p>

                  <button className=" bg-green-700 w-full hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl mb-5 " >
                    CheckOut Now
                  </button>
                </div>
              </div>
          </div> ) :
          ( <div className="flex flex-col items-center justify-center h-[80vh] " >
            <h1 className=" text-gray-700 font-semibold text-xl mb-2 " >Your cart is empty!</h1>
              <button onClick={clickHandler} className=" bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold hover:text-green-700 p-3 px-10 uppercase " >
                Shop Now
              </button>
          </div> )
        }
    </div>
  );
};


export default Cart;

