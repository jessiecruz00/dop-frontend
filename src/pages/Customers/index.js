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
import * as ST from './styles'


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
        <ST.Wrapper>
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
        </ST.Wrapper>
      </div>
    </React.Fragment>
  )
}

export default Projects;