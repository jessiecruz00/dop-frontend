import styled from 'styled-components'
import { Modal } from 'antd'

export const Wrapper = styled.div`
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

export const CompanyWrapper = styled.div`
  button.newCustomer {
    background: linear-gradient(90deg, #D14124 -0.05%, #B02509 99.95%);
    box-shadow: 0px 4px 25px rgba(255, 0, 0, 0.2);
    border-radius: 4px;
    color: white;
    margin-bottom: 20px;
    padding-left: 25px;
    padding-right: 25px;
  }
  .form-group {
    margin-bottom: 15px;
    position: relative;
    span.inputTitle {
      position: absolute;
      top: -10px;
      left: 15px;
      padding: 0 8px;
      background: white;
    }
    img {
      position: absolute;
      top: 12px;
      right: 10px;
      width: 12px;
      height: auto;
    }
  }
  .profileImg img {
    border-radius: 100%;
  }
  #signature {
    display: flex;
    height: 100%;
  }
  #signature ~ img {
    top: calc(50% - 5px) !important;
  }
  .row {
      display: flex;
      justify-content: center;
      margin-top: 30px;
  }
  .col-md-5 button {
    width: 100%;
    background: linear-gradient(90deg, #D14124 -0.05%, #B02509 99.95%);
    box-shadow: 0px 4px 25px rgba(255, 0, 0, 0.2);
    border-radius: 4px;
    color: white;
  }
`

export const StyleModal = styled(Modal)`
  & {
    .ant-modal-footer {
      display: none !important;
    }
    .ant-modal-header {
      display: none !important;
    }
    .ant-modal-close {
      display: none !important;
    }
    .ant-modal-body {
      p {
        margin-top: 20px;
        form>div:last-child {
          text-align: right;
        }
        button:first-child {
          margin-right: 10px;
        }
      }
    }
  }
`

export const ProfileWrapper = styled.div`
  & {
    .form-group {
      margin-bottom: 15px;
      position: relative;
      span.inputTitle {
        position: absolute;
        top: -10px;
        left: 15px;
        padding: 0 8px;
        background: white;
      }
      img {
        position: absolute;
        top: 12px;
        right: 10px;
        width: 12px;
        height: auto;
      }
    }
    .profileImg img {
      border-radius: 100%;
    }
    #signature {
      display: flex;
      height: 100%;
    }
    #signature ~ img {
      top: calc(50% - 5px) !important;
    }
    .col-md-5 button {
      width: 100%;
      background: linear-gradient(90deg, #D14124 -0.05%, #B02509 99.95%);
      box-shadow: 0px 4px 25px rgba(255, 0, 0, 0.2);
      border-radius: 4px;
      color: white;
    }
    .row:nth-child(2) {
      margin-top: 30px;
      font-family: 'Montserrat';
      font-style: normal;
      font-size: 22px;
      text-align: center;
      margin-bottom: 30px;
    }
    .row:last-child {
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }
  }
`