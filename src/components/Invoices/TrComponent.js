import React from 'react'

const TrComponent = ({ tableData }) => {
  return (
    <tr>
      <td>{tableData?.invoiceId}</td>
      <td>{tableData?.invoiceDate}</td>
      <td>{tableData?.sesProjectId}</td>
      <td>{tableData?.customer}</td>
      <td>{tableData?.referenceId}</td>
      {tableData?.status && tableData?.status === 'Paid' ? (
        <td className='greenBg'>{tableData?.status}</td>
      ): <td>{tableData?.status}</td>}
      <td>
        <a href='#'>Send</a>
      </td>
    </tr>
  )
}

export default TrComponent
