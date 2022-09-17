import { Button, Col, Dropdown, Form, Input, Layout, Modal, Row } from 'antd';
import PropTypes from 'prop-types';
import Logo from '../../assets/umat_logo.svg';
import ProfileIcon from 'components/Icons/ProfileIcon';
import SearchIcon from 'components/Icons/SearchIcon';
import './style/Navbar.less';
import UserDropdown from './UserDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getIsLogin, setIsLoginStatus } from 'Store/modules/Auth';
import { useEffect, useState } from 'react';
import { setToastStatus } from 'Store/modules/AlertToast';

const { Header } = Layout;

export default function Navbar({
  showBackdrop,
  stores,
  role,
  selectedStoreId,
  hasReservation,
  toNetReservationPage,
  goAccountList,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modal2Visible, setModal2Visible] = useState(false);
  const logout = () => {
    navigate('/login');
  };

  const changePass = async (values) => {
    await fetch('http://localhost:3001/admin/changepass', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...values,
        token: localStorage.getItem('Authorization'),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          dispatch(setToastStatus({ value: 1, mess: data.mess }));
        } else {
          if (data.status === 'fail') {
            dispatch(
              setToastStatus({
                value: 0,
                mess: data.message,
              })
            );
          }
        }
      })
      .catch((err) => {
        dispatch(setToastStatus({ value: 0, mess: err.message }));
      });
  };

  const onFinish = (values) => {
    changePass(values);
    setModal2Visible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  useEffect(() => {
    const token = localStorage.getItem('Authorization');
    if (token !== null) dispatch(setIsLoginStatus(true));
  }, []);
  return (
    <>
      <Header className="header">
        <Row style={{ justifyContent: 'space-between' }}>
          <Col xs={4} sm={4} md={6} lg={8} xl={6}>
            <div className="logo">
              <img src={Logo} height="54px" width="180px" alt="Umat Logo" />
            </div>
          </Col>
          <>
            <Col xs={4} sm={4} md={6} lg={8} xl={6}>
              <ul className="menu">
                <Dropdown
                  overlay={UserDropdown({
                    logout,
                    showBackdrop,
                    setModal2Visible,
                  })}
                  placement="bottomRight"
                  arrow
                  trigger={['click']}
                  onVisibleChange={showBackdrop}
                  overlayClassName={'menu-items-dropdown'}
                >
                  <li className="profile-icon">
                    <ProfileIcon />
                  </li>
                </Dropdown>
              </ul>
            </Col>
          </>
        </Row>
      </Header>
      <Modal
        title="Đổi mật khẩu"
        centered
        visible={modal2Visible}
        onOk={() => setModal2Visible(false)}
        onCancel={() => setModal2Visible(false)}
        footer={null}
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
            label="Mật khẩu cũ"
            name="oldpassword"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
          >
            <Input
              type="password"
              placeholder="Vui lòng nhập mật khẩu cũ"
              className={'login-input'}
              autoComplete={false}
            />
          </Form.Item>
          <Form.Item
            label="Mật khẩu mới"
            name="newpassword"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
          >
            <Input
              type="password"
              placeholder="Vui lòng nhập mật khẩu mới"
              className={'login-input'}
              autoComplete={false}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button login-btn"
            >
              Xác nhận
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

Navbar.propTypes = {
  showBackdrop: PropTypes.func,
  stores: PropTypes.array,
  role: PropTypes.string,
  selectedStoreId: PropTypes.any,
  logout: PropTypes.func,
  hasReservation: PropTypes.any,
  toNetReservationPage: PropTypes.func,
  goAccountList: PropTypes.func,
};
