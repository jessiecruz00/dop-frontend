import React from 'react';
import MetaTags from 'react-meta-tags';

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TrComponent from '../../components/Invoices/TrComponent'
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
    invoiceId: 8767676,
    invoiceDate: '01/01/2022',
    sesProjectId: '07/07/2022',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Billed'
  },
  {
    invoiceId: 8767676,
    invoiceDate: '01/01/2022',
    sesProjectId: '07/07/2022',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Billed'
  },
  {
    invoiceId: 8767676,
    invoiceDate: '01/01/2022',
    sesProjectId: '07/07/2022',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Billed'
  },
  {
    invoiceId: 8767676,
    invoiceDate: '01/01/2022',
    sesProjectId: '07/07/2022',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Paid'
  },
  {
    invoiceId: 8767676,
    invoiceDate: '01/01/2022',
    sesProjectId: '07/07/2022',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Billed'
  },
  {
    invoiceId: 8767676,
    invoiceDate: '01/01/2022',
    sesProjectId: '07/07/2022',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Paid'
  }
]
const Invoices = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Invoices | DOP Test Network</title>
        </MetaTags>
        <Wrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Invoices" />
            <div className="table-responsive">
              <Table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>Invoice #</th>
                    <th>Invoice Date</th>
                    <th>SES Project #</th>
                    <th>Customer</th>
                    <th>Reference #</th>
                    <th>Status</th>
                    <th>Re-Send</th>
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