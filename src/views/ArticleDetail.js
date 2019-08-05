import React from 'react';
import { Avatar} from 'antd';
import '../styles/ArticleDetail.less';
class ArticleDetail extends React.Component{
  constructor(props){
    super()
  }
  state = {
  };
  componentWillMount(){
    console.log(this.props.location.state.id)//val值
  }
  render(){
      return (
        <div className='ArticleDetail'>
          <h2>详解React生命周期(包括react16版)</h2>
          <div className="author">
            <Avatar shape="square" src=""/>
            <div className='content'>
              <div>aermin</div>
              <div>2018.10.07 10:14* 字数 2093 阅读 45870评论 2喜欢 48</div>
            </div>
          </div>
         <div className='content'>
            <h3>React v16.0前的生命周期</h3>
            <p>
            其实大部分团队不见得会跟进升到16版本，所以16前的生命周期还是很有必要掌握的，何况16也是基于之前的修改
            </p>
            <img src="https://upload-images.jianshu.io/upload_images/5287253-bd799f87556b5ecc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp" />
            <h3>第一个是组件初始化(initialization)阶段</h3>
            <p>也就是以下代码中类的构造方法( constructor() ),Test类继承了react Component这个基类，也就继承这个react的基类，才能有render(),生命周期等方法可以使用，这也说明为什么函数组件不能使用这些方法的原因。</p>
            <p>super(props)用来调用基类的构造方法( constructor() ), 也将父组件的props注入给子组件，功子组件读取(组件中props只读不可变，state可变)。
  而constructor()用来做一些组件的初始化工作，如定义this.state的初始内容。</p>
          </div>
        </div>
        )
  }
 
}

export default ArticleDetail