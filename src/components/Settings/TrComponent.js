import React from 'react'
import { Select } from 'antd'
import { changeUserRole } from '../../data/comany'
import { openNotificationWithIcon } from '../Modal/notification'

const { Option } = Select
const TrComponent = ({ tableData, roleList, outUser, currentUser }) => {
  const userRoleChange = (val, id) => {
    changeUserRole({ id: id, role_id: val }).then(res => {
      openNotificationWithIcon('success', 'Note', 'Updated this user role successfully')
    })
    
  }
  return (
    <tr>
      <td>{tableData?.firstname} {tableData?.lastname}</td>
      <td>{tableData?.email}</td>
      <td>
        {roleList && (
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            defaultValue={tableData?.role_id}
            onChange={val => userRoleChange(val, tableData?.id)}
            disabled={currentUser?.role_id !== 2 ? true : false}
          >
            {roleList.map(res => (
              res.id !== 1 && (
                <Option key={res.id} value={res.id}>{res.name}</Option>
              )
            ))}
          </Select>
        )}
      </td>
      <td>
        {currentUser?.role_id === 2 && (
          <a href='#' onClick={() => outUser(tableData?.id)}>Delete</a>
        )}
      </td>
    </tr>
  )
}

export default TrComponent
