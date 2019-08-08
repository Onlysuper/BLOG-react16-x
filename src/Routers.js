import React from 'react';
import { BrowserRouter, Route,withRouter } from 'react-router-dom'
import './style.less'  //引入less文件
// import './App.less';
import { Layout, Menu,Icon,Avatar,BackTop,Input} from 'antd';
import HomePage from "./views/HomePage";
import ArticlePage from "./views/ArticlePage";
import ArticleDetail from "./views/ArticleDetail";
import AboutPage from "./views/AboutPage";
import CounPage from "./views/CounPage";
const Search = Input.Search;

const { Header, Content,Sider} = Layout;


class Menus extends React.Component {
  constructor(props){
    super(props)
    this.menuHandle=this.menuHandle.bind(this)
  }
  menuHandle(e){
    let name = e.key;
    this.props.history.push(`/${name}`);
  }
  render(){
    return (
          <Menu
            theme="light"
            mode={this.props.mode}
            style={{ lineHeight: '62px',flex:'1' }}
            onClick={this.menuHandle}
            defaultSelectedKeys={['home']}
          >
            <Menu.Item selectable={true} key="home">首页</Menu.Item>
            <Menu.Item key="article">文章</Menu.Item>
            <Menu.Item key="about">关于</Menu.Item>
            <Menu.Item key="count">计数器</Menu.Item>
          </Menu>
      
    )
  }
}

const MenuRouter = withRouter(Menus);

class ContainerBox extends React.Component {
  constructor(pops){
    super(pops)
    this.menuHandle=this.menuHandle.bind(this)
  }
  state = {
    collapsed: true,
    contentIsShow:true,
    currentNum:0,
  };
 
  componentDidMount(){
    console.log('zzzzzz');
    window.addEventListener('scroll', ()=>this.scrollHandler());
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',()=>this.scrollHandler());
  }

  scrollHandler() {
    // console.log('滚动');
    let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
    
    if(scrollTop < this.state.currentNum){
    
    console.log("向上滚")
    
    this.setState({
    
    currentNum:scrollTop,
    contentIsShow:true
    
    })
    
    }
    
    if(scrollTop > this.state.currentNum){
    
    console.log("向下滚")
    
    this.setState({
    
    currentNum:scrollTop,
    contentIsShow:false
    
    })
    
    }
    
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  menuHandle(e){
    let name = e.key;
    if(name==='home'){

    }else if(name==='articel'){
      this.props.history.push(`/articel`);
    }
  }
  render(){
    return (
      <div>
      <Layout  theme="light">
      <Sider
        theme="light"
        className='m-sider'
        collapsedWidth="0"
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
      >
        <div className="logo" />
        <MenuRouter mode="inline"/>
      </Sider>
      <Layout>
        <Header className={ this.state.contentIsShow ? "animate-wrap active down-in" : "animate-wrap down-out"} style={{ padding: '0,3rem', position: 'fixed',zIndex:100, width: '100%',background:'#fff',borderBottom: '1px solid #e8e8e8'}}>
          <Icon
            className="trigger"
            style={{color:'#fff',fontSize:'2rem' }}
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
          <div className='m-pc-head' style={{margin: '0 13rem'}}>
              <div className="logo" />
              <MenuRouter mode="horizontal"/>
              <div>
              <Search
                  placeholder="请输入关键字词"
                  style={{ width: 260,marginRight:'2rem' }}
                  onSearch={value => console.log(value)}
                />
              <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf',textAlign:'center' }}>U</Avatar>
              </div>
          </div>
        </Header>
        <Content className='main-content' style={{  padding: '2.4rem', minHeight: '28rem'}}>
          <div>
            <Route path="/" exact component={HomePage} />
            <Route path="/home" exact component={HomePage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/article" component={ArticlePage} />
            <Route path="/articledetail" component={ArticleDetail} />
            <Route path="/count" component={CounPage} />
          </div>
        </Content>
        <div>
          <BackTop />
        </div>
      </Layout>
    </Layout>
      
    </div>
    );
  }
}

class Routers extends React.Component {
  constructor(props){
    super(props);
    // console.log(props);
  }
  render(){
    return (
      <BrowserRouter>
        <ContainerBox history={this.props.history}/>
      </BrowserRouter>
    )
  }
}

export default Routers;
