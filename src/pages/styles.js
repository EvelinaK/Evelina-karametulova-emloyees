import theme from '../config/theme/theme'

export const ProductPageStyles = () => ({
  searchWrapper: {
    display: 'flex',
    width: '30%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '20px'
  },
  infoWrapper: {
    margin: '0 4px'
  },
  mainTitle: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: '#f19930',
    fontSize: 50
  },
  errorInfoWrapper: {
    verticalAlign: 'middle'
  }
})

export const InfoPageStyles = () => ({
  infoWrapper: {
    margin: '0 4px'
  },
  mainTitle: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: 40,
    color: '#f19930'
  },
  infoWrapperContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  infoErrorContainer: {
    display: 'flex',
    fontSize: '20px',
    padding: '30px',
    color: 'red',
    fontWeight: 600
  },
  downloadWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
    [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
      justifyContent: 'start'
    }
  },
  downloadIconText: {
    display: 'flex',
    cursor: 'pointer',
    fontFamily: 'Pacifico',
    color: theme.palette.primary.textBrow,
    fontSize: 22,
    '& span': {
      margin: '0 10px',
      fontFamily: 'Pacifico',
      fontSize: 22,
      color: theme.palette.primary.textBrow
    },
    '& svg': {
      color: theme.palette.primary.main,
      marginRight: 10
    },
    [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
      marginBottom: 10
    }
  },
  helpText: {
    marginBottom: 40,
    color: theme.palette.primary.main,
    [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
      marginBottom: 20
    }
  },
  radioWrapper: {
    marginBottom: 40
  },
  copyPasteWrapper: {
    flexGrow: 1,
    paddingBottom: 40,
    '& div': {
      height: '100%'
    }
  },
  input: {
    margin: '0 30px',
    width: 250
  },
  toBottom: {
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column'
  },
  uploadWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    '& svg': {
      cursor: 'pointer'
    }
  },
  csvText: {
    fontSize: 22,
    display: 'flex',
    fontWeight: 500,
    color: theme.palette.primary.textBrow,
    [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
      marginBottom: 5
    }
  },
  uploadInput: {
    display: 'none'
  },
  fileName: {
    fontSize: 18,
    color: theme.palette.primary.inverse,
    margin: '0 10px'
  },
  uploadIcon: {
    color: theme.palette.primary.inverse
  },
  CloseIcon: {
    color: theme.palette.primary.textBrow
  },
  labelContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 30
  },
  labelWrap: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '& label': {
      display: 'flex',
      cursor: 'pointer'
    },
    '& span': {
      margin: '0 10px'
    }
  },
  uploadedContainer: {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center'
    }
  }
})
