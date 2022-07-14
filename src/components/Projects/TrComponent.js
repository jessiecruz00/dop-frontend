import React from 'react'
import { useHistory } from 'react-router-dom'

const TrComponent = ({ tableData }) => {
  const history = useHistory();
  const goMachinesPage = val => {
    history.push('/projects/machines/1124')
  }
  const goEditProject = val => {
    history.push('/projects/edit/222')
  }
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
      <td>
        <div>
          <span onClick={() => goMachinesPage('234234')}>Machines</span>
          <span onClick={() => goEditProject('234234')}>Edit</span>
          <span>Delete</span>
        </div>
      </td>
    </tr>
  )
}

export default TrComponent
