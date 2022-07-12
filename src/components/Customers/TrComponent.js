import React from 'react'
import { useHistory } from 'react-router-dom'

const TrComponent = ({ tableData }) => {
  const history = useHistory();
  const goCustomerDetailPage = val => {
    history.push('/customers/detail/1124')
  }
  const goEditCustomer = val => {
    history.push('/customers/edit/222')
  }
  return (
    <tr>
      <td>{tableData?.customerName}</td>
      <td>{tableData?.city}</td>
      <td>{tableData?.street}</td>
      <td>{tableData?.state}</td>
      <td>{tableData?.zip}</td>
      <td>{tableData?.email}</td>
      <td>
        <div>
          <span onClick={() => goCustomerDetailPage('234234')}>Detail</span>
          <span onClick={() => goEditCustomer('234234')}>Edit</span>
          <span>Delete</span>
        </div>
      </td>
    </tr>
  )
}

export default TrComponent
