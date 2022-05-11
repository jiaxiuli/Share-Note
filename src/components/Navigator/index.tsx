/*
 * @Author: 李佳修
 * @Date: 2022-05-11 16:30:26
 * @LastEditTime: 2022-05-11 16:57:15
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/components/Navigator/index.tsx
 */
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { HomeOutlined, FileTextOutlined, SettingOutlined } from '@ant-design/icons';
import './index.scss';

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
    getItem('My Note', 'my_note', <FileTextOutlined />),
    getItem('Navigation Three', 'sub4', <SettingOutlined />),
  ];
const Navigator = () => {
    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
    };

    return (
        <Menu
            onClick={onClick}
            defaultSelectedKeys={['home']}
            mode="inline"
            items={items}
        />
    )

}

export default Navigator;