import React from 'react';
import MetaTags from 'react-meta-tags';
import { useHistory } from 'react-router-dom'

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TrComponent from '../../components/Projects/TrComponent'
import {
  Container,
  Table,
  Button
} from "reactstrap";
import * as ST from './styles'

const data = [
  {
    sesProjectId: 8767676,
    createdAt: '01/01/2022',
    completedAt: '07/07/2022',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Open',
    report: 'N/A'
  },
  {
    sesProjectId: 8767676,
    createdAt: '01/01/2022',
    completedAt: '07/07/2022',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Open',
    report: 'N/A'
  },
  {
    sesProjectId: 8767676,
    createdAt: '01/01/2022',
    completedAt: '07/07/2022',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Open',
    report: 'N/A'
  },
  {
    sesProjectId: 8767676,
    createdAt: '01/01/2022',
    completedAt: '07/07/2022',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Closed',
    report: 'N/A'
  },
  {
    sesProjectId: 8767676,
    createdAt: '01/01/2022',
    completedAt: '07/07/2022',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Open',
    report: 'N/A'
  },
  {
    sesProjectId: 8767676,
    createdAt: '01/01/2022',
    completedAt: '07/07/2022',
    customer: 'GravelStone Inc',
    referenceId: 1653,
    status: 'Closed',
    report: 'N/A'
  }
]
const Projects = () => {
  const history = useHistory()
  const goNewProjectPage = () => {
    history.push('/newProject')
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Projects | DOP Test Network</title>
        </MetaTags>
        <ST.Wrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Projects" />
            <div>
              <Button className='newProject' onClick={() => goNewProjectPage()}>New Customer</Button>
            </div>
            <div className="table-responsive">
              <Table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>SES Project #</th>
                    <th>Creation Date</th>
                    <th>Complection Date</th>
                    <th>Customer</th>
                    <th>Reference #</th>
                    <th>Status</th>
                    <th>Report</th>
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