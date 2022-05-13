/*
 * @Author: 李佳修
 * @Date: 2022-05-13 16:38:12
 * @LastEditTime: 2022-05-13 18:08:52
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/views/Register/index.tsx
 */
import React from 'react';
import { Form, Input, Button } from 'antd';
import Card from '../../components/Card';
import FlexBox from '../../components/FlexBox';
import './index.scss';

const Register = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='register-main'>
            <FlexBox>
                <Card className='card-box'>
                    <div className='register-title'>Register</div>
                    <div className='register-form'>
                        <Form
                            name="basic"
                            labelWrap
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="new-password"
                        >
                             <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                      type: 'email',
                                      message: 'The input is not valid E-mail!',
                                    },
                                    {
                                      required: true,
                                      message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 9, span: 2 }}>
                                <Button type="primary" htmlType="submit">
                                    Register
                                </Button>
                            </Form.Item>
                            <div className='go-to-login'>
                                Or <a href="/login">Login</a>
                            </div>
                        </Form>
                    </div>
                </Card>
            </FlexBox>
        </div>
    );
}

export default Register;