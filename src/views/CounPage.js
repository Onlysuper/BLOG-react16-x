import React from 'react';
import store from '../redux'
  store.subscribe(() => console.log(store.getState()))
  store.dispatch({ type: 'INCREMENT' })
  store.dispatch({ type: 'INCREMENT' })
  store.dispatch({ type: 'DECREMENT' })
class CountPage extends React.Component{
  constructor(props){
    super()
  }
  state = {
  };
  componentWillMount(){
  }
  render(){
      return (
        <div>
         我是一个计数器
        </div>
        )
  }
 
}

export default CountPage