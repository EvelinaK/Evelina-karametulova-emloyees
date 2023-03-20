import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import { Toolbar } from '@material-ui/core'
import { Box } from '@material-ui/core'

import { useStyles } from './styles'
import theme from '../../config/theme/theme'

const Header = ({ openModal }) => {
  const classes = useStyles()

  return (
    <>
      <AppBar sx={classes.header} position="static">
        <Toolbar>
          <Typography variant="body1" component="div"></Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
