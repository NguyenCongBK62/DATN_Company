import React from 'react';
import { Card, Row, Col, Affix } from 'antd';
import PropTypes from 'prop-types';
import 'components/DataSidePreview/style/index.less';
import { useWatch } from 'react-hook-form';
import { DeleteFilled } from '@ant-design/icons';

function RenderDataItem({ item, control, key }) {
  const watcher = useWatch({
    control,
    defaultValue: '',
  });
  const { label, value, show = true } = item;
  return show ? (
    <Row key={key}>
      <Col span={9}>
        <div className="data-preview-label">{label}</div>
      </Col>
      <Col span={15}>
        <p className="data-preview-value">{value(watcher)}</p>
      </Col>
    </Row>
  ) : null;
}

function DataSidePreview({
  data,
  control,
  title,
  submitButtonTitle = 'Lưu',
  onCancel = () => {},
  isEdit = false,
  deleteHandler,
}) {
  return (
    <>
      <Col className="detail-view" flex="360px">
        <Affix offsetTop={120}>
          <div className="data-side-preview">
            <Card
              title={title}
              headStyle={{
                fontSize: '16px',
                fontWeight: 700,
                textAlign: 'center',
                color: '#fff',
                backgroundColor: '#121958',
              }}
              extra={
                isEdit ? (
                  <DeleteFilled
                    style={{ color: 'white', cursor: 'pointer' }}
                    onClick={deleteHandler}
                    width="16"
                    height="16"
                  />
                ) : null
              }
            >
              {data.map(({ heading, items }, index) => {
                return (
                  <div className="data-side-section" key={`data-row-${index}`}>
                    <div className="data-side-section-header">{heading}</div>
                    <div className="data-side-section-preview">
                      {items.map((item, index) => (
                        <RenderDataItem
                          key={`data-${index}`}
                          item={item}
                          control={control}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </Card>
            <Row justify="space-between" style={{ paddingTop: 20 }}>
              <button
                onClick={() => onCancel()}
                type="button"
                className="button button-default button-default-2"
              >
                Hủy
              </button>

              <button
                type="submit"
                className="button button-primary button-primary-2"
              >
                {submitButtonTitle}
              </button>
            </Row>
          </div>
        </Affix>
      </Col>
      <Row justify="space-between" className="detail-view-responsive-btn">
        <button
          onClick={() => {
            console.log(777);
          }}
          type="button"
          className="button button-default button-default-2"
        >
          Hủy
        </button>

        <button
          type="submit"
          className="button button-primary button-primary-2"
        >
          {submitButtonTitle}
        </button>
      </Row>
    </>
  );
}

DataSidePreview.propTypes = {
  data: PropTypes.array.isRequired,
  control: PropTypes.any,
  title: PropTypes.string,
  submitButtonTitle: PropTypes.string,
  onCancel: PropTypes.func,
  isEdit: PropTypes.bool,
  deleteHandler: PropTypes.func,
};

RenderDataItem.propTypes = {
  control: PropTypes.any,
  item: PropTypes.object,
  key: PropTypes.string,
};

export default DataSidePreview;
