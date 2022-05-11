/*
 * @Author: 李佳修
 * @Date: 2022-05-11 16:20:56
 * @LastEditTime: 2022-05-11 17:27:39
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/components/SiderContent/index.tsx
 */
import Navigator from '../Navigator';
import logo from '../../assets/logo.png';
import './index.scss';

const SiderContent = () => {
    return (
        <div className="sider-cotent-main">
            <div className='sider-cotnent-logo'>
                <img src={logo} alt='share note'/>
            </div>
            <Navigator />
        </div>
    )
};

export default SiderContent;