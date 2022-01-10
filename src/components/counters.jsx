import React, { Component } from 'react';
import Counter from './counter';
  
class Counters extends Component {
   
     
    render() { 
        console.log('counters-render');
        //object distruction format
        const {onReset,counters,onDelete,onIncrement,onDecrement}=this.props;
        return ( 
            <div >
                <button onClick={onReset}//means this.props.onReset
                 className="btn btn-primary btn-sm m-2">
                 Reset</button>
                 {/* // here using instead of this.props.counters we use Object distructing */}
                {counters.map(counter=>(
                <Counter key={counter.id} 
                onDelete={onDelete} 
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                counter={counter}/>
               ))}
              
            </div>
         );
    }
}
 
export default Counters ;