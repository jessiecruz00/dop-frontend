import React, { useState, useEffect } from 'react';
import MetaTags from 'react-meta-tags';
import SuccessModal from '../../components/Modal/successModal'
//import Breadcrumbs
import { PlusOutlined } from '@ant-design/icons';
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { useSelector, useDispatch } from "react-redux"
import { openNotificationWithIcon } from '../../components/Modal/notification'
import { Button, Form, Input, Row, Col, Upload, Modal, Select } from 'antd';
import {
  Container
} from "reactstrap";
import PencilIcon from '../../assets/images/pencil.png'
import avatar from '../../assets/images/users/avatar-8.jpg'
import { requestCompanyFromRequester } from '../../data/notificate_invite';
import * as ST from './styles'
import { getAllCompany } from '../../data/comany'
import { changeUserProfile, getUserCompanyInfo } from '../../data/user'
import { changeUserInfo } from "../../store/actions"


const { Option } = Select
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });




const Projects = () => {
  const [modal_center, setmodal_center] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);
  const [requestCompanyId, setRequestCompanyId] = useState();
  const [allCompanyList, setAllCompanyList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()
  const dispatch = useDispatch()
  const { currentUser } = useSelector(state => ({
    currentUser: state.Login.user
  }))
  useEffect(() => {
    getUserCompanyInfo({id: currentUser?.sub}).then((res) => {
      const params = {
        firstname: currentUser?.firstname,
        lastname: currentUser?.lastname, 
        email: currentUser?.email,
        company_name: res[0].company_name,
        role_name: res[0].name
      }
      form.setFieldsValue(params)
    })
  }, [currentUser])
  useEffect(() => {
    getAllCompany().then(res => {
      setAllCompanyList(res)
    })
  }, [])
  const [formModal] = Form.useForm();
  const tog_center = () => {
    setmodal_center(!modal_center)
    // removeBodyCss()
  }
  const onFinish = (values) => {
    const reData = values
    delete reData.email
    delete reData.company_name
    delete reData.role_name
    reData.id = currentUser.sub
    changeUserProfile(reData).then(res => {
      dispatch(changeUserInfo({ firstname: reData.firstname, lastname: reData.lastname }))
      openNotificationWithIcon('success', 'Note', 'Changed your profile successfully')
    }).catch(err => {
      openNotificationWithIcon('error', 'Note', 'Failed')
    })
  }

  const onFinishModal = values => {
    const params = {
      company_id: values.company_id,
      requester: currentUser.sub,
      requester_email: currentUser.email
    }
    requestCompanyFromRequester(params).then(() => {

    })
  }
  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload Logo
      </div>
    </div>
  );
  const requestCompany = () => {
    if (!currentUser.company_id) {
      setIsModalVisible(true)
    } else {
      openNotificationWithIcon('error', 'Note', 'Failed: You are a stuff of company')
    }
  }
  const handleOk = () => {
    // if (impotedUserId) {
    //   addUserToCompany({ company_id: currentUser.company_id, id: impotedUserId}).then(() => {
    //     setIsModalVisible(false);
    //     setmodal_center1(true)
    //   })
    // } else {
    //   alert('You have to choose user')
    // }
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Settings | DOP Test Network</title>
        </MetaTags>
        <ST.ProfileWrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Settings" />
            <Form
              form={form}
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Row>
                <Col span={19}></Col>
                <Col span={5} style={{ textAligin: 'right' }}>
                  <Button type="primary" style={{ width: '100%' }} onClick={() => requestCompany()}>
                    Request Company
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={8}></Col>
                <Col span={8} style={{ display: 'flex', justifyContent: 'center' }}>
                  <Form.Item>
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={handlePreview}
                      onChange={handleChange}
                    >
                      {fileList.length > 0 ? null : uploadButton}
                    </Upload>
                  </Form.Item>
                </Col>
                <Col span={8}></Col>
              </Row>
              <Row gutter={[24, 0]}>
                <Col span={4}></Col>
                <Col span={8}>
                  <Form.Item
                    label="First Name"
                    name="firstname"
                    rules={[{ required: true, message: 'Please input your firstname!' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Last Name"
                    name="lastname"
                    rules={[{ required: true, message: 'Please input your lastname!' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                  >
                    <Input disabled />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label="Company"
                    name="company_name"
                  >
                    <Input disabled />
                  </Form.Item>
                  <Form.Item
                    label="Role"
                    name="role_name"
                  >
                    <Input disabled />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>
                <Col span={4}></Col>
              </Row>
              <Row>
                <Col span={8}></Col>
                <Col span={8}>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                      Save
                    </Button>
                  </Form.Item>
                </Col>
                <Col span={8}></Col>
              </Row>
            </Form>
          </Container>
          <SuccessModal
            title='Successfully!'
            content='Your profile updated'
            modal_center={modal_center}
            setmodal_center={setmodal_center}
            tog_center={tog_center}
          />
          <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={handleCancel}>
            <img
              alt="example"
              style={{
                width: '100%',
              }}
              src={previewImage}
            />
          </Modal>
        </ST.ProfileWrapper>
      </div>
      <ST.StyleModal title="Users" visible={isModalVisible}  onCancel={handleModalCancel}>
        <Form form={formModal} name="control-hooks" onFinish={onFinishModal}>
          <Form.Item name="company_id" label="Companies"
            rules={[{ required: true, message: 'This field is required' }]}
          >  
            <Select
              showSearch
              style={{ width: '100%' }}
              placeholder="Search to Companies"
              optionFilterProp="children"
              onChange={val => setRequestCompanyId(val)}
            >
              {allCompanyList && allCompanyList.map(res => (
                <Option key={res.id} value={res.id}>
                  {res.company_name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <div style={{ textAlign: 'right' }}>
            <Button htmlType="button" onClick={() => setIsModalVisible(false)}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 15 }} >
              Send
            </Button>
          </div>
        </Form>
      </ST.StyleModal>
    </React.Fragment>
  )
}

export default Projects;