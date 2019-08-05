import React from 'react';
class ArticalPage extends React.Component{
  constructor(props){
    super()
  }
  state = {
  };
  componentWillMount(){
    // console.log(this.props.location.state.id)//val值
  }
  render(){
      return (
        <div>
          我是文章页面
        </div>
        )
  }
 
}

export default ArticalPage