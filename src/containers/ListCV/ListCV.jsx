import { Radio, Row } from 'antd';
import FormHeader from 'components/FormHeader';
import FileTextIcon from 'components/Icons/FileTextIcon';
import ListCVNone from 'components/ListCVNone/ListCVNone';
import ListCVPass from 'components/ListCVPass/ListCVPass';
import 'containers/ListCV/style/ListCV.less';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setToastStatus } from 'Store/modules/AlertToast';
import { getIsLogin } from 'Store/modules/Auth';
export default function ListCV() {
  const [typeTable, setTypeTable] = useState('none');
  const [fullDataPass, setFullDataPass] = useState([]);
  const [fullDataNone, setFullDataNone] = useState([]);
  const token = localStorage.getItem('Authorization');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeTable = (e) => {
    setTypeTable(e.target.value);
  };
  const selector = useSelector;
  const isLogin = selector(getIsLogin);
  useEffect(() => {
    if (!isLogin) navigate('/login');
  }, [isLogin]);
  const { id } = useParams();
  const [fullDataSource, setFullDataSource] = useState([]);

  const onChangePassCV = async (candidatecvid) => {
    await fetch(`http://localhost:3001/admin/setPassCV/${candidatecvid}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        setFullDataSource(data.data);
        dispatch(
          setToastStatus({ value: 1, mess: 'Cập nhật trạng thái thành công !' })
        );
      })
      .catch(() => {
        dispatch(
          setToastStatus({ value: 0, mess: 'Cập nhật trạng thái thất bại !' })
        );
      });
  };

  const onDeleteCV = async (candidatecvid) => {
    let jobs = await fetch(
      `http://localhost:3001/admin/deletecv/${candidatecvid}`,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: id,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          dispatch(setToastStatus({ value: 1, mess: 'Đã xóa CV !' }));
          return data.data;
        } else {
          if (data.status === 'fail') {
            const error = new Error(data.message);
            error.statusCode = 303;
            throw error;
          }
        }
      })
      .catch((err) => {
        dispatch(setToastStatus({ value: 1, mess: 'Thao tác thất bại !' }));
      });
    await setFullDataSource(jobs);
  };

  useEffect(() => {
    if (token !== null) getData();
    else navigate('/login');
  }, []);

  useEffect(() => {
    setData();
  }, [fullDataSource]);

  const getData = async () => {
    let jobs = await fetch('http://localhost:3001/admin/listcv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        return data.data;
      });
    await setFullDataSource(jobs);
  };

  const setData = async () => {
    let none = await fullDataSource.filter(function (data) {
      return data.status === 0;
    });
    let pass = await fullDataSource.filter(function (data) {
      return data.status === 1;
    });
    await setFullDataNone(none);
    await setFullDataPass(pass);
  };

  return (
    <div className="list-container">
      <Row style={{ marginBottom: '6.17px' }}>
        <FormHeader
          title={'Danh sách ứng tuyển'}
          icon={<FileTextIcon width="28" height="28" />}
        />
      </Row>
      <Row
        justify="space-between"
        align="middle"
        style={{ marginBottom: '20px', position: 'relative' }}
      >
        <div
          className="search-container"
          style={{ position: 'absolute', right: '0', top: '0', zIndex: 1 }}
        >
          <Radio.Group
            className={'hiragana-list-radio'}
            defaultValue="none"
            onChange={changeTable}
          >
            <Radio.Button value="none">Chưa duyệt</Radio.Button>
            <Radio.Button value="pass">Đã duyệt</Radio.Button>
          </Radio.Group>
        </div>
        {typeTable === 'none' ? (
          <ListCVNone
            fullDataSource={fullDataNone}
            onChangePassCV={onChangePassCV}
            onDeleteCV={onDeleteCV}
          />
        ) : (
          <ListCVPass fullDataSource={fullDataPass} onDeleteCV={onDeleteCV} />
        )}
      </Row>
    </div>
  );
}
