/*
 * @Author: 李佳修
 * @Date: 2022-05-12 09:25:05
 * @LastEditTime: 2022-05-15 19:19:59
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/components/HeaderContent/index.tsx
 */
import React, { useState } from 'react';
import { Button, message } from 'antd';
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
    const [signOutLoading, setSignOutLoading] = useState(false);
    const userInfo = useSelector((state: any) => state.user.userInfo);

    const handleGotoLogin: () => void = () => {
        navigate('/login');
    }

    const handleGotoRegister: () => void = () => {
        navigate('/register');
    }

    const handleLogout = async () => {
        setSignOutLoading(true);
        const res = await dispatch(signOut() as any);
        if (res.meta.requestStatus === "fulfilled") {
            navigate('/home');
            window.location.reload();
        } else {
        message.error(res.error.message);
        }
    }
    return (
        <div className='header-content-main'>
            <Search placeholder="input search text" size='large' allowClear style={{ width: 400 }} />
            {
                userInfo ?
                (
                    <div className='header-content-operations'>
                        <Button
                            className='button'
                            type="primary"
                            onClick={handleLogout}
                            loading={signOutLoading}
                        >Sign out</Button>
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