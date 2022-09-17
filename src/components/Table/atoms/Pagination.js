import React from 'react';
import PropTypes from 'prop-types';
import '../style/Table.less';

import { Pagination as AntPagination } from 'antd';

export default function Pagination({ totalItems, onChange, currentPage }) {
  return (
    <AntPagination
      className={'pagination'}
      currentPage={currentPage}
      onChange={(page, pageSize) => {
        onChange(page);
      }}
      total={totalItems}
      showTotal={(total, range) => {
        return `${range[0]}〜${range[1]}bản ghi（Trong tổng ${totalItems} bản ghi）`;
      }}
      defaultPageSize={10}
      defaultCurrent={1}
      showSizeChanger={false}
    />
  );
}

Pagination.propTypes = {
  totalItems: PropTypes.number,
  onChange: PropTypes.func,
  currentPage: PropTypes.any,
};
