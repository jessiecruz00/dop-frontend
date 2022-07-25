import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { useSelector, useDispatch } from "react-redux"
import { Button, Modal, Select, Form, Input } from 'antd'
import { getRoles, addUserToCompany } from '../../data/role'
import { inviteUser } from '../../data/notificate_invite'
import ComfirmModal from '../../components/Modal/comfirmModal'
import SuccessModal from '../../components/Modal/successModal'
import { openNotificationWithIcon } from '../../components/Modal/notification'

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TrComponent from '../../components/Settings/TrComponent'
import {
  Container,
  Table
} from "reactstrap";
import * as ST from './styles'
import { getStuffs, requestCheck, getAllStuffsNotImported } from '../../data/comany'


const Invoices = () => {
  const [modal_center, setmodal_center] = useState(false);
  const [modal_center1, setmodal_center1] = useState(false);
  const [outUserId, setOutUserId] = useState();
  const [stuffData, setStuffData] = useState([]);
  const [roleList, setLoleList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [companyData, setCompanyData] = useState(false);

  const { currentUser } = useSelector(state => ({
    currentUser: state.Login.user
  }))
  useEffect(() => {
    requestCheck({ create_user_id: currentUser?.sub }).then(res => {
      if (res.length && res[0].status) {
        setCompanyData(res[0])
      }
    })
  }, [])
  const [form] = Form.useForm()
  const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const tog_center = () => {
    setmodal_center(!modal_center)
  }
  const tog_center1 = () => {
    setmodal_center1(!modal_center1)
  }
  useEffect(() => {
    getStuffs({ company_id: currentUser?.company_id }).then(res => {
      setStuffData(res)
    })
  }, [modal_center, modal_center1])
  useEffect(() => {
    getRoles().then(res => {
      setLoleList(res)
    })
  }, [])
  const outUser = id => {
    setmodal_center(true)
    setOutUserId(id)
  }
  const addUser = () => {
    setIsModalVisible(true)
  }

  // const handleOk = () => {
  //   if (impotedUserId) {
  //     addUserToCompany({ company_id: currentUser.company_id, id: impotedUserId}).then(() => {
  //       setIsModalVisible(false);
  //       setmodal_center1(true)
  //     })
  //   } else {
  //     alert('You have to choose user')
  //   }
  // };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    inviteUser({ company_id: currentUser.company_id, inviter: currentUser.sub, requester_email: values.email, inviter_email: currentUser.email}).then((res) => {
      if (res?.message === 'success') {
        openNotificationWithIcon('success', 'Note', 'Sent your invitation successfully')
        setIsModalVisible(false)
      }
    }).catch(err => {
      openNotificationWithIcon('error', 'Note', 'Failed')
    })
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Company | DOP Test Network</title>
        </MetaTags>
        <ST.Wrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Company Stuffs" />
            <div style={{ marginBottom: 15 }}>
              {/* cant't invite other and disabled users */}
              {currentUser?.role_id !== 9 && currentUser?.role_id !== 10 && (
                companyData?.status ? (
                  <Button type="primary" size='large' onClick={() => addUser()}>Invite User</Button>
                ) : (
                  <div>
                    <Button type="primary" disabled size='large' onClick={() => addUser()}>Invite User</Button>
                    <span style={{ marginLeft: 20 }}>The user can't be invited because your company is not authorized. Contact to doptestnetwork.com admin!</span>
                  </div>
                )
              )}
            </div>
            <div className="table-responsive">
              <Table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {stuffData && stuffData.map((res, index) => (
                    currentUser.sub !== res.id && (
                      <TrComponent key={index} outUser={outUser} currentUser={currentUser} tableData={res} roleList={roleList} />
                    )
                  ))}
                </tbody>
              </Table>
            </div>
          </Container>
          <ComfirmModal
            content='Do you out this user from company?'
            modal_center={modal_center}
            setmodal_center={setmodal_center}
            tog_center={tog_center}
            type={'out-user'}
            data={{ id: outUserId }}
          />
          <SuccessModal
            title='Imported Successfully!'
            content='New User was imported in your company'
            modal_center={modal_center1}
            setmodal_center={setmodal_center1}
            tog_center={tog_center1}
          />
          <ST.StyleModal title="Users" visible={isModalVisible}  onCancel={handleCancel}>
            <p>
              {/* <Form form={form} name="control-hooks" onFinish={onFinish}> */}
              <Form form={form} name="control-hooks" onFinish={onFinish}>
                <Form.Item name="email" label="User"
                  rules={[
                    { required: true, message: 'This field is required' },
                    {
                      validator(_, value) {
                        if (value && !value.match(validRegex)) {
                          return Promise.reject('Invalid email address!')
                        }
                        return Promise.resolve()
                      }
                    }
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item>
                  <Button htmlType="button" onClick={() => setIsModalVisible(false)}>
                    Cancel
                  </Button>
                  <Button type="primary" htmlType="submit" >
                    Send
                  </Button>
                </Form.Item>
              </Form>
            </p>
          </ST.StyleModal>
        </ST.Wrapper>
      </div>
    </React.Fragment>
  )
}

export default Invoices