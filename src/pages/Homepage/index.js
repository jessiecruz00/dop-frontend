import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components'
import MetaTags from 'react-meta-tags';

//import images
import logo from "../../assets/images/logo-sm.png";
import flowIcon from "../../assets/images/home/flowIcon.png";

const Wrapper = styled.div`
  .containerFix {
    padding: 0 80px;
  }
  header {
    .containerFix .row {
      padding: 15px 0;
    }
    .linkSection {
      display: flex;
      justify-content: end;
      align-items: center;
      a {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #7F7F7F;
        margin-left: 40px;
      }
      a: last-child {
        background: linear-gradient(90deg, #D14124 -0.05%, #B02509 99.95%);
        box-shadow: 0px 4px 25px rgba(255, 0, 0, 0.2);
        border-radius: 4px;
        padding: 10px 40px;
        color: white;
      }
    }
  }
  section {
    .containerFix {
      margin-top: -387px;
    }
    .polygon {
      background: linear-gradient(90deg,#D14124 -0.05%,#B02509 99.95%);
      clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 50%);
      height: 446px;
    }
    nav {
      position: relative;
      text-align: center;
      color: white;
      div:first-child {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 30px;
        line-height: 50px;
      }
      div:last-child {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 50px;
      }
      .dividerLeft {
        border: 1px solid #FFFFFF;
        position: absolute;
        top: 25px;
        width: 16%;
        left: 16%;
      }
      .dividerRight {
        border: 1px solid #FFFFFF;
        position: absolute;
        top: 25px;
        width: 16%;
        right: 16%;
      }
    }
  }
  .widget {
    background: #FFFFFF;
    box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    padding: 15px;
    &>div:last-child {
      text-align: center;
    }
    color: #7F7F7F;
    .title {
      background: #D14124;
      border-radius: 50%;
      color: white;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      padding: 10px;
      display: inline-block;
      width: 47.12px;
      height: 47.12px;
      text-align: center;
      margin-bottom: 15px;
    }
  }
  .rightSection {
    background: #FFFFFF;
    border-radius: 67px;
    width: 80%;
    margin: 0 auto;
    margin-top: 70px;
    padding: 25px;
    text-aligin: center;
    .col-md-4 {
      text-align: center;
      margin-top: 10px;
      margin-bottom: 30px;
      img {
        width: 80%;
        hieght: auto;
      }
    }
    a {
      background: linear-gradient(90deg, #D14124 -0.05%, #B02509 99.95%);
      box-shadow: 0px 4px 25px rgba(255, 0, 0, 0.2);
      border-radius: 4px;
      padding: 10px 40px;
      color: white;
      font-size: 20px;
    }
    div:last-child {
      text-align: center;
    }
    .content {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #7F7F7F;
      margin-bottom: 50px;
      text-align: center;
    }
    .title {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #404656;
      margin-bottom: 20px;
      text-align: center;
      margin-bottom: 50px;
    }
  }
  .leftSection {
    margin-top: 100px;
    .col-md-6:last-child {
      margin-top: 90px;
    }
    .col-md-6:first-child .widget{
      margin-bottom: 20px;
    }
  }
`
const PageMaintenance = props => {
  return (
    <Wrapper>
      <MetaTags>
        <title>Home | DOP Test Network</title>
      </MetaTags>
      <header>
        <div className='containerFix'>
          <div className='row'>
            <div className='col-md-4 logoSection'>
              <img src={logo} alt='' />
            </div>
            <div className='col-md-8 linkSection'>
              <Link to="/homepage" className="">
                <span>Home</span>
              </Link>
              <Link to="/about" className="">
                <span>About</span>
              </Link>
              <Link to="/contact" className="">
                <span>Contact</span>
              </Link>
              <Link to="/login" className="">
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className='polygon'></div>
        <div className='containerFix'>
          <nav>
            <div>
              DOP Test Network is your
            </div>
            <div className='dividerLeft'></div>
            <div className='dividerRight'></div>
            <div>
              All-in-one DOP testing, certificate printing, reporting &<br /> invoicing platform that you need.
            </div>
          </nav>
          <aside>
            <div className='row'>
              <div className='col-md-6 leftSection'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='widget'>
                      <div className='title'>1</div>
                      <div>
                        Our customized workflow allows your staff to create clients and projects from the office, apply the client to the project, and fill in only the unique fileds on the labels, while automatically filling all other fields from the project and customer information you put it once.
                      </div>
                    </div>
                    <div className='widget'>
                      <div className='title'>2</div>
                      <div>
                        Once all the machines are tested, the system generates labels for you to print right there in the field. 
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='widget'>
                        <div className='title'>3</div>
                        <div>
                          When you close the job, the invoice and reports are generated automatically and can be sent to the client for a fast turn around. Or, you can run a card right there on site, getting you paid before the technician even leaves the job-site.
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='rightSection'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <img src={flowIcon} alt='' />
                    </div>
                    <div className='col-md-4'>
                      <img src={flowIcon} alt='' />
                    </div>
                    <div className='col-md-4'>
                      <img src={flowIcon} alt='' />
                    </div>
                  </div>
                  <div className='content'>
                    Get rid of poorly penned hand written labels that are time intensive and require duplicate entry.
                  </div>
                  <div className='title'>Streamline your DOP Testing Today!</div>
                  <div>
                    <a href='#'>Sign up</a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Wrapper>
  )
}

export default PageMaintenance;