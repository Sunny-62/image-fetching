import logo from './logo.svg';
import './App.css';
import Search from './search';
import './imagebazar.css';
import { useState } from 'react';
import Displayimage from './Displayimage';
function App() {
  var [images,setimages]=useState([]);
  return (
    <div>

<h1>SEARCH IMAGES</h1>
<Search  Addimages={setimages}/>
<Displayimage images={images}/>



    </div>
  )
}

export default App;
