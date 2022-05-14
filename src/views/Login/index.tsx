/*
 * @Author: 李佳修
 * @Date: 2022-05-13 16:38:12
 * @LastEditTime: 2022-05-13 21:57:07
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/views/Login/index.tsx
 */
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Card from '../../components/Card';
import FlexBox from '../../components/FlexBox';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/slices/AuthSlice';
import './index.scss';

const Login = (): React.ReactElement => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = async (values: any) => {
        setIsLoading(true);
        const res = await dispatch(signIn({
            email: values.username,
            password: values.password
        }) as any);
        setIsLoading(false);
        if (res.meta.requestStatus === 'rejected') {
            if (res.error.code === 'UserNotConfirmedException') {
                navigate(
                    '/email-confirm',
                    { 
                        replace: false,
                        state:{ email: res.meta.arg.email}
                    }
                );
                message.warning(res.error.message);
            } else {
                message.error(res.error.message);
            }
        }
        if (res.meta.requestStatus === 'fulfilled') {
            message.success('Logged in successfully!');
            navigate('/home');
        }
    };
    
    return (
        <div className='login-main'>
            <FlexBox>
                <Card className='card-box'>
                    <div className='login-title'>Login</div>
                    <div className='login-form-container'>
                        <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username/Email" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="/register">
                                    Forgot password
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
                                    Log in
                                </Button>
                                <div className='register-now'>
                                    Or <a href="/register">register now!</a>
                                </div>
                            </Form.Item>
                        </Form>
                    </div>
                </Card>
            </FlexBox>
        </div>
    );
}

export default Login;