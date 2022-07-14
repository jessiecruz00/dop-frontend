import React from 'react'
import { useHistory } from 'react-router-dom'

const TrComponent = ({ tableData }) => {
  const history = useHistory();
  const goEditMachine = val => {
    history.push('/projects/machines/edit/222')
  }
  return (
    <tr>
      <td>{tableData?.certificateId}</td>
      <td>{tableData?.equipmentType}</td>
      <td>{tableData?.make}</td>
      <td>{tableData?.model}</td>
      <td>{tableData?.serialId}</td>
      <td>{tableData?.status}</td>
      <td>
        <div>
          <span onClick={() => goEditMachine('234234')}>Edit</span>
          <span>Delete</span>
        </div>
      </td>
    </tr>
  )
}

export default TrComponent
