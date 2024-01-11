
import { useState } from 'react';
import './App.css'

function App() {
  const [outfit,setOutfit]=useState("Shirt");
  const [selectedOption,setSelectedOption]=useState(true)
  return (
    <form>
      <div>
        <h3>Select Your Gender :</h3>
        
        <input type='radio' name='gender' value='Shirt' id='men' checked={selectedOption==true}  onChange={(e)=>{setOutfit(e.target.value);setSelectedOption(true)}}/>
        <label htmlFor='men'>Men</label>
       
        <input type='radio' name='gender' id='women' value='Dress' onChange={(e)=>{setOutfit(e.target.value);setSelectedOption(false)}} />
        <label htmlFor='women'>women</label>
      </div>
      <div>
        <h3>Select Your {outfit} size</h3>
        
          {
            selectedOption ? 
            <select name='shirt' id='men'>
            <option >Select size</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
            </select>
            :
            <select name='dress' id='women'>
            <option >Select size</option>
            <option value='2'>2</option>
            <option value='4'>4</option>
            <option value='6'>6</option>
            </select>
          }
        
      </div>
    </form>
  );
}

export default App;
