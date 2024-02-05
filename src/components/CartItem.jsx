import {MdDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import  {toast} from "react-hot-toast";
import {remove} from "../redux/Slices/CartSlice"

const CartItem = ({post}) => {

  console.log(post);

  const dispatch = useDispatch();

  function removeToCartHandler(){
    dispatch( remove(post.id) );
    toast.success(" Item Removed ");
  }

  return(
    <div className=" flex flex-col w-[100%] md:w-[100%] md:flex-row p-0 md:p-8 md:mt-3 items-center gap-5 border-b-2 border-slate-500" >
      <div className="w-[30%]" >
        <img src={post.image} className="object-cover" />
      </div>
      <div className=" self-start md:ml-10 space-y-5 w-[100%] md:w-[70%]" >
        <p className=" text-xl text-slate-700 font-semibold " >{post.title}</p>
        <p className="font-medium text-slate-700 text-base " >{post.description.split(" ").slice(0, 15).join(" ")}....</p>
        <div className=" flex justify-between items-center  " >
          <p className=" text-lg text-green-600 font-bold " >${post.price}</p>
          <div onClick={removeToCartHandler} className="bg-red-200  p-3 mr-3 rounded-full cursor-pointer hover:bg-red-400 hover:text-white transition-all duration-300 " >
            <MdDelete/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
