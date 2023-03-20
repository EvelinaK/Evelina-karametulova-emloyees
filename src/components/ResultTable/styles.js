import theme from '../../config/theme/theme'

export const downloadStyles = () => ({
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
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: 40,
    '& span': {
      margin: '0 10px',
      fontSize: 16
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
    color: theme.palette.secondary.main,
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
    fontSize: 16,
    [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
      marginBottom: 5
    }
  },
  uploadInput: {
    display: 'none'
  },
  fileName: {
    color: theme.palette.primary.main,
    margin: '0 10px'
  },
  uploadIcon: {
    color: theme.palette.primary.main
  },
  labelWrap: {
    '& label': {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },
    '& span': {
      margin: '0 10px'
    }
  },
  uploadedContainer: {
    [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center'
    }
  }
})

export const validationStyles = () => ({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  validationStyles: {
    display: 'flex',
    fontSize: 16,
    marginBottom: 16,
    '& svg': {
      marginRight: 12
    }
  },
  downloadIconText: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: 40,
    marginTop: 25,
    '& span': {
      margin: '0 10px',
      fontSize: 16
    },
    '& svg': {
      color: theme.palette.primary.main,
      marginRight: 10
    }
  },
  successful: {
    color: '#8BB439'
  },
  failed: {
    color: '#EC4436'
  },
  errorMessage: {
    color: '#D82727'
  },

  line: {
    marginRight: 9,
    lineHeight: '16px',
    color: theme.palette.primary.border
  },
  row: {
    lineHeight: '16px',
    display: 'flex',
    '&:not(:last-child)': {
      marginBottom: 8
    }
  },
  label: {
    width: 100,
    marginRight: 12,
    color: theme.palette.primary.border
  }
})
