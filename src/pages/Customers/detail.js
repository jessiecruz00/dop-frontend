import React from 'react';
import MetaTags from 'react-meta-tags';
import { useHistory } from 'react-router-dom'

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TrComponent from '../../components/Customers/TrComponentDetail'
import {
  Container,
  Table,
  Button
} from "reactstrap";
import styled from 'styled-components'

const Wrapper = styled.div`
  button.newCustomer {
    background: linear-gradient(90deg, #D14124 -0.05%, #B02509 99.95%);
    box-shadow: 0px 4px 25px rgba(255, 0, 0, 0.2);
    border-radius: 4px;
    color: white;
    margin-bottom: 20px;
    padding-left: 25px;
    padding-right: 25px;
  }
  .panel {
    .col-md-6 {
      text-align: right;
    }
    button {
      background: linear-gradient(90deg, #D14124 -0.05%, #B02509 99.95%);
      box-shadow: 0px 4px 25px rgba(255, 0, 0, 0.2);
      border-radius: 4px;
      color: white;
      margin-bottom: 20px;
      padding-left: 25px;
      padding-right: 25px;
    }
    .col-md-3 {
      margin-bottom: 20px;
      header {
        font-style: normal;
        font-weight: 700;
        color: #D14124;
      }
      div {
        font-style: normal;
        font-weight: 500;
        color: #7F7F7F;
      }
      nav {
        font-style: normal;
        font-weight: 700;

        color: #000000;
      }
    }
  }
  .table-responsive header {
    font-family: 'Montserrat';
    font-weight: 700;
    font-style: normal;
    font-size: 22px;
    text-align: center;
    margin-bottom: 30px;
    padding-top: 30px;
    border-top: 1px solid #cccccc;
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
    requestedBy: '01/01/2022',
    technician: '07/07/2022',
    projectId: 'GravelStone Inc',
    clientProjectId: 1653,
    date: 'Open',
    invoiceId: '123'
  },
  {
    projectName: 8767676,
    requestedBy: '01/01/2022',
    technician: '07/07/2022',
    projectId: 'GravelStone Inc',
    clientProjectId: 1653,
    date: 'Open',
    invoiceId: '123'
  },
  {
    projectName: 8767676,
    requestedBy: '01/01/2022',
    technician: '07/07/2022',
    projectId: 'GravelStone Inc',
    clientProjectId: 1653,
    date: 'Open',
    invoiceId: '123'
  },
  {
    projectName: 8767676,
    requestedBy: '01/01/2022',
    technician: '07/07/2022',
    projectId: 'GravelStone Inc',
    clientProjectId: 1653,
    date: 'Open',
    invoiceId: '123'
  },
  {
    projectName: 8767676,
    requestedBy: '01/01/2022',
    technician: '07/07/2022',
    projectId: 'GravelStone Inc',
    clientProjectId: 1653,
    date: 'Open',
    invoiceId: '123'
  },
  {
    projectName: 8767676,
    requestedBy: '01/01/2022',
    technician: '07/07/2022',
    projectId: 'GravelStone Inc',
    clientProjectId: 1653,
    date: 'Open',
    invoiceId: '123'
  }
]
const Projects = () => {
  const history = useHistory()
  const goEditCustomer = val => {
    history.push('/customers/edit/222')
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Customer/Detail | DOP Test Network</title>
        </MetaTags>
        <Wrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Customer/Detail" />
            <div className='row panel'>
              <div className='col-md-3'>
                <header>Customer</header>
                <div>Email Adderss:</div>
                <nav>accounting@gravesinc.com</nav>
                <div>Terms:</div>
                <nav>Net 30</nav>
              </div>
              <div className='col-md-3'>
                <div style={{ marginTop: 20 }}>Billing Address</div>
                <nav>465 Gravel Drive</nav>
                <nav>Fairfield, California</nav>
                <nav>94533</nav>
              </div>
              <div className='col-md-6'>
                <Button onClick={() => goEditCustomer()}>Edit Customer</Button>
              </div>
            </div>
            <div className="table-responsive">
              <header>Project History</header>
              <Table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Requested By</th>
                    <th>Technician</th>
                    <th>Project #</th>
                    <th>Client Project #</th>
                    <th>Date</th>
                    <th>Invoice #</th>
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