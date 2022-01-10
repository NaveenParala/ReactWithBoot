import React, { Component } from 'react'

class Counter extends Component {
//    state={
//         value:this.props.counter.value
//     };

    //  constructor(props) {
    //      super(props);
    //  we intialize state in constructor or independently dont 
    //  use seperately constructor and state
    //     this.state = { 
    //         count:this.props.value
    //         //tags:["tag1","tag2"]
    //      }
    //      // eventHandler binding
    //     this.handlerIncrement= this.handlerIncrement.bind(this);
          // we use arrow function no need to bind event handler.
    //  }
     
    //  handlerIncrement=()=>{
    //      this.setState({value: this.props.counter.value + 1});
    //  };
     
    //  renderTags(){
    //     //  if(this.state.tags.length ===0) return <p>this Tags Array is Empty</p>
    //        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> 
    //     }
    render() {  
        console.log('props',this.props.counter);
        console.log('counter-rendered');
        return(
       <div className="row">
           <div className="col-1">
         <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
           </div>
           <div className="col">
           {/* using children Component  */}
         {/* <h4>Counter {this.props.counter.id}</h4> */}
         <button onClick = {() =>this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2">+</button>
         <button onClick = {() =>this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2" 
          disabled={this.props.counter.value===0 ? "disabled":""}>-</button>
          <button onClick={()=>this.props.onDelete(this.props.counter.id)}
           className="btn btn-danger btn-sm ">Delete</button>
         <br></br>
         {/* {this.state.tags.length ===0 && "Please create a new tag!"}
        { this.renderTags()} */}
           </div>
      </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2  badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        //object distructing below one line
        const {value}=this.props.counter;
        return value===0?'ZERO':value;
    }
}
 
export default Counter;