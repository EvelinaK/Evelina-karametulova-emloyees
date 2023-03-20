import { createElement } from 'react'
import MuiPagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'

import PerPage from './PerPage'

import { paginationStyles } from './styles'

const defaultPerPage = [10, 25, 100]

const Pagination = ({
  total,
  page,
  perPage,
  rowsPerPageOptions = defaultPerPage,
  onPageChange,
  onPerPageChange,
  type = 'div',
  list = [],
  // next prop need for matching pagination with table
  withTable,
  backendPagination,
  className,
  ...rest
}) => {
  const classes = paginationStyles()

  const count = Math.ceil(total / perPage)

  const handleChangePage = (e, newPage) => {
    if (withTable) {
      onPageChange(e, newPage - 1)
    } else onPageChange(newPage - 1)
  }

  const handlerChangePerPage = ({ value }) => {
    if (withTable) {
      const e = { target: { value: Number(value) } }
      onPerPageChange(e)
    } else {
      onPerPageChange(+value)
      !backendPagination && onPageChange(0)
    }
  }

  return createElement(
    type,
    { style: classes.wrapper },
    <>
      <div style={classes.perPageWrapper}>
        <PerPage
          label=""
          value={{ value: perPage, label: perPage }}
          onChange={handlerChangePerPage}
          options={rowsPerPageOptions.map(el => ({ value: el, label: el }))}
          list={list}
          {...rest}
        />
        <span>{'per_page'}</span>
      </div>

      <Pagination
        sx={classes.wrapper}
        variant="outlined"
        shape="rounded"
        color="secondary"
        siblingCount={1}
        page={++page}
        count={count}
        onChange={handleChangePage}
        renderItem={item => (
          <PaginationItem {...item} sx={{ selected: classes.selected }} />
        )}
      />
    </>
  )
}

export default Pagination
