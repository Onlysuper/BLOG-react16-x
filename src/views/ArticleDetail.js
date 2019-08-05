import React from 'react';
class ArticleDetail extends React.Component{
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
          我是文章详情
        </div>
        )
  }
 
}

export default ArticleDetail