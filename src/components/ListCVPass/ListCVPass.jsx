import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Col, Modal } from 'antd';
import FileTextIcon from 'components/Icons/FileTextIcon';
import TrashIcon from 'components/Icons/TrashIcon';
import Table from 'components/Table/Table';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
const { confirm } = Modal;
export default function ListCVPass({ fullDataSource, onDeleteCV }) {
  const [dataSource, setDataSource] = useState([]);
  const customStyles = {
    cursor: 'pointer',
  };

  const handleDataSource = (newData) => {
    setDataSource(newData);
  };

  const showDeleteConfirm = (id) => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      title: 'Xác nhận',
      content: 'Bạn có muốn xóa bản ghi này không？',
      okText: 'Xóa',
      okType: 'danger',
      cancelText: 'Hủy',
      centered: true,
      onOk() {
        onDeleteCV(id);
      },
      onCancel() {},
    });
  };

  const columns = [
    {
      title: 'Tên ứng viên',
      dataIndex: 'candidatefullname',
      width: 200,
    },
    {
      title: 'Gmail',
      dataIndex: 'email',
      width: 200,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      width: 200,
    },
    {
      title: 'Xem CV',
      dataIndex: 'linkcv',
      width: 70,
      render: function renderDeleteIcon(_, record) {
        console.log(record.linkcv);
        return dataSource.length >= 1 ? (
          <a href={record.linkcv} target="_blank">
            <FileTextIcon customeStyles={customStyles} />
          </a>
        ) : null;
      },
    },
    {
      title: 'Xóa',
      dataIndex: 'delete',
      width: 70,
      render: function renderDeleteIcon(_, record) {
        return dataSource.length >= 1 ? (
          <div
            onClick={() => showDeleteConfirm(record.id)}
            style={customStyles}
          >
            <TrashIcon customeStyles={customStyles} />
          </div>
        ) : null;
      },
    },
  ];

  useEffect(() => {
    setDataSource(fullDataSource);
  }, [fullDataSource]);

  return (
    <Col span={24}>
      <Table
        data={dataSource}
        columns={columns}
        handleDataSource={handleDataSource}
        fullDataSource={fullDataSource}
        emptyText={'Không có bản ghi nào'}
        placeholder={'Tìm kiếm theo từ khóa'}
        scrollX={800}
        scrollY={886}
        totalItems={dataSource.length}
      />
    </Col>
  );
}
ListCVPass.propTypes = {
  fullDataSource: PropTypes.array,
  onDeleteCV: PropTypes.func,
};
