import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { useSelector, useDispatch } from "react-redux"
import { Button, Modal, Select } from 'antd'
import { getRoles, addUserToCompany } from '../../data/role'
import ComfirmModal from '../../components/Modal/comfirmModal'
import SuccessModal from '../../components/Modal/successModal'

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TrComponent from '../../components/Settings/TrComponent'
import {
  Container,
  Table
} from "reactstrap";
import * as ST from './styles'
import { getStuffs, getAllStuffsNotImported } from '../../data/comany'

const { Option } = Select
const Invoices = () => {
  const [modal_center, setmodal_center] = useState(false);
  const [modal_center1, setmodal_center1] = useState(false);
  const [outUserId, setOutUserId] = useState();
  const [stuffData, setStuffData] = useState([]);
  const [importedStuffData, setImportedStuffData] = useState([]);
  const [impotedUserId, setImportedUserId] = useState();
  const [roleList, setLoleList] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { currentUser } = useSelector(state => ({
    currentUser: state.Login.user
  }))
  
  
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
    getAllStuffsNotImported().then(res => {
      setImportedStuffData(res)
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

  const handleOk = () => {
    if (impotedUserId) {
      addUserToCompany({ company_id: currentUser.company_id, id: impotedUserId}).then(() => {
        setIsModalVisible(false);
        setmodal_center1(true)
      })
    } else {
      alert('You have to choose user')
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
              <Button type="primary" size='large' onClick={() => addUser()}>Import User</Button>
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
                      <TrComponent key={index} outUser={outUser} tableData={res} roleList={roleList} />
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
          <Modal title="Users" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>
              <Select
                showSearch
                style={{ width: '100%' }}
                placeholder="Search to Users"
                optionFilterProp="children"
                onChange={val => setImportedUserId(val)}
              >
                {importedStuffData && importedStuffData.map(res => (
                  <Option key={res.id} value={res.id}>
                    {res.firstname} {res.lastname} ({res.email})
                  </Option>
                ))}
              </Select>
            </p>
          </Modal>
        </ST.Wrapper>
      </div>
    </React.Fragment>
  )
}

export default Invoices