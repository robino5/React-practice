import React, { Component } from 'react';

class Count extends Component {
    constructor (props){
        super(props)

        this.state={
            count: 0,
            name: ''
        }  
    }

    incrementCount = ()=> {
        this.setState({
            count: this.state.count +1
        })
    }
    dicrementCount = ()=> {
        this.setState({
            count: this.state.count -1
        })
    }
    chanegeValue = (e)=>{
        this.setState({
             name: e.target.value
        } ,()=>{
            console.log(this.state.name);
        }) 
    }
  render() {
    return(
           <div>
               <input type="text"  onChange={this.chanegeValue} />
               <p>{this.state.name}</p>
               <h1>Count: {this.state.count}</h1>
               <button onClick={this.incrementCount} disabled={this.state.count===20?true:false}>+</button>
               .<button onClick={this.dicrementCount} disabled={this.state.count===0?true:false}>-</button>
           </div>
    )
  }
}

export default Count 