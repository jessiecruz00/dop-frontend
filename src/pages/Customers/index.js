import React from 'react';
import MetaTags from 'react-meta-tags';
import { useHistory } from 'react-router-dom'

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TrComponent from '../../components/Customers/TrComponent'
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
      td:last-child {
        span:first-child {
          color: #7d7dd5;
          cursor: pointer;
          font-weight: 700;
        }
        span:nth-child(2) {
          color: #00B031;
          cursor: pointer;
          font-weight: 700;
          margin-left: 10px;
        }
        span:last-child {
          color: #D14124 !important;
          font-weight: 700;
          margin-left: 10px;
          cursor: pointer;
        }
      }
    }
  }
`
const data = [
  {
    customerName: 8767676,
    city: '01/01/2022',
    street: '07/07/2022',
    state: 'GravelStone Inc',
    zip: 1653,
    email: 'Open'
  },
  {
    customerName: 8767676,
    city: '01/01/2022',
    street: '07/07/2022',
    state: 'GravelStone Inc',
    zip: 1653,
    email: 'Open'
  },
  {
    customerName: 8767676,
    city: '01/01/2022',
    street: '07/07/2022',
    state: 'GravelStone Inc',
    zip: 1653,
    email: 'Open'
  },
  {
    customerName: 8767676,
    city: '01/01/2022',
    street: '07/07/2022',
    state: 'GravelStone Inc',
    zip: 1653,
    email: 'Open'
  },
  {
    customerName: 8767676,
    city: '01/01/2022',
    street: '07/07/2022',
    state: 'GravelStone Inc',
    zip: 1653,
    email: 'Open'
  },
  {
    customerName: 8767676,
    city: '01/01/2022',
    street: '07/07/2022',
    state: 'GravelStone Inc',
    zip: 1653,
    email: 'Open'
  }
  
]
const Projects = () => {
  const history = useHistory();
  const goNewCustomerPage = () => {
    history.push('/newCustomer')
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Customers | DOP Test Network</title>
        </MetaTags>
        <Wrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Customers" />
            <div>
              <Button className='newCustomer' onClick={() => goNewCustomerPage()}>New Customer</Button>
            </div>
            <div className="table-responsive">
              <Table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>City</th>
                    <th>Street</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Email</th>
                    <th></th>
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