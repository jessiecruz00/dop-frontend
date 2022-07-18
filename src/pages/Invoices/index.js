import React from 'react';
import MetaTags from 'react-meta-tags';

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TrComponent from '../../components/Invoices/TrComponent'
import {
  Container,
  Table
} from "reactstrap";
import * as ST from './styles'

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
        <ST.Wrapper>
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
        </ST.Wrapper>
      </div>
    </React.Fragment>
  )
}

export default Invoices