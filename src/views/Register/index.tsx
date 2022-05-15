/*
 * @Author: 李佳修
 * @Date: 2022-05-13 16:38:12
 * @LastEditTime: 2022-05-15 14:06:44
 * @LastEditors: 李佳修
 * @FilePath: /Share-Note/src/views/Register/index.tsx
 */
import React from 'react';
import { Form, Input, Button, message } from 'antd';
import Card from '../../components/Card';
import FlexBox from '../../components/FlexBox';
import { signUp } from '../../redux/slices/AuthSlice';
import { createNewUser } from '../../redux/slices/UserSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import './index.scss';

const Register = (): React.ReactElement => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish = async (values: any) => {
        setIsLoading(true);
        const res = await dispatch(signUp({
            username: values.email,
            password: values.password,
            email: values.email
        }) as any);
        if (res.meta.requestStatus === 'rejected') {
            message.error(res.error.message);
        }
        if (res.meta.requestStatus === 'fulfilled') {
            const createUserInput = {
                id: res.payload.userSub,
                email: res.meta.arg.email,
                username: res.meta.arg.username,
                user_sub_id: res.payload.userSub,
                user_pool_id: res.payload.user.pool.userPoolId
            };
            // 注册成功 在user表中写入新的user信息
            const createRes = await dispatch(createNewUser({createUserInput}) as any);
            if (createRes.meta.requestStatus === 'fulfilled') {
                message.success('Signed up successfully!');
                navigate('/email-confirm');
            } else {
                message.error(res.error.message);
            }
        }
        setIsLoading(false);
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
                                label="Password"
                                name="password"
                                rules={[
                                    { 
                                        required: true,
                                        message: 'Please input your password!' 
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            const result = value.match(/^.*[A-Z]+.*$/);
                                            if (!value || result) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('Password must contain uppercase letters'));
                                        },
                                    }),
                                ]}
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
                                <Button type="primary" htmlType="submit" loading={isLoading}>
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