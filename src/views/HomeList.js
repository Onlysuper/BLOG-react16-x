import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/HomeList.less';
class HomeList extends React.Component{
  constructor(props){
    super()
  }
  state = {
    articleList:[],
    collapsed: true,
  };
  
  render(){
      return (
        this.props.articleList.map((item,index) =>
          <div key={index} className='article-list'>
             <Link to={{
               pathname:'/article',
               state:{id:index}
             }}>
                <div className="content">
                      <h2 className='title'>{item.title}</h2>
                      <p className='abstract'>{item.content}</p>
                </div>
                <div className="wrapImg" style={{width: 150}}>
                    <img src={item.img} alt="120" />
                </div>
            </Link>
        </div>
        )
      )
  }
  // render(){
  //   return (<div/>)
  // }
}

export default HomeList