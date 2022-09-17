import { Button, Card, Form, Input, Spin } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setToastStatus } from 'Store/modules/AlertToast';
import bg from '../../assets/bg.svg';
import loginCover from '../../assets/login-cover.svg';
import './ResetPassword.less';

export default function ResetPassword() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const resetPassword = async (data) => {
    await fetch('http://localhost:3001/admin/mailresetpwrequest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status === 'success') {
          dispatch(
            setToastStatus({
              value: 1,
              mess: 'Mật khẩu đã được gửi đến email của bạn !',
            })
          );
          navigate('/login');
        } else {
          if (data.status === 'fail') {
            const error = new Error(data.message);
            error.statusCode = 303;
            throw error;
          }
        }
      })
      .catch((err) => {
        dispatch(
          setToastStatus({
            value: 0,
            mess: err.message,
          })
        );
        navigate('/ResetPassword');
      });
  };

  const onFinish = (values) => {
    setIsLoading(true);
    resetPassword(values);
    setIsLoading(false);
  };

  const onFinishFailed = (errorInfo) => {};

  return (
    <Spin tip="Đang xử lí" size="large" spinning={isLoading}>
      <div
        className={'main'}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center',
          marginTop: -110,
        }}
      >
        <Card
          className={'reset-password-card'}
          cover={
            <img alt="example" src={loginCover} width="345px" height="118px" />
          }
        >
          <Form
            name="normal_login"
            className="login-form"
            layout={'vertical'}
            initialValues={{ remember: false }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Vui lòng nhập Email' }]}
            >
              <Input
                placeholder="Vui lòng nhập email"
                className={'login-input'}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button login-btn"
              >
                Cấp lại
              </Button>
            </Form.Item>
          </Form>
          <div
            style={{ width: '100%', textAlign: 'center', marginTop: '25px' }}
          >
            <Link to="/login">Quay lại trang đăng nhập</Link>
          </div>
        </Card>
      </div>
    </Spin>
  );
}
