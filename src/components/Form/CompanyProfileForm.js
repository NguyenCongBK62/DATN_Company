import { Col, Row } from 'antd';
import Label from 'components/Form/atoms/Label';
import SectionHeader from 'components/Form/atoms/SectionHeader';
import {
  FileUpload,
  Input,
  NumberInput,
  Select,
} from 'components/FormControllers';
import EditorArea from 'components/FormControllers/atoms/EditorArea';
import PropTypes from 'prop-types';
import './style/index.less';

function CompanyProfileForm({ control }) {
  return (
    <div className="form-wrapper">
      <Row className="form-section">
        <Col span={24}>
          <SectionHeader label={'Thông tin doanh nghiệp'} />
        </Col>

        <Col span={24} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Tên doanh nghiệp'} required={false} />
            <div
              className="reservation-input-name"
              style={{ flexWrap: 'wrap' }}
            >
              <div className="input-element" style={{ marginRight: 25 }}>
                <Input
                  control={control}
                  inputName="name"
                  inputProps={{ placeholder: 'Nhập thông tin' }}
                  width={'100%'}
                />
              </div>
            </div>
          </div>
        </Col>

        <Col span={12} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Địa chỉ công ty'} required={false} />
            <div
              className="reservation-input-name"
              style={{ flexWrap: 'wrap' }}
            >
              <div className="input-element" style={{ marginRight: 25 }}>
                <Input
                  control={control}
                  inputName="address"
                  inputProps={{ placeholder: 'Nhập thông tin' }}
                  width={'100%'}
                />
              </div>
            </div>
          </div>
        </Col>

        <Col span={12} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Số thành viên công ty'} required={false} />
            <div
              className="reservation-input-name"
              style={{ flexWrap: 'wrap' }}
            >
              <div className="input-element" style={{ marginRight: 25 }}>
                <NumberInput
                  control={control}
                  inputName={'memberquantity'}
                  defaultValue={null}
                  inputNumberProps={{
                    placeholder: 'Nhập thông tin',
                    min: 1,
                    max: 999999,
                  }}
                  width={'100%'}
                />
              </div>
            </div>
          </div>
        </Col>

        <Col span={12} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Lĩnh vực hoạt động'} required={false} />
            <div
              className="reservation-input-name"
              style={{ flexWrap: 'wrap' }}
            >
              <div className="input-element" style={{ marginRight: 25 }}>
                <Input
                  control={control}
                  inputName="field"
                  inputProps={{ placeholder: 'Nhập thông tin' }}
                  width={'100%'}
                />
              </div>
            </div>
          </div>
        </Col>

        <Col span={12} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Thời gian làm việc'} required={false} />
            <div
              className="input-element"
              style={{
                marginRight: 25,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Select
                control={control}
                inputName={'worktimestart'}
                width={'100%'}
                placeholder={'Từ'}
                Options={[
                  {
                    key: 'Monday',
                    label: 'Thứ 2',
                    disabled: '',
                  },
                  {
                    key: 'Tuesday',
                    label: 'Thứ 3',
                    disabled: '',
                  },
                  {
                    key: 'Wednesday',
                    label: 'Thứ 4',
                    disabled: '',
                  },
                  {
                    key: 'Thursday',
                    label: 'Thứ 5',
                    disabled: '',
                  },
                  {
                    key: 'Friday',
                    label: 'Thứ 6',
                    disabled: '',
                  },
                  {
                    key: 'Saturday',
                    label: 'Thứ 7',
                    disabled: '',
                  },
                  {
                    key: 'Sunday',
                    label: 'Chủ Nhật',
                    disabled: '',
                  },
                ]}
              />
              <Select
                control={control}
                inputName={'worktimeend'}
                width={'100%'}
                placeholder={'Đến'}
                Options={[
                  {
                    key: 'Monday',
                    label: 'Thứ 2',
                    disabled: '',
                  },
                  {
                    key: 'Tuesday',
                    label: 'Thứ 3',
                    disabled: '',
                  },
                  {
                    key: 'Wednesday',
                    label: 'Thứ 4',
                    disabled: '',
                  },
                  {
                    key: 'Thursday',
                    label: 'Thứ 5',
                    disabled: '',
                  },
                  {
                    key: 'Friday',
                    label: 'Thứ 6',
                    disabled: '',
                  },
                  {
                    key: 'Saturday',
                    label: 'Thứ 7',
                    disabled: '',
                  },
                  {
                    key: 'Sunday',
                    label: 'Chủ Nhật',
                    disabled: '',
                  },
                ]}
              />
            </div>
          </div>
        </Col>

        <Col span={12} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Thời gian OT tối đa (giờ/tháng)'} required={false} />
            <div
              className="reservation-input-name"
              style={{ flexWrap: 'wrap' }}
            >
              <div className="input-element" style={{ marginRight: 25 }}>
                <NumberInput
                  control={control}
                  inputName={'timeot'}
                  defaultValue={null}
                  inputNumberProps={{
                    placeholder: 'Nhập thông tin',
                    min: 0,
                    max: 30,
                  }}
                  width={'100%'}
                />
              </div>
            </div>
          </div>
        </Col>

        <Col span={12} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Thông điệp công ty'} required={false} />
            <div
              className="reservation-input-name"
              style={{ flexWrap: 'wrap' }}
            >
              <div className="input-element" style={{ marginRight: 25 }}>
                <Input
                  control={control}
                  inputName="slogan"
                  inputProps={{ placeholder: 'Nhập thông điệp công ty' }}
                  width={'100%'}
                />
              </div>
            </div>
          </div>
        </Col>

        <Col span={24} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Ảnh đại diện'} required={false} />
            <div className="input-element" style={{ marginRight: 25 }}>
              <FileUpload control={control} inputName={'logo'} />
            </div>
          </div>
        </Col>

        <Col span={24} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Giới thiệu công ty'} required={false} />
            <div className="input-element" style={{ marginRight: 25 }}>
              <EditorArea control={control} inputName={'description'} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

CompanyProfileForm.propTypes = {
  control: PropTypes.any,
};

export default CompanyProfileForm;
