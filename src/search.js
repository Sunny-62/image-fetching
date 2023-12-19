import { useEffect, useState } from "react";
import axios from 'axios';
function Search({Addimages}){
var [searchterm,setSearchterm]=useState("");


useEffect(
   ()=>{
    searchimage();
   } ,[]
)

function searchimage(){ 

    axios.get("https://api.unsplash.com/search/photos",
    {
        params:{
        
            client_id:process.env.REACT_APP_ACCESS_KEY,
            query:searchterm,
        }
    }
    )
    .then((res)=>{Addimages(res.data.results)})
    .catch((error)=>{console.log(error)})
}
function reset(){
    setSearchterm("");
    Addimages([]);
}


    return(
        <div>
<input type="text" placeholder="search your image" id="image" 
onChange={(e)=>{setSearchterm(e.target.value)}}
value={searchterm}
/>

<button id="search" onClick={searchimage}>search</button>
<button onClick={reset} >Reset</button>

        </div>
    )
}
export default Search;