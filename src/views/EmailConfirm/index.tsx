/*
 * @Author: 李佳修
 * @Date: 2022-05-13 16:38:12
 * @LastEditTime: 2022-05-13 22:36:01
 * @LastEditors: Shen Shu
 * @FilePath: \Share-Note-Web\src\views\EmailConfirm\index.tsx
 */

import "./index.scss";

import { Button, Form, Input, message } from "antd";
import React, { useEffect } from "react";
import {
  emailConfirm,
  resendConfirmationCode,
} from "../../redux/slices/AuthSlice";
import { useLocation, useNavigate } from "react-router";

import Card from "../../components/Card";
import FlexBox from "../../components/FlexBox";
import { useDispatch } from "react-redux";

const EmailConfirm = (): React.ReactElement => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      dispatch(
        resendConfirmationCode({ username: (state as any).email }) as any
      ).then((res: any) => {
        if (res.meta.requestStatus === "fulfilled") {
          message.success("confimation code sent successfully");
        } else {
          message.error(res.error.message);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const onFinish = async (values: any) => {
    setIsLoading(true);
    const res = await dispatch(
      emailConfirm({
        username: values.email,
        authenticationCode: values.code,
      }) as any
    );
    setIsLoading(false);
    if (res.meta.requestStatus === "rejected") {
      message.error(res.error.message);
    }
    if (res.meta.requestStatus === "fulfilled") {
      message.success("Email has confirmed successfully!");
      navigate("/home");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="email-confirm-main">
      <FlexBox>
        <Card className="card-box">
          <div className="email-confirm-title">Email Confirm</div>
          <div className="email-confirm-form">
            <Form
              name="basic"
              labelWrap
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ email: (state as any)?.email }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="new-password"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Confirmation code"
                name="code"
                rules={[
                  {
                    required: true,
                    message: "Please input your confirmation code!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 9, span: 2 }}>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                  Confirm Email
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </FlexBox>
    </div>
  );
};

export default EmailConfirm;
