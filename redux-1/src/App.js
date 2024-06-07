import { useRef } from 'react';
import './App.css';
import { useDispatch, useSelector} from 'react-redux';

function App() {

  let inputRef = useRef();
  let dispatch = useDispatch();
 let storeObj = useSelector((store)=>{
  return(
    store
  )
 });

  return (
    <div className="App">

      <input ref={inputRef}></input>
      <button type='button' onClick={()=>{
dispatch({type:"addFighters",data:inputRef.current.value});

      }} >Fighter</button>

      <button type='button' onClick={()=>{
        dispatch({type:"addChopers",data:inputRef.current.value});

      }}>Choper</button>

      <button  type='button' onClick={()=>{
        dispatch({type:"addBoeings",data:inputRef.current.value});
        
      }} >Boeing</button>
     <div>
     <h1>FIGHTERS:{storeObj.fighters.join()}</h1>
     </div>
     <div>
     <h1>CHOPERS:{storeObj.chopers.join()}</h1>
     </div>
     <div>
     <h1>BOEINGS:{storeObj.boeings.join()}</h1>
     </div>


     
    </div>
  );
}

export default App;
