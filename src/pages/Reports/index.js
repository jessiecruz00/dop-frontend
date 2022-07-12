import React from 'react';
import MetaTags from 'react-meta-tags';

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TrComponent from '../../components/Reports/TrComponent'
import {
  Container,
  Table
} from "reactstrap";
import styled from 'styled-components'

const Wrapper = styled.div`
  table {
    thead {

    }
    tr {
      border-style: hidden !important;
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
      td:last-child a {
        color: #D14124 !important;
        font-weight: 700;
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
    sesProjectId: 8767676,
    date: '01/01/2022',
    pass: '12',
    fail: '2',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Open'
  },
  {
    sesProjectId: 8767676,
    date: '01/01/2022',
    pass: '12',
    fail: '2',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Open'
  },
  {
    sesProjectId: 8767676,
    date: '01/01/2022',
    pass: '12',
    fail: '2',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Closed'
  },
  {
    sesProjectId: 8767676,
    date: '01/01/2022',
    pass: '12',
    fail: '2',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Open'
  },
  {
    sesProjectId: 8767676,
    date: '01/01/2022',
    pass: '12',
    fail: '2',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Closed'
  },
  {
    sesProjectId: 8767676,
    date: '01/01/2022',
    pass: '12',
    fail: '2',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Open'
  },
]
const Invoices = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Reports | DOP Test Network</title>
        </MetaTags>
        <Wrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Reports" />
            <div className="table-responsive">
              <Table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>SES Project #</th>
                    <th>Date</th>
                    <th>Pass</th>
                    <th>Fail</th>
                    <th>Customer</th>
                    <th>Reference #</th>
                    <th>Status</th>
                    <th>Report</th>
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

export default Invoices