import React from 'react';
import { Spin } from 'antd';
import HomeList from "./HomeList";
import AdminCard from "./AdminCard";
import EnglishCard from "./EnglishCard";
import HomeCard from "./HomeCard";
import { Row, Col,Button} from 'antd';
import {getAriticle,getUsers} from '../common/apis';
// vuex start
// vuex end
class HomePage extends React.Component{
  constructor(props){
    super()
  }
  state = {
    loadingArticle:false,
    loadingUser:false,
    loading:false,
    articleList:[],
    userList:[],
    admin:{
      name:'一只老萌',
      img:''
    }
  };
  componentWillMount(){
    this.getArticles();
    this.getUsers();
  }
  getArticles(){
    this.setState({loadingArticle :true})
    getAriticle({}).then(data=>{
      this.setState({
        articleList :data
      })
      this.setState({loadingArticle :false})
    }).catch(error=>{
      this.setState({loadingArticle :false})
    })
  }
  getUsers(){
    this.setState({loadingUser :true})
    getUsers({}).then(data=>{
      this.setState({
        userList:data
      })
      this.setState({loadingUser :false})
    }).catch(error=>{
      this.setState({loadingUser :false})
    })
  }
  render(){
      return (
      
          <Row style={{minWidth:300}} gutter={16}>
            <Col xs={24} sm={12} md={16} lg={16} xl={17} style={{background:'#fff'}}>
              <Spin spinning={this.state.loadingArticle}>
                <HomeList articleList={this.state.articleList}/>
                <Button type="dashed" style={{width:'100%'}}>阅读更多</Button>
              </Spin>
            </Col>
            <Col xs={24} sm={12} md={4} lg={8} xl={7}>
              <Spin spinning={this.state.loadingUser}>
               <AdminCard title="一只老萌" admin={this.state.admin}/>
              </Spin>
              <Spin spinning={this.state.loadingUser}>
               <EnglishCard title="每日英语" data={this.state.admin}/>
              </Spin>
              <Spin spinning={this.state.loadingUser}>
               <HomeCard title="作者榜" articleList={this.state.userList}/>
              </Spin>
            </Col>
          </Row>
       
        )
  }
}

export default HomePage