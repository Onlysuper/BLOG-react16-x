import React from 'react';
import '../styles/AdminCard.less';
function AdminCard(props) {
  return (
    <div className='admin-card'>
      <div className='user-block-header'>{props.title}</div>
      <div className="user-box">
        <div className='content'>
          <p>No road of flowers leads to glory</p>
          <p>没有一条通往荣誉的道路是铺满鲜花的</p>
        </div>
      </div>
    </div>
  );
}

export default AdminCard