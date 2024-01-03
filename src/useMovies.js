import { useEffect,useState } from "react";
export function useMovies(query){
    const [movies, setMovies] = useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState("");
    const Key="2fda1fde";
    const controller=new AbortController();
    useEffect(function(){
        async function fetchMovies(){
          try{
            setIsLoading(true);
            setError("");
         const res= await fetch(`http://www.omdbapi.com/?apikey=${Key}&s=${query}`,{signal:controller.signal})
         if(!res.ok) throw new Error("Something went wrong in fetching movies")
         const data= await res.json();
        if(data.Response==="False") throw new Error("Movie not found");
         setMovies(data.Search);
         setError("");
        }
    
         catch(err){console.error(err.message);
          if(err.name!=="AbortError"){setError(err.message)};
        }
        finally{setIsLoading(false);}
        }
        if(query.length<2){
          setError("");
          setMovies([]);
          return;
        }
        // handleCloseMovie();
        fetchMovies();
        return function(){
          controller.abort();
        }
      },[query])
      return{movies,isLoading,error};
}