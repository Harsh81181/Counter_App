import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }


    increase(){
        this.setState({
            count:this.state.count+1
        })
      }
    increaseFive(){
        this.increase()
        this.increase()
        this.increase()
        this.increase()
        this.increase()
      }


   
    render() {
    return (
      <div style={{display:'flex', justifyContent:'center', gap:'5px'}}><h3>Count: {this.state.count}</h3>

      <button onClick={()=>this.increase()}>Increse 1</button>

      <button onClick={()=>this.increaseFive()}>Increase 5</button>
      </div>
      
    )
  }
}
