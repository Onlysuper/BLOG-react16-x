import React from 'react';
import { Avatar,Icon,Button} from 'antd';
import '../styles/HomeCard.less';
function ListItem(props) {
  const articleList = props.articleList;
  const listItems = articleList.map((item,index) =>
    <li key={index} className='item'>
            <a className='link' href="path">
              <Avatar style={{width: '3.8rem',height:'3.8rem',marginRight:'.8rem'}} src={item.img}/>
              <div className="user-info">
                  <div className='username'>{item.username}</div>
                  <p className='position'>{item.position}</p>
                  <p className='description'>{item.description}</p>
              </div>
            </a>
      </li>
  );
  return (
    <div className='user-card'>
      <div className='user-block-header'>{props.title}</div>
      <ul className='user-list'>
        {listItems}
        <Button className='more-but' type="dashed">查看更多<Icon type="right" /></Button>
      </ul>
    </div>
  );
}

export default ListItem