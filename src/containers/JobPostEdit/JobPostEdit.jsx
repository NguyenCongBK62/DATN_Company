import { useForm } from 'react-hook-form';

import { Col, Row } from 'antd';

import DataSidePreview from 'components/DataSidePreview';
import JobForm from 'components/Form/JobForm';
import FormHeader from 'components/FormHeader/index';
import EditIcon from 'components/Icons/EditIcon';
import 'containers/JobPostEdit/style/JobPostEdit.less';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { setToastStatus } from 'Store/modules/AlertToast';
import { getIsLogin } from 'Store/modules/Auth';

export default function JobPostEdit() {
  const methods = useForm({
    mode: 'onSubmit',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, control, setValue, watch } = methods;
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState({});
  const selector = useSelector;
  const isLogin = selector(getIsLogin);
  useEffect(() => {
    if (!isLogin) navigate('/login');
  }, [isLogin]);
  useEffect(() => {
    let token = localStorage.getItem('Authorization');
    if (id) {
      fetch('http://localhost:3001/admin/getjob', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: parseInt(id), token: token }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setJobDetails(data);
          } else {
            dispatch(
              setToastStatus({
                value: 0,
                mess: 'Chỉnh sửa dữ liệu không thành công!',
              })
            );
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch(
            setToastStatus({
              value: 0,
              mess: 'Chỉnh sửa dữ liệu không thành công!',
            })
          );
        });
    }
  }, []);

  useEffect(() => {
    if (id) {
      setValue('jobtitle', jobDetails.jobtitle);
      setValue('techskill', jobDetails.techSkills);
      setValue('languageskill', jobDetails.languageSkills);
      setValue('position', jobDetails.position);
      setValue('salary', jobDetails.salary);
      setValue('amount', jobDetails.amount);
      setValue('worksplace', jobDetails.worksplace);
      setValue('worktime', jobDetails.worktime);
      setValue('jobdesrciption', jobDetails.jobdesrciption);
    }
  }, [jobDetails]);

  const dataPreview = [
    {
      heading: 'Nội dung',
      items: [
        {
          label: 'Tiêu đề',
          value: (watcher) => {
            const v = watcher.jobtitle ? `${watcher.jobtitle}` : '';
            return v || '';
          },
        },
        {
          label: 'Công nghệ',
          value: (watcher) => {
            const v = watcher.techskill
              ? `${watcher.techskill.join(', ')}`
              : '';
            return v || '';
          },
        },
        {
          label: 'Ngoại ngữ',
          value: (watcher) => {
            const v = watcher.languageskill
              ? `${watcher.languageskill.join(', ')}`
              : '';
            return v || '';
          },
        },
        {
          label: 'Cấp bậc',
          value: (watcher) => {
            const v = watcher.position ? `${watcher.position}` : '';
            return v || '';
          },
        },
        {
          label: 'Mức lương',
          value: (watcher) => {
            const v = watcher.salary ? `${watcher.salary}` : '';
            return v || '';
          },
        },
        {
          label: 'Số lượng tuyển',
          value: (watcher) => {
            const v = watcher.amount ? `${watcher.amount}` : '';
            return v || '';
          },
        },
        {
          label: 'Nơi làm việc',
          value: (watcher) => {
            const v = watcher.worksplace ? `${watcher.worksplace}` : '';
            return v || '';
          },
        },
        {
          label: 'Loại công việc',
          value: (watcher) => {
            const v = watcher.worktime ? `${watcher.worktime}` : '';
            return v || '';
          },
        },
        {
          label: 'Mô tả chi tiết',
          value: (watcher) => {
            const v = watcher.jobdesrciption ? `${watcher.jobdesrciption}` : '';
            return v || '';
          },
        },
      ],
    },
  ];

  const onCancel = () => {
    navigate(-1);
  };

  const onSubmit = async (data) => {
    if (data.jobtitle === '' || data.jobtitle === undefined) {
      dispatch(
        setToastStatus({ value: 0, mess: 'mời nhập tiêu đề tuyển dụng!' })
      );
      return false;
    }
    if (data.techskill === '' || data.techskill === undefined) {
      dispatch(
        setToastStatus({
          value: 0,
          mess: 'Mời nhập thông tin về lĩnh vực công nghệ!',
        })
      );
      return false;
    }
    if (data.languageskill === '' || data.languageskill === undefined) {
      dispatch(
        setToastStatus({ value: 0, mess: 'Mời nhập thông tin về ngoại ngữ!' })
      );
      return false;
    }
    if (data.position === '' || data.position === undefined) {
      dispatch(
        setToastStatus({
          value: 0,
          mess: 'Mời nhập thông tin về vị trí làm việc!',
        })
      );
      return false;
    }
    if (data.salary === '' || data.salary === undefined) {
      dispatch(
        setToastStatus({
          value: 0,
          mess: 'Mời nhập thông tin về lương!!',
        })
      );
      return false;
    }
    if (data.amount === '' || data.amount === undefined) {
      dispatch(
        setToastStatus({
          value: 0,
          mess: 'Mời nhập thông tin về số lượng tuyển!',
        })
      );
      return false;
    }
    if (data.worksplace === '' || data.worksplace === undefined) {
      dispatch(
        setToastStatus({
          value: 0,
          mess: 'Mời nhập thông tin về nơi làm việc!',
        })
      );
      return false;
    }
    if (data.worktime === '' || data.worktime === undefined) {
      dispatch(
        setToastStatus({
          value: 0,
          mess: 'Mời nhập thông tin về thời gian làm việc!',
        })
      );
      return false;
    }
    if (data.jobdesrciption === '' || data.jobdesrciption === undefined) {
      dispatch(
        setToastStatus({
          value: 0,
          mess: 'Mời nhập thông tin về mô tả chi tiết!',
        })
      );
      return false;
    }
    let token = localStorage.getItem('Authorization');
    data = { ...data, token, id };
    await fetch('http://localhost:3001/admin/post-job', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        dispatch(
          setToastStatus({ value: 1, mess: 'Cập nhật dữ liệu thành công !' })
        );
        navigate('/jobmanager');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <FormHeader
        title={id ? 'Chỉnh sửa bài đăng' : 'Thêm bài đăng'}
        icon={
          <EditIcon
            width={'30'}
            height={'30'}
            minX={'-10'}
            minY={'-8'}
            type={'lg'}
            customStyles={{
              margin: 'auto',
            }}
          />
        }
      />
      <Row wrap={false}>
        <Col flex="auto">
          <JobForm control={control} />
        </Col>
        <DataSidePreview
          data={dataPreview}
          onCancel={onCancel}
          control={control}
          title={'Xem nhanh nội dung'}
          submitButtonTitle={'Lưu'}
          isEdit={false}
        />
      </Row>
    </form>
  );
}
