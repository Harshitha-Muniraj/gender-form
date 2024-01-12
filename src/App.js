
import { useState } from 'react';
import './App.css'
import { useSelector,useDispatch } from 'react-redux';
import { updateEmail, updateName } from './redux/actions/InputAction';

function App() {

  const storeName=useSelector((state)=>state.name);
  const storeEmail=useSelector((state)=>state.email);

  const dispatch=useDispatch();

  return (
    <main>
    <form>
      <h1>User Information</h1>
      <div>
        <label htmlFor='name'>User Name :</label>
        <input onChange={(e)=>dispatch(updateName(e.target.value))} value={storeName} id='name'/>
      </div>
      <br/>
      <div>
        <label htmlFor='email'>User Email :</label>
        <input onChange={(e)=>dispatch(updateEmail(e.target.value))} id='email' value={storeEmail}/>
      </div>
    </form>  
    <h2>current values in store</h2>
    <div>username : {storeName}</div>
    <div>useremail : {storeEmail}</div>
    </main>
  );
}

export default App;
