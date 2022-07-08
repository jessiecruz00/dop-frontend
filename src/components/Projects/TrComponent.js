import React from 'react'

const TrComponent = ({ tableData }) => {
  return (
    <tr>
      <td>{tableData?.sesProjectId}</td>
      <td>{tableData?.createdAt}</td>
      <td>{tableData?.completedAt}</td>
      <td>{tableData?.customer}</td>
      <td>{tableData?.referenceId}</td>
      {tableData?.status && tableData?.status === 'Open' ? (
        <td className='greenBg'>{tableData?.status}</td>
      ): <td>{tableData?.status}</td>}
      <td>{tableData?.report}</td>
    </tr>
  )
}

export default TrComponent
