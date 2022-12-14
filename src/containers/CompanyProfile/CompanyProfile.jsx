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
      heading: 'N???i dung',
      items: [
        {
          label: 'T??n c??ng ty',
          value: (watcher) => {
            const v = watcher.name ? `${watcher.name}` : '';
            return v || '';
          },
        },
        {
          label: '?????a ch???',
          value: (watcher) => {
            const v = watcher.address ? `${watcher.address}` : '';
            return v || '';
          },
        },
        {
          label: 'S??? nh??n vi??n',
          value: (watcher) => {
            const v = watcher.memberquantity ? `${watcher.memberquantity}` : '';
            return v || '';
          },
        },
        {
          label: 'L??nh v???c',
          value: (watcher) => {
            const v = watcher.field ? `${watcher.field}` : '';
            return v || '';
          },
        },
        {
          label: 'Th???i gian l??m vi???c',
          value: (watcher) => {
            const v =
              watcher.worktimestart && watcher.worktimeend
                ? `${watcher.worktimestart} ~ ${watcher.worktimeend}`
                : '';
            return v || '';
          },
        },
        {
          label: 'Th???i gian OT',
          value: (watcher) => {
            const v = watcher.timeot ? `${watcher.timeot}` : '';
            return v || '';
          },
        },
        {
          label: 'Th??ng ??i???p',
          value: (watcher) => {
            const v = watcher.slogan ? `${watcher.slogan}` : '';
            return v || '';
          },
        },
        {
          label: '???nh ?????i di???n',
          value: (watcher) => {
            const v = watcher.logo ? `${watcher.logo}` : '';
            return v || '';
          },
        },
        {
          label: 'Gi???i thi???u c??ng ty',
          value: (watcher) => {
            const v = watcher.desciption ? `???? nh???p` : 'ch??a nh???p';
            return v || '';
          },
        },
      ],
    },
  ];

  const onSubmit = (data) => {
    if (data.name === '' || data.name === undefined) {
      dispatch(setToastStatus({ value: 0, mess: 'M???i nh???p t??n c??ng ty!' }));
      return false;
    }
    if (data.address === '' || data.address === undefined) {
      dispatch(setToastStatus({ value: 0, mess: 'M???i nh???p ?????a ch??? c??ng ty!' }));
      return false;
    }
    if (data.memberquantity === '' || data.memberquantity === undefined) {
      dispatch(
        setToastStatus({ value: 0, mess: 'M???i nh???p s??? nh??n vi??n c???a c??ng ty!' })
      );
      return false;
    }
    if (data.field === '' || data.field === undefined) {
      dispatch(
        setToastStatus({ value: 0, mess: 'M???i nh???p l??nh v???c c??ng ty!' })
      );
      return false;
    }
    if (data.worktimestart === '' || data.worktimestart === undefined) {
      dispatch(
        setToastStatus({
          value: 0,
          mess: 'M???i nh???p th???i gian b???t ?????u l??m trong tu???n c???a c??ng ty!',
        })
      );
      return false;
    }
    if (data.worktimeend === '' || data.worktimeend === undefined) {
      dispatch(
        setToastStatus({
          value: 0,
          mess: 'M???i nh???p th???i gian k???t th??c l??m trong tu???n c???a c??ng ty!',
        })
      );
      return false;
    }
    if (data.timeot === '' || data.timeot === undefined) {
      dispatch(
        setToastStatus({
          value: 0,
          mess: 'M???i nh???p th???i gian l??m th??m t???i ??a trong th??ng c???a c??ng ty!',
        })
      );
      return false;
    }
    if (data.logo === '' || data.logo === undefined) {
      dispatch(
        setToastStatus({ value: 0, mess: 'M???i nh???p ???nh ?????i di???n c???a c??ng ty!' })
      );
      return false;
    }
    if (data.slogan === '' || data.logo === undefined) {
      dispatch(
        setToastStatus({ value: 0, mess: 'M???i nh???p slogan c???a c??ng ty!' })
      );
      return false;
    }
    if (data.desciption === '' || data.logo === undefined) {
      dispatch(
        setToastStatus({
          value: 0,
          mess: 'M???i m?? t??? ng???n v??? c??ng ty!',
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
              mess: 'Ch???nh s???a ???? ???????c l??u tr???!',
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
        title={'Th??ng tin doanh nghi???p'}
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
          title={'Xem nhanh n???i dung'}
          submitButtonTitle={'L??u'}
          isEdit={false}
        />
      </Row>
    </form>
  );
}
