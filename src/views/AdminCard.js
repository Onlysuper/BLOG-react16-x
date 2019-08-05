import React from 'react';
import { Avatar,Icon,Button} from 'antd';
import '../styles/AdminCard.less';
function AdminCard(props) {
  return (
    <div className='admin-card'>
      <div className='user-block-header'>{props.title}</div>
      <div className="user-box">
        <div>
        <Avatar shape="square" size={64} src={props.admin.img}/>
        </div>
        <div className='content'>
          <p>职业：女程序员，Web前端设计师</p>
          <p>现居：北京市-通州区</p>
          <p>Email：xuyuccc@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default AdminCard