import React from 'react';
import '../styles/AdminCard.less';
function AdminCard(props) {
  return (
    <div className='admin-card'>
      <div className='user-block-header'>{props.title}</div>
      <div className="user-box">
        <div className='content'>
          <p>职业：女程序员，Web前端设计师</p>
          <p>现居：四川省-成都市</p>
          <p>工作室：青于蓝-排名技术建站</p>
          <p>Email：dancesmiling@qq.com</p>
        </div>
      </div>
    </div>
  );
}

export default AdminCard