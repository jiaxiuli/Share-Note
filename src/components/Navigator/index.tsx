/*
 * @Author: 李佳修
 * @Date: 2022-05-11 16:30:26
 * @LastEditTime: 2022-05-15 18:38:22
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/components/Navigator/index.tsx
 */
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router';
import { HomeOutlined, FileTextOutlined, EditOutlined } from '@ant-design/icons';
import './index.scss';
import { useEffect, useState } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    type?: 'group',
  ): MenuItem {
    return {
      key,
      icon,
      label,
      type,
    } as MenuItem;
  }

const items: MenuProps['items'] = [
  getItem('Home', 'home', <HomeOutlined />),
  getItem('My Note', 'my-note', <FileTextOutlined />),
  getItem('Note Something', 'note-create', <EditOutlined />),
];

const Navigator = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState<string>('');

    useEffect(() => {
      const path = location.pathname.substring(1);
      setSelectedTab(path);
    }, [location.pathname]);

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        navigate(e.key);
        
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[selectedTab]}
            mode="inline"
            items={items}
        />
    )

}

export default Navigator;