import React from 'react'

const TrComponent = ({ tableData }) => {
  return (
    <tr>
      <td>{tableData?.projectName}</td>
      <td>{tableData?.requestedBy}</td>
      <td>{tableData?.technician}</td>
      <td>{tableData?.projectId}</td>
      <td>{tableData?.clientProjectId}</td>
      <td>{tableData?.date}</td>
      <td>{tableData?.invoiceId}</td>
    </tr>
  )
}

export default TrComponent
