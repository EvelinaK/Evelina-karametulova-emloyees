import { Box } from '@material-ui/core'

import HeaderComponent from '../Header'
import { useLayoutStyles } from './styles'

const Layout = ({ children }) => {
  const classes = useLayoutStyles()

  return (
    <Box sx={classes.layoutContainer}>
      <Box sx={classes.contentContainer}>
        <HeaderComponent />

        <Box sx={classes.content}>{children}</Box>
      </Box>
    </Box>
  )
}

export default Layout
