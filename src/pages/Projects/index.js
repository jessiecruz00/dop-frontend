import React from 'react';
import MetaTags from 'react-meta-tags';

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TrComponent from '../../components/Projects/TrComponent'
import {
  Container,
  Table
} from "reactstrap";
import styled from 'styled-components'

const Wrapper = styled.div`
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
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Projects | DOP Test Network</title>
        </MetaTags>
        <Wrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Projects" />
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
        </Wrapper>
      </div>
    </React.Fragment>
  )
}

export default Projects;