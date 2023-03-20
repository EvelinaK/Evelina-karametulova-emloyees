import MuiPaper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import MaterialTable from 'material-table'
import Pagination from '../PaginationComponent/index'

const Paper = withStyles({
  root: {
    margin: '0 0 30px',
    background: 'transparent',
    boxShadow: 'none'
  }
})(MuiPaper)

const defaultOptions = {
  search: false,
  actionsColumnIndex: -1,
  toolbar: false,
  draggable: false,
  emptyRowsWhenPaging: false,
  selectionProps: {
    color: 'primary'
  },
  headerSelectionProps: {
    color: 'primary'
  },
  pageSize: 6,
  pageSizeOptions: [6, 25, 50],
  actionsCellStyle: {
    color: '#828282',
    fontSize: '1.4rem'
  },
  sorting: true
}

const Table = ({
  className,
  options,
  withShadow = true,
  components,
  emptyTableText,
  ...props
}) => {
  const allOptions = options
    ? { ...defaultOptions, ...options }
    : defaultOptions

  const cn = clsx(className)
  const alignedColumns = props.columns

  return (
    <div className={cn}>
      <MaterialTable
        localization={{
          body: {
            emptyDataSourceMessage: emptyTableText
              ? emptyTableText
              : 'No records to display'
          }
        }}
        {...props}
        columns={alignedColumns}
        options={allOptions}
        components={{
          ...components,
          Container: ({ children, ...props }) => {
            const childrenFiltered = children.filter((el, i) => i !== 4)
            return (
              <>
                <Paper
                  className="main-table"
                  {...props}
                  children={childrenFiltered}
                  elevation={withShadow ? 2 : 0}
                />
                {children[4]}
              </>
            )
          }
        }}
      />
    </div>
  )
}

Table.defaultProps = {
  hover: true,
  sorting: false
}

export default Table
