/*
 * @Author: 李佳修
 * @Date: 2022-05-12 09:25:05
 * @LastEditTime: 2022-05-15 14:09:53
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/components/HeaderContent/index.tsx
 */
import React from 'react';
import { Button } from 'antd';
import { Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/slices/AuthSlice';
import './index.scss';

const { Search } = Input;

const HeaderContent = (): React.ReactElement => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector((state: any) => state.user.userInfo);

    const handleGotoLogin: () => void = () => {
        navigate('/login');
    }

    const handleGotoRegister: () => void = () => {
        navigate('/register');
    }

    const handleLogout = () => {
        dispatch(signOut() as any);
    }
    return (
        <div className='header-content-main'>
            <Search placeholder="input search text" size='large' allowClear style={{ width: 400 }} />
            {
                userInfo ?
                (
                    <div className='header-content-operations'>
                        <Button className='button' type="primary" onClick={handleLogout}>Log out</Button>
                    </div>
                ) : (
                    <div className='header-content-operations'>
                        <Button className='button' type="primary" onClick={handleGotoLogin}>Login</Button>
                        <Button className='button' type="default" onClick={handleGotoRegister}>Register</Button>
                    </div>
                )
            }
        </div>
    )
}

export default HeaderContent;