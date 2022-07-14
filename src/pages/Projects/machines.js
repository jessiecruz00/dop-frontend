import React from 'react';
import MetaTags from 'react-meta-tags';
import { useHistory } from 'react-router-dom'

//import Breadcrumbs
import Breadcrumbs from "../../components/Common/Breadcrumb";
import TrComponent from '../../components/Projects/TrMachines'
// import PlusIcon from '../../assets/images/adminIcons/plusIcon.svg'
import { ReactComponent as PlusIcon } from '../../assets/images/adminIcons/plusIcon.svg'
import {
  Container,
  Table,
  Button
} from "reactstrap";
import styled from 'styled-components'

const Wrapper = styled.div`
  .plusIcon {
    position: absolute;
    bottom: 10px;
    right: -4px;
    svg path:first-child {
      transition: fill 0.7s;
    }
  }
  .col-md-2>div {
    cursor: pointer;
  }
  .col-md-2:hover {
    &>div:first-child {
      box-shadow: 0px 4px 25px 10px rgb(0 0 0 / 6%);
    }
    .plusIcon svg path:first-child {
      fill: #D14124;
    }
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
    padding: 30px 0;
    transition: box-shadow 0.7s;
  }
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
        margin-bottom: 10px;
      }
      div {
        font-style: normal;
        font-weight: 500;
        color: #7F7F7F;
        span {
          font-weight: 700;
          color: #000000;
        }
      }
    }
  }
  .table-responsive footer {
    margin-top: 20px;
    text-align: right;
    button {
      background: linear-gradient(90deg,#D14124 -0.05%,#B02509 99.95%);
      box-shadow: 0px 4px 25px rgb(255 0 0 / 20%);
      border-radius: 4px;
      color: white;
      margin-bottom: 20px;
      padding-left: 30px;
      padding-right: 30px;
      margin-right: 15px;
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
      td:last-child {
        span:first-child {
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
  .back {
    margin-bottom: 10px;
    color: black;
    font-size: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      margin-left: 10px;
    }
    i {
      line-height: 20px;
    }
  }
`
const data = [
  {
    certificateId: 8767676,
    equipmentType: 'MEG.',
    make: 'aero',
    model: '4534',
    serialId: 1653,
    status: 'PASS'
  },
  {
    certificateId: 8767676,
    equipmentType: 'MEG.',
    make: 'aero',
    model: '4534',
    serialId: 1653,
    status: 'PASS'
  },
  {
    certificateId: 8767676,
    equipmentType: 'MEG.',
    make: 'aero',
    model: '4534',
    serialId: 1653,
    status: 'PASS'
  },
  {
    certificateId: 8767676,
    equipmentType: 'MEG.',
    make: 'aero',
    model: '4534',
    serialId: 1653,
    status: 'PASS'
  },
  {
    certificateId: 8767676,
    equipmentType: 'MEG.',
    make: 'aero',
    model: '4534',
    serialId: 1653,
    status: 'PASS'
  }
]
const Projects = () => {
  const history = useHistory()
  const goAddMachine = val => {
    history.push('/projects/addMachine')
  }
  const goMachine = val => {
    history.push('/projects')
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Project/machines | DOP Test Network</title>
        </MetaTags>
        <Wrapper>
          <Container fluid>
            {/* Render Breadcrumbs */}
            <Breadcrumbs title="DOP" breadcrumbItem="Project/Machines" />
            <div className='back' onClick={() => goMachine()}>
              <i className='dripicons-arrow-thin-left'></i>
              <span>Back</span>
            </div>
            <div className='row panel'>
              <div className='col-md-3'>
                <header>Customer</header>
                <div>Email Adderss:</div>
                <div>465 Gravel Drive</div>
                <div>Fairfield, California</div>
                <div>94533</div>
              </div>
              <div className='col-md-3'>
                <header>Project</header>
                <div>Project Name: <span>Ulatis Center</span></div>
                <div>SES Project: <span>3454545</span></div>
                <div>Client Reference: <span>1244</span></div>
                <div>Street: <span>123 Ulatis Drive</span></div>
              </div>
              <div className='col-md-3'>
                <div style={{ marginTop: 30 }}>City: <span>Vacaville</span></div>
                <div>State: <span>California</span></div>
                <div>zip: <span>987867</span></div>
              </div>
              <div className='col-md-1'></div>
              <div className='col-md-2' onClick={() => goAddMachine()}>
                <div>Add<br />Machine</div>
                <div className='plusIcon'>
                  {/* <img src={PlusIcon} width={40} alt='' /> */}
                  <PlusIcon />
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <header>Job Equipment Certificate Status</header>
              <Table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>Certificate #</th>
                    <th>Equipment Type</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>Serial #</th>
                    <th>Pass/Fail</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.map((res, index) => (
                    <TrComponent key={index} tableData={res}  />
                  ))}
                </tbody>
              </Table>
              <footer>
                <Button>Print Certificates</Button>
                <Button>Close Project</Button>
              </footer>
            </div>
          </Container>
        </Wrapper>
      </div>
    </React.Fragment>
  )
}

export default Projects;