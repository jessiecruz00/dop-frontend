import React from 'react'

const TrComponent = ({ tableData }) => {
  return (
    <tr>
      <td>{tableData?.firstname} {tableData?.lastname}</td>
      <td>{tableData?.email}</td>
      <td></td>
      <td>
        
      </td>
    </tr>
  )
}

export default TrComponent
