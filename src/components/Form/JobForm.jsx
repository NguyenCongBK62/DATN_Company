import { Col, Row } from 'antd';
import Label from 'components/Form/atoms/Label';
import SectionHeader from 'components/Form/atoms/SectionHeader';
import {
  FileUpload,
  Input,
  NumberInput,
  RadioButton,
  Select,
} from 'components/FormControllers';
import EditorArea from 'components/FormControllers/atoms/EditorArea';
import SelectTag from 'components/FormControllers/atoms/SelectTag';
import PropTypes from 'prop-types';
import './style/index.less';

function JobForm({ control }) {
  return (
    <div className="form-wrapper">
      <Row className="form-section">
        <Col span={24}>
          <SectionHeader label={'Tạo mới bài đăng'} />
        </Col>

        <Col span={24} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Tiêu đề'} required={false} />
            <div
              className="reservation-input-name"
              style={{ flexWrap: 'wrap' }}
            >
              <div className="input-element" style={{ marginRight: 25 }}>
                <Input
                  control={control}
                  inputName="jobtitle"
                  inputProps={{ placeholder: 'Nhập tiêu đề' }}
                  width={'100%'}
                />
              </div>
            </div>
          </div>
        </Col>

        <Col span={12} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Yêu cầu công nghệ'} required={false} />
            <div className="input-element" style={{ marginRight: 25 }}>
              <SelectTag
                control={control}
                inputName={'techskill'}
                width={'100%'}
                placeholder={'Nhập thông tin'}
                Options={[
                  {
                    key: 'ReactJS',
                    label: 'ReactJS',
                    disabled: '',
                  },
                  {
                    key: 'PHP',
                    label: 'PHP',
                    disabled: '',
                  },
                  {
                    key: 'NodeJs',
                    label: 'NodeJs',
                    disabled: '',
                  },
                ]}
              />
            </div>
          </div>
        </Col>

        <Col span={12} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Yêu cầu ngoại ngữ'} required={false} />
            <div className="input-element" style={{ marginRight: 25 }}>
              <SelectTag
                control={control}
                inputName={'languageskill'}
                width={'100%'}
                placeholder={'Nhập thông tin'}
                Options={[
                  {
                    key: 'English',
                    label: 'Tiếng Anh',
                    disabled: '',
                  },
                  {
                    key: 'Japanese',
                    label: 'Tiếng Nhật',
                    disabled: '',
                  },
                  {
                    key: 'Korean',
                    label: 'Tiếng Hàn',
                    disabled: '',
                  },
                ]}
              />
            </div>
          </div>
        </Col>

        <Col span={12} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Cấp bậc'} required={false} />
            <div className="input-element" style={{ marginRight: 25 }}>
              <SelectTag
                control={control}
                inputName={'position'}
                width={'100%'}
                placeholder={'Nhập thông tin'}
                Options={[
                  {
                    key: 'Fresher',
                    label: 'Fresher',
                    disabled: '',
                  },
                  {
                    key: 'Junior',
                    label: 'Junior',
                    disabled: '',
                  },
                  {
                    key: 'Senior',
                    label: 'Senior',
                    disabled: '',
                  },
                  {
                    key: 'Leader',
                    label: 'Leader',
                    disabled: '',
                  },
                  {
                    key: 'BA',
                    label: 'BA',
                    disabled: '',
                  },
                  {
                    key: 'QA',
                    label: 'QA',
                    disabled: '',
                  },
                  {
                    key: 'Tester',
                    label: 'Tester',
                    disabled: '',
                  },
                  {
                    key: 'PM',
                    label: 'PM',
                    disabled: '',
                  },
                ]}
              />
            </div>
          </div>
        </Col>

        <Col span={12} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Khoảng lương'} required={false} />
            <div
              className="reservation-input-name"
              style={{ flexWrap: 'wrap' }}
            >
              <div className="input-element" style={{ marginRight: 25 }}>
                <Input
                  control={control}
                  inputName="salary"
                  inputProps={{ placeholder: 'Nhập tiêu đề' }}
                  width={'100%'}
                />
              </div>
            </div>
          </div>
        </Col>

        <Col span={12} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Số lượng'} required={false} />
            <div
              className="reservation-input-name"
              style={{ flexWrap: 'wrap' }}
            >
              <div className="input-element" style={{ marginRight: 25 }}>
                <NumberInput
                  control={control}
                  inputName={'amount'}
                  defaultValue={null}
                  inputNumberProps={{
                    placeholder: 'Nhập số lượng cần tuyển',
                    min: 1,
                    max: 99,
                  }}
                  width={'100%'}
                />
              </div>
            </div>
          </div>
        </Col>

        <Col span={12} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Nơi làm việc'} required={false} />
            <div className="input-element" style={{ marginRight: 25 }}>
              <Select
                control={control}
                inputName={'worksplace'}
                width={'100%'}
                placeholder={'Nhập thông tin'}
                Options={[
                  {
                    key: 'Hà Nội',
                    label: 'Hà Nội',
                    disabled: '',
                  },
                  {
                    key: 'Hồ Chí Minh',
                    label: 'Hồ Chí Minh',
                    disabled: '',
                  },
                  {
                    key: 'Đà Nẵng',
                    label: 'Đà Nẵng',
                    disabled: '',
                  },
                ]}
              />
            </div>
          </div>
        </Col>

        <Col span={24} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Loại công việc'} required={false} />
            <div className="input-element" style={{ marginRight: 25 }}>
              <RadioButton
                classes={'radio-button-container-space-betwen'}
                control={control}
                defaultValue={'Full time'}
                inputName={'worktime'}
                buttons={[
                  {
                    value: 'Full time',
                    label: 'Full time',
                  },
                  {
                    value: 'Part time',
                    label: 'Part time',
                  },
                ]}
                width={'100%'}
              />
            </div>
          </div>
        </Col>

        <Col span={24} style={{ marginTop: 25 }}>
          <div className="input-group">
            <Label label={'Mô tả chi tiết'} required={false} />
            <div className="input-element" style={{ marginRight: 25 }}>
              <EditorArea control={control} inputName={'jobdesrciption'} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

JobForm.propTypes = {
  control: PropTypes.any,
};

export default JobForm;
