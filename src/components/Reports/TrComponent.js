import React from 'react'

const TrComponent = ({ tableData }) => {
  return (
    <tr>
      <td>{tableData?.sesProjectId}</td>
      <td>{tableData?.date}</td>
      <td>{tableData?.pass}</td>
      <td>{tableData?.fail}</td>
      <td>{tableData?.customer}</td>
      <td>{tableData?.referenceId}</td>
      {tableData?.status && tableData?.status === 'Open' ? (
        <td className='greenBg'>{tableData?.status}</td>
      ): <td>{tableData?.status}</td>}
      <td>
        <a href='#'>View</a>
      </td>
    </tr>
  )
}

export default TrComponent
