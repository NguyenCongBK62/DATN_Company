import { Col, Divider, Menu, Row } from 'antd';
import Heading from 'components/Heading';
import LogoutIcon from 'components/Icons/LogoutIcon';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setIsLoginStatus } from 'Store/modules/Auth';

export default function UserDropdown({
  logout,
  showBackdrop,
  setModal2Visible,
}) {
  const dispatch = useDispatch();
  const logOutClick = () => {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
  };
  return (
    <Menu className="user-dropdown">
      <Menu.Item onClick={showBackdrop}>
        <Heading>
          Tên đăng nhập: {`${localStorage.getItem('username')}`}
        </Heading>
      </Menu.Item>
      <Menu.Item onClick={showBackdrop}>
        <Divider />
        <p style={{ cursor: 'text' }}>
          Email: {`${localStorage.getItem('email')}`}
        </p>
      </Menu.Item>
      <Menu.Item onClick={() => setModal2Visible(true)}>
        <Divider />
        <p style={{ cursor: 'pointer' }}>Đổi mật khẩu</p>
        <Divider />
      </Menu.Item>
      <Menu.Item onClick={logout}>
        <Row>
          <Col style={{ margin: '16px 5px 0 0' }}>
            <LogoutIcon />
          </Col>
          <Col>
            <p
              onClick={async () => {
                await dispatch(setIsLoginStatus(false));
                logOutClick();
                logout();
              }}
            >
              Đăng xuất
            </p>
          </Col>
        </Row>
      </Menu.Item>
    </Menu>
  );
}

UserDropdown.propTypes = {
  logout: PropTypes.func,
  showBackdrop: PropTypes.func,
  setModal2Visible: PropTypes.func,
};
