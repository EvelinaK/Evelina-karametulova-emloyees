import { createRef, useState, useEffect, useMemo } from 'react'
import Table from '../Table'
import { validationStyles } from './styles'

const tableOptions = {
  paging: true,
  sorting: false
}

const Result = ({ values }) => {
  const classes = validationStyles()
  const tableRef = createRef(null)
  const columns = [
    {
      width: 30,
      render: ({ tableData }) => <span className="idx">{tableData.id + 1}</span>
    },
    {
      width: '25%',
      field: 'ProjectID',
      title: 'Project ID'
    },
    {
      width: '25%',
      title: 'Days Worked',
      field: 'MaxDifference'
    },
    {
      width: '25%',
      title: 'Employee №1 (ID)',
      field: 'Emp1'
    },
    {
      width: '25%',
      title: 'Employee №2 (ID)',
      field: 'Emp2'
    }
  ]

  return (
    <div>
      <Table
        columns={columns}
        data={values}
        tableRef={tableRef}
        options={tableOptions}
        style={classes.table}
      />
    </div>
  )
}

export default Result
