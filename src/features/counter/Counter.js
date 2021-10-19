import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, increBy,  selectCount,decreBy } from './counterSlice';


const Counter=()=> {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incre, setIncre] = useState(1);
  const[decre,setDecre]=useState(2);

  return (<>
    
    <div className="col-md-12 text-center mt-5">
      <h1>The current count is :{count}</h1>
        <button className="btn btn-block btn-primary" onClick={() => dispatch(increment())}>+</button>
        
      

        <button className="btn  btn-block btn-warning m-2" onClick={() => dispatch(decrement())}> - </button>
      
      
        <input className="m-2" value={incre} onChange={e => setIncre(e.target.value)}/>
        <button className="btn btn-danger m-2" onClick={() =>dispatch(increBy(Number(incre) || 0))}> By +{incre}</button>
        <input className="m-2" value={decre} onChange={e => setDecre(e.target.value)}/>
        <button className="btn btn-info m-2" onClick={() =>dispatch(decreBy(Number(decre) || 0))}> By -{decre}</button>
        </div>
      </>
    
  );
}
export default Counter;
