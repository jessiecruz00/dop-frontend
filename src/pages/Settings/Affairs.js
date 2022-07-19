import React, { useEffect, useState } from 'react';
import MetaTags from 'react-meta-tags';
import { useSelector, useDispatch } from "react-redux"

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TrComponent from '../../components/Settings/TrComponent'
import {
  Container,
  Table
} from "reactstrap";
import * as ST from './styles'
import { getStuffs } from '../../data/comany'

const data = [
  
]
const Invoices = () => {
  const [stuffData, setStuffData] = useState(false);
  const { currentUser } = useSelector(state => ({
    currentUser: state.Login.user
  }))
  useEffect(() => {
    getStuffs({ company_id: currentUser?.company_id }).then(res => {
      setStuffData(res)
    })
  }, [])
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Company | DOP Test Network</title>
        </MetaTags>
        <ST.Wrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Company Admistration" />
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
                    <TrComponent key={index} tableData={res}  />
                  ))}
                </tbody>
              </Table>
            </div>
          </Container>
        </ST.Wrapper>
      </div>
    </React.Fragment>
  )
}

export default Invoices