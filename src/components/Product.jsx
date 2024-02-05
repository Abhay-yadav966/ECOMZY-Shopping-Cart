import {toast} from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add , remove } from "../redux/Slices/CartSlice"


const Product = ({post}) => {

  // fetching data from redux
  const cart = useSelector( (state) => (state.cart));

  // fetching function from redux
  const dispatch = useDispatch();

  // function for add to cart
  function addToCartHandler(){
    dispatch( add( post ) );
    toast.success("Item added to Cart");
  }


  // function for remove from cart
  function removeToCartHandler(){
    dispatch( remove(post.id) );
    toast.error( " Item removed from Cart " );
  }

  return (
    
      <div className=" flex flex-col items-center justify-between hover:scale-110 transition-all duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] " >
        <p className=" text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 " >{ post.title }</p>
        <p className=" w-40 text-gray-400 font-normal text-[10px] text-left " >{post.description.split(" ").slice(0 , 10).join(" ") + "...." }</p>
        <img src={post.image} alt="" className="h-[180px]" />
        <div className="flex justify-between gap-x-12 items-center w-full mt-5 " >
          <p className=" text-green-600 font-semibold " >${post.price}</p>
          {
            cart.some( (p) => p.id == post.id ) ? (<button className=" text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 " onClick={removeToCartHandler}  >Remove Item</button>) : (<button className=" text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 " onClick={addToCartHandler} >Add to Cart</button>)
          }
        </div>
      </div>
    
  );
};

export default Product;
