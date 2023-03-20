// import { createStyles } from '@material-ui/core/styles'

// export const actionButtonStyles = createStyles(theme => ({
//   root: {
//     padding: '5px 1px',
//     flexShrink: 0,
//     overflow: 'hidden',
//     minWidth: 'auto'
//     // [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
//     //   maxWidth: '40px'
//     // }
//   },
//   text: {
//     '&:hover': {
//       //  background: theme.palette.primary.hover
//     }
//   },
//   disabled: {
//     color: '#fff!important'
//     //background: theme.palette.primary.light
//   },
//   label: {
//     fontSize: '1.4rem',
//     fontWeight: 500,
//     position: 'relative',
//     zIndex: 2,
//     '& > *': {
//       margin: '0 4px',
//       display: 'inline-block',
//       '&:last-child': {
//         padding: '0 5px 0 0'
//       }
//     }
//   },
//   startIcon: {
//     width: '30px',
//     height: '30px',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     background: 'rgba(255, 255, 255, 0.25)',
//     borderRadius: '2px'
//   },
//   btnText: {
//     // [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
//     //   display: 'none'
//     // }
//   },
//   hideBtnText: {
//     display: 'none'
//   }
// }))
import theme from '../../config/theme/theme'

export const actionButtonStyles = () => ({
  root: {
    padding: '5px 1px',
    flexShrink: 0,
    overflow: 'hidden',
    minWidth: 'auto',
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      maxWidth: '40px'
    }
  },
  text: {
    '&:hover': {
      //  background: theme.palette.primary.hover
    }
  },
  disabled: {
    color: '#fff!important'
    //background: theme.palette.primary.light
  },
  label: {
    fontSize: '1.4rem',
    fontWeight: 500,
    position: 'relative',
    zIndex: 2,
    '& > *': {
      margin: '0 4px',
      display: 'inline-block',
      '&:last-child': {
        padding: '0 5px 0 0'
      }
    }
  },
  startIcon: {
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(255, 255, 255, 0.25)',
    borderRadius: '2px'
  },
  btnText: {
    // [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
    //   display: 'none'
    // }
  },
  hideBtnText: {
    display: 'none'
  }
  // addBtnStyle: {
  //   margin: 0,
  //   width: 123,
  //   height: 52,
  //   color: '#ffffff',
  //   backgroundColor: theme.palette.primary.main
  // }
})
