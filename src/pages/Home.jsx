import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  
  
  // state variable for loading
  const [ loading, setLoading ] = useState(false);

  // state variable for data
  const [ posts, setPosts ] = useState([]);

  async function fetchData() {
    
    setLoading(true);

    try{
      const res = await fetch( API_URL );
      const data = await res.json();

      setPosts( data );

    }
    catch(err){
      console.log("Something went wrong in fetching data")
      console.log(err);
    }

    setLoading(false);
  }

  useEffect( () => {
    fetchData();
  }, [] );

  return(
    <div>
        {
          loading ? 
          ( <Spinner/> ) :
          ( posts.length > 0 ? 
          ( <div className=" grid xs:grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-x-5 space-y-10 min-h-[80vh] " >
            {
              posts.map( (post) => (
                <Product key = {post.id} post = {post} />
              ) )
            }
          </div> ) : 
          ( <div className="flex justify-center items-center" >
            <p> No Data Found</p>
          </div> ) )
        }
    </div>
  );
};

export default Home;
