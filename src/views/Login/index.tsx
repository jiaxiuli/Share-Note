/*
 * @Author: 李佳修
 * @Date: 2022-05-13 16:38:12
 * @LastEditTime: 2022-05-13 17:30:52
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/views/Login/index.tsx
 */
import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Card from '../../components/Card';
import FlexBox from '../../components/FlexBox';
import './index.scss';

const Login = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
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
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                                <Button type="primary" htmlType="submit" className="login-form-button">
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