import React, { Component } from 'react';
import NavBar from './components/navbar';
import logo from './logo.svg';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  constructor(){
    super()
    console.log('app-constructor');
  }
  state = { 
    counters:[
      {id:1,value:4},
      {id:2,value:0},
      {id:3,value:0},
      {id:4,value:0},
    ]
  }
  componentDidMount(){
    console.log('mount method called');
  }
  handlerDelete=(counterId)=>{
    const counters=this.state.counters.filter(counter=>counter.id !== counterId);
    this.setState({counters:counters});
    console.log('handler delete called' ,counterId);
  }
  handleReset=()=>{
    const counters=this.state.counters.map(c=>{
      c.value=0;
      return c;
    });
    this.setState({counter:counters})
    console.log('Reset handler got called ');
  }
  handleIncrement=(counter)=>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value++;
    this.setState({counters});
    console.log(counter);
  }
  handleDecrement=(counter)=>{
    const counters=[...this.state.counters];
    const index=counters.indexOf(counter);
    counters[index]={...counter};
    counters[index].value--;
    this.setState({counters});
    console.log(counter);
  }
    render(){ 
      console.log('app-render');
      return ( 
        <React.Fragment>
        <NavBar totalCounters=
        {this.state.counters.filter(c => c.value > 0).length}/>
    <main className="container">
     <Counters
     counters={this.state.counters}
     onReset={this.handleReset}
     onIncrement={this.handleIncrement}
     onDecrement={this.handleDecrement}
     onDelete={this.handlerDelete}
     />
   </main>
    </React.Fragment>
     );
    }
  }
  export default App