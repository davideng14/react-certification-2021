import React from 'react';
import { Switch, Avatar } from 'antd';

import { UserOutlined } from '@ant-design/icons';

import './Header.styles.css';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

function Header() {
  return (
    <header>
      <div className="right-container">
        <ul>
          <li>
            <input id="search" type="text" placeholder="search" />
          </li>
          <li>
            <nav>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#home">Link 2</a>
                </li>
              </ul>
            </nav>
          </li>
        </ul>
      </div>
      <div className="left-container">
        <ul>
          <li>
            <Switch defaultChecked onChange={onChange} />
          </li>
          <li>
            <Avatar size={40} icon={<UserOutlined />} />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
