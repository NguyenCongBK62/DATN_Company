import { useForm } from 'react-hook-form';

import { Col, Row } from 'antd';

import DataSidePreview from 'components/DataSidePreview';
import CompanyProfileForm from 'components/Form/CompanyProfileForm';
import FormHeader from 'components/FormHeader/index';
import SettingsIcon from 'components/Icons/SettingsIcon';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLogin } from 'Store/modules/Auth';
import { setToastStatus } from 'Store/modules/AlertToast';
import { logout } from 'helper/AuthHelper';

export default function CompanyProfile() {
  const methods = useForm({
    mode: 'onSubmit',
  });
  const { handleSubmit, control, setValue, watch } = methods;
  const [profile, setProfile] = useState({});
  const token = localStorage.getItem('Authorization');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selector = useSelector;
  const isLogin = selector(getIsLogin);
  useEffect(() => {
    if (!isLogin) navigate('/login');
  }, [isLogin]);
  useEffect(() => {
    if (token !== null) {
      fetch('http://localhost:3001/admin/getprofile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: token }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'success') {
            setProfile(data.data);
          } else {
            if (data.status === 'fail') {
              const error = new Error(data.message);
              error.statusCode = 303;
              throw error;
            }
          }
        })
        .catch((error) => {
          dispatch(
            setToastStatus({
              value: 0,
              mess: error.message,
            })
          );
        });
    } else navigate('/login');
  }, []);

  useEffect(() => {
    setValue('address', profile.address);
    setValue('description', profile.description);
    setValue('field', profile.field);
    setValue('logo', profile.logo);
    setValue('memberquantity', profile.memberquantity);
    setValue('name', profile.name);
    setValue('slogan', profile.slogan);
    setValue('timeot', profile.timeot);
    setValue('worktimeend', profile.worktimeend);
    setValue('worktimestart', profile.worktimestart);
  }, [profile]);

  const onCancel = () => {
    navigate(-1);
  };

  const dataPreview = [
    {
      heading: 'Nội dung',
      items: [
        {
          label: 'Tên công ty',
          value: (watcher) => {
            const v = watcher.name ? `${watcher.name}` : '';
            return v || '';
          },
        },
        {
          label: 'Địa chỉ',
          value: (watcher) => {
            const v = watcher.address ? `${watcher.address}` : '';
            return v || '';
          },
        },
        {
          label: 'Số nhân viên',
          value: (watcher) => {
            const v = watcher.memberquantity ? `${watcher.memberquantity}` : '';
            return v || '';
          },
        },
        {
          label: 'Lĩnh vực',
          value: (watcher) => {
            const v = watcher.field ? `${watcher.field}` : '';
            return v || '';
          },
        },
        {
          label: 'Thời gian làm việc',
          value: (watcher) => {
            const v =
              watcher.worktimestart && watcher.worktimeend
                ? `${watcher.worktimestart} ~ ${watcher.worktimeend}`
                : '';
            return v || '';
          },
        },
        {
          label: 'Thời gian OT',
          value: (watcher) => {
            const v = watcher.timeot ? `${watcher.timeot}` : '';
            return v || '';
          },
        },
        {
          label: 'Thông điệp',
          value: (watcher) => {
            const v = watcher.slogan ? `${watcher.slogan}` : '';
            return v || '';
          },
        },
        {
          label: 'Ảnh đại diện',
          value: (watcher) => {
            const v = watcher.logo ? `${watcher.logo}` : '';
            return v || '';
          },
        },
        {
          label: 'Giới thiệu công ty',
          value: (watcher) => {
            const v = watcher.desciption ? `đã nhập` : 'chưa nhập';
            return v || '';
          },
        },
      ],
    },
  ];

  const onSubmit = (data) => {
    if (data.name === '' || data.name === undefined) {
      dispatch(setToastStatus({ value: 0, mess: 'Mời nhập tên công ty!' }));
      return false;
    }
    if (data.address === '' || data.address === undefined) {
      dispatch(setToastStatus({ value: 0, mess: 'Mời nhập địa chỉ công ty!' }));
      return false;
    }
    if (data.memberquantity === '' || data.memberquantity === undefined) {
      dispatch(
        setToastStatus({ value: 0, mess: 'Mời nhập số nhân viên của công ty!' })
      );
      return false;
    }
    if (data.field === '' || data.field === undefined) {
      dispatch(
        setToastStatus({ value: 0, mess: 'Mời nhập lĩnh vực công ty!' })
      );
      return false;
    }
    if (data.worktimestart === '' || data.worktimestart === undefined) {
      dispatch(
        setToastStatus({
          value: 0,
          mess: 'Mời nhập thời gian bắt đầu làm trong tuần của công ty!',
        })
      );
      return false;
    }
    if (data.worktimeend === '' || data.worktimeend === undefined) {
      dispatch(
        setToastStatus({
          value: 0,
          mess: 'Mời nhập thời gian kết thúc làm trong tuần của công ty!',
        })
      );
      return false;
    }
    if (data.timeot === '' || data.timeot === undefined) {
      dispatch(
        setToastStatus({
          value: 0,
          mess: 'Mời nhập thời gian làm thêm tối đa trong tháng của công ty!',
        })
      );
      return false;
    }
    if (data.logo === '' || data.logo === undefined) {
      dispatch(
        setToastStatus({ value: 0, mess: 'Mời nhập ảnh đại diện của công ty!' })
      );
      return false;
    }
    if (data.slogan === '' || data.logo === undefined) {
      dispatch(
        setToastStatus({ value: 0, mess: 'Mời nhập slogan của công ty!' })
      );
      return false;
    }
    if (data.desciption === '' || data.logo === undefined) {
      dispatch(
        setToastStatus({
          value: 0,
          mess: 'Mời mô tả ngắn về công ty!',
        })
      );
      return false;
    }
    let token = localStorage.getItem('Authorization');
    console.log(data);
    data = { ...data, token };
    fetch('http://localhost:3001/admin/companyprofile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          setProfile(data.data);
          dispatch(
            setToastStatus({
              value: 1,
              mess: 'Chỉnh sửa đã được lưu trữ!',
            })
          );
          navigate(-1);
        } else {
          if (data.status === 'fail') {
            const error = new Error(data.message);
            error.statusCode = 303;
            throw error;
          }
        }
      })
      .catch((err) => {
        logout();
        dispatch(setToastStatus({ value: 0, mess: err.message }));
        navigate('/login');
      });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <FormHeader
        title={'Thông tin doanh nghiệp'}
        icon={<SettingsIcon width={'30'} height={'30'} type={'lg'} />}
      />
      <Row wrap={false}>
        <Col flex="auto">
          <CompanyProfileForm control={control} />
        </Col>
        <DataSidePreview
          data={dataPreview}
          control={control}
          onCancel={onCancel}
          title={'Xem nhanh nội dung'}
          submitButtonTitle={'Lưu'}
          isEdit={false}
        />
      </Row>
    </form>
  );
}
