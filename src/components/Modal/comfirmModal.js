import React, { useState } from 'react'
import { Modal, Button  } from "reactstrap";
import styled from 'styled-components'
import SuccessModal from './successModal'
import { requestCompany } from '../../data/comany'

const Wrapper = styled(Modal)`
  & {
    padding: 30px;
    .modal-body {
      text-align: center;
      nav {
        font-weight: 700;
        font-size: 26px;
        margin: 15px 0 10px 0;
      }
      footer {
        margin-top: 20px;
        botton {
          padding-right: 25px;
          padding-left: 25px;
        }
      }
    }
  }
`
const ComfirmModal = ({ content, modal_center, tog_center, type, data }) => {
  const [modal_center1, setmodal_center] = useState(false);
  const onClick = () => {
    if (type === 'create-company') {
      requestCompany(data).then(() => {
        tog_center()
        setmodal_center(true)
      })
      // tog_center()
      // setmodal_center(!modal_center)
    }
  }
  const tog_center1 = () => {
    setmodal_center(false)
  }
  return (
    <>
      <Wrapper
        isOpen={modal_center}
        toggle={() => {
          tog_center()
        }}
        centered={true}
      >
        <div className="modal-body">
          <section>{content}</section>
          <footer>
            <Button color="secondary" onClick={tog_center}>Cancel</Button>{' '}
            <Button color="primary" onClick={() => onClick()}>Yes</Button>{' '}
          </footer>
        </div>
      </Wrapper>
      <SuccessModal
        title='Your Company Account Created Successfully!'
        content='You have to wait for reply of doptestnetwork site admin'
        modal_center={modal_center1}
        setmodal_center={setmodal_center}
        tog_center={tog_center1}
      />
    </>
  )
}

export default ComfirmModal
