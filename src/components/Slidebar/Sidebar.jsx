/* eslint-disable */
import { Button, Menu } from 'antd';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Sider from 'antd/lib/layout/Sider';
import _ from 'lodash';

import ArrowLeftIcon from 'components/Icons/ArrowLeftIcon';
import CalendarIcon from 'components/Icons/CalendarIcon';
import FileTextIcon from 'components/Icons/FileTextIcon';
import MenuIcon from 'components/Icons/MenuIcon';
import SettingsIcon from 'components/Icons/SettingsIcon';
import EditIcon from 'components/Icons/EditIcon';
import { NavLink, useLocation } from 'react-router-dom';

import './style/Sidebar.less';

// sub menu keys

const SUB_KEYS = {
  customer: '/customer',
  settings: '/settings',
};

export default function Sidebar({ collapsed, toggleCollapsed }) {
  const [openKeys, setOpenKeys] = useState([]);
  const location = useLocation();
  const customStyles = 'sidebar collapsible-sidebar';
  const IconWidth = '18';
  const IconHeight = '18';

  useEffect(() => {
    const temp = [];
    _.forOwn(SUB_KEYS, (value, key) => {
      if (location.pathname.includes(key)) {
        temp.push(value);
      }
    });
    setOpenKeys(temp);
  }, [location.pathname]);

  const onSubMenuClick = (menu) => {
    if (_.indexOf(openKeys, menu) === -1) {
      setOpenKeys([...openKeys, menu]);
    } else {
      setOpenKeys([openKeys.filter((val) => val !== menu)]);
    }
  };

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={true}
      className={collapsed ? customStyles : `sidebar`}
    >
      <div className="menu-control">
        <Button
          type="primary"
          onClick={() => toggleCollapsed()}
          className="menu-icon"
        >
          {collapsed ? <MenuIcon /> : <ArrowLeftIcon stroke="#888888" />}
        </Button>
      </div>
      <Menu
        defaultSelectedKeys={['/']}
        openKeys={openKeys}
        mode="inline"
        className={collapsed ? 'ant-menu-inline-collapsed' : 'ant-menu-custom'}
        selectedKeys={[location.pathname]}
        sub
      >
        <Menu.Item key="/jobpost">
          <NavLink to="/jobpost">
            <EditIcon
              width={IconWidth}
              height={IconHeight}
              stroke={location.pathname === '/jobs' ? '#121958' : '#888888'}
            />
            <span>Đăng tin tuyển dụng</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/jobmanager">
          <NavLink to="/jobmanager">
            <FileTextIcon
              width={IconWidth}
              height={IconHeight}
              stroke={
                location.pathname === '/jobmanager' ? '#121958' : '#888888'
              }
            />
            <span>Quản lí đăng tuyển</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="/companyprofile">
          <NavLink to="/companyprofile">
            <SettingsIcon
              width={IconWidth}
              height={IconHeight}
              stroke={
                location.pathname === '/companyprofile' ? '#121958' : '#888888'
              }
            />
            <span>Sửa thông tin doanh nghiệp</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
  toggleCollapsed: PropTypes.func,
};
