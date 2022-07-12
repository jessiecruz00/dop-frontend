import React from 'react';
import MetaTags from 'react-meta-tags';
import { useHistory } from 'react-router-dom'

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TrComponent from '../../components/Dashboard/TrComponent'
import PlusIcon from '../../assets/images/adminIcons/plusIcon.svg'
import {
  Container,
  Table
} from "reactstrap";
import styled from 'styled-components'

const Wrapper = styled.div`
  .plusIcon {
    position: absolute;
    bottom: -15px;
    right: -5px;
  }
  .btnLinkGroup {
    margin-bottom: 30px;
    .col-md-2>div {
      cursor: pointer;
    }
    .col-md-2>div:first-child {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #7F7F7F;
      background: #FFFFFF;
      box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.06);
      border-radius: 4px;
      padding: 50px 0;
    }
    .col-md-2:not(:last-child) {
      padding-right: 0px 10px;
    }
  }
  .tableTitle {
    font-weight: 700;
    font-size: 18px;
    letter-spacing: -0.02em;
    color: #333333;
    margin-bottom: 15px;
  }
  table {
    tr {
      border-style: none !important;
      th {
        background: #ccc;
      }
      td:not(:last-child), th:not(:last-child) {
        position: relative;
        &::after {
          height: 50%;
          border-right: 1px solid gainsboro;
          content: '';
          position: absolute;
          right: 0;
        }
      }
      td.greenBg {
        color: #00B031;
        font-weight: 700;
      }
    }
  }
`
const data = [
  {
    projectName: 8767676,
    client: '01/01/2022',
    requestedBy: '07/07/2022',
    technician: 'GravelStone Inc',
    projectId: 1653,
    clientProjectId: 'Open',
    date: 'N/A'
  },
  {
    projectName: 8767676,
    client: '01/01/2022',
    requestedBy: '07/07/2022',
    technician: 'GravelStone Inc',
    projectId: 1653,
    clientProjectId: 'Open',
    date: 'N/A'
  },
  {
    projectName: 8767676,
    client: '01/01/2022',
    requestedBy: '07/07/2022',
    technician: 'GravelStone Inc',
    projectId: 1653,
    clientProjectId: 'Open',
    date: 'N/A'
  },
  {
    projectName: 8767676,
    client: '01/01/2022',
    requestedBy: '07/07/2022',
    technician: 'GravelStone Inc',
    projectId: 1653,
    clientProjectId: 'Closed',
    date: 'N/A'
  },
  {
    projectName: 8767676,
    client: '01/01/2022',
    requestedBy: '07/07/2022',
    technician: 'GravelStone Inc',
    projectId: 1653,
    clientProjectId: 'Open',
    date: 'N/A'
  },
  {
    projectName: 8767676,
    client: '01/01/2022',
    requestedBy: '07/07/2022',
    technician: 'GravelStone Inc',
    projectId: 1653,
    clientProjectId: 'Closed',
    date: 'N/A'
  }
]
const Projects = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Dashboard | DOP Test Network</title>
        </MetaTags>
        <Wrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Dashboard" />
            <div className='btnLinkGroup'>
              <div className='row'>
                <div className='col-md-2' onClick={() => history.push('/newProject')}>
                  <div>New Project</div>
                  <div className='plusIcon'>
                    <img src={PlusIcon} width={40} alt='' />
                  </div>
                </div>
                <div className='col-md-2' onClick={() => history.push('/newCustomer')}>
                  <div>New Customer</div>
                  <div className='plusIcon'>
                    <img src={PlusIcon} width={40} alt='' />
                  </div>
                </div>
                <div className='col-md-2' onClick={() => history.push('/projects')}>
                  <div>Projects</div>
                </div>
                <div className='col-md-2' onClick={() => history.push('/invoices')}>
                  <div>Invoices</div>
                </div>
                <div className='col-md-2' onClick={() => history.push('/reports')}>
                  <div>Reports</div>
                </div>
                <div className='col-md-2' onClick={() => history.push('/customers')}>
                  <div>Customers</div>
                </div>
              </div>
            </div>
            <div className='tableTitle'>
              Recently Completed Projects
            </div>
            <div className="table-responsive">
              <Table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Client</th>
                    <th>Requested By</th>
                    <th>Technician</th>
                    <th>Project #</th>
                    <th>Client Project #</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.map((res, index) => (
                    <TrComponent key={index} tableData={res}  />
                  ))}
                </tbody>
              </Table>
            </div>
          </Container>
        </Wrapper>
      </div>
    </React.Fragment>
  )
}

export default Projects;