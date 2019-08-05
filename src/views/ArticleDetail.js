import React from 'react';
import { Avatar} from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '../styles/ArticleDetail.less';
class ArticleDetail extends React.Component{
  constructor(props){
    super()
  }
  state = {
    codeString:`class ScrollingList extends React.Component {
      constructor(props) {
        super(props);
        this.listRef = React.createRef();
      }
    
      getSnapshotBeforeUpdate(prevProps, prevState) {
        //我们是否要添加新的 items 到列表?
        // 捕捉滚动位置，以便我们可以稍后调整滚动.
        if (prevProps.list.length < this.props.list.length) {
          const list = this.listRef.current;
          return list.scrollHeight - list.scrollTop;
        }
        return null;
      }
    
      componentDidUpdate(prevProps, prevState, snapshot) {
        //如果我们有snapshot值, 我们已经添加了 新的items.
        // 调整滚动以至于这些新的items 不会将旧items推出视图。
        // (这边的snapshot是 getSnapshotBeforeUpdate方法的返回值)
        if (snapshot !== null) {
          const list = this.listRef.current;
          list.scrollTop = list.scrollHeight - snapshot;
        }
      }
    
      render() {
        return (
          <div ref={this.listRef}>{/* ...contents... */}</div>
        );
      }
    }`
  }
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
          <SyntaxHighlighter language="javascript" style={docco}>
            {this.state.codeString}
          </SyntaxHighlighter>
        </div>
        )
  }
 
}

export default ArticleDetail