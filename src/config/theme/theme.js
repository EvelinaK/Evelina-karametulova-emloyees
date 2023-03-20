import { createTheme } from '@mui/material/styles'
import { darkScrollbar } from '@mui/material'

let theme = createTheme({
  palette: {
    primary: {
      main: '#e5f2e3',
      cardColor: 'wheat',
      shadowColor: '#f3beb3',
      inverse: '#1AAA8D',
      inputBackground: '#f1faf7',
      border: '#c0ceca',
      backgroundLightGreen: '#f1faf7',
      textBlack: '#0a0b0b',
      textBrow: '#371717',
      disabled: '#D1D1D1'
    },
    secondary: {
      main: '#30b78d'
    },
    commonColors: {
      grey: '#949494'
    }
  },
  fontFamily: ['Dancing Script'].join(','),
  typography: {
    fontFamily: 'Dancing Script',
    body2: {
      fontFamily: 'Dancing Script',
      fontSize: '20px'
    },
    subtitle1: {
      fontFamily: 'Dancing Script',
      fontSize: '18px',
      fontWeight: 500
    },
    h1: {
      fontFamily: 'Dancing Script',
      fontSize: '48px',
      fontWeight: 800
    },
    h2: {
      fontFamily: 'Dancing Script',
      fontSize: '48px',
      fontWeight: 800
    },

    h3: {
      fontFamily: 'Dancing Script',
      fontSize: '24px',
      fontWeight: 700
    },
    h6: {
      fontFamily: 'Dancing Script'
    },
    caption: {
      fontFamily: 'Dancing Script',
      fontSize: '18px',
      fontWeight: 700
    }
  },
  button: {
    fontFamily: 'Dancing Script',
    fontSize: '18px',
    fontWeight: 400
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 480,
      sm: 768,
      md: 920,
      lg: 1200,
      xl: 1800
    }
  },
  overrides: {
    charts: {
      doughnut: {
        cell1: '#F4B15D',
        cell2: '#395CCA',
        cell3: '#52A2A5',
        cell4: '#B4BDC2',
        cell5: '#8BB439',
        cell6: '#CA39B3',
        cell7: '#dbc362',
        cell8: '#a5b14d',
        cell9: '#b6e566',
        cell10: '#8f25f0',
        cell11: '#b452b0',
        cell12: '#36f946',
        cell13: '#81de6f',
        cell14: '#2eb425',
        cell15: '#f80b15',
        cell16: '#94e924',
        cell17: '#791be7',
        cell18: '#cde6a0',
        cell19: '#d26948',
        cell20: '#1e6550',
        cell21: '#6ec351',
        cell22: '#3e827d',
        cell23: '#613dc0',
        cell24: '#ca1ad0'
      }
    }
  }
})

theme = createTheme(theme, {
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          background: theme.palette.primary.main
        }
      }
    },
    MuiToolbar: {
      regular: {
        backgroundColor: '#ffff00',
        color: '#000000',
        height: '32px',
        minHeight: '32px',
        '@media (min-width: 600px)': {
          minHeight: '48px'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          background: theme.palette.secondary.main,
          border: 0,
          color: 'white',
          padding: '0 30px',
          textTransform: 'inherit',
          fontSize: theme.typography.button.fontSize,
          maxWidth: '280px',
          display: 'flex',
          justifyContent: 'center',
          borderRadius: '30px',
          fontWeight: theme.typography.button.fontWeight,
          fontFamily: theme.typography.button.fontFamily,
          '&:hover': {
            background: '#FFFFFF',
            backgroundColor: 'FFFFFF',
            border: `1px solid ${theme.palette.secondary.main}`,
            color: theme.palette.secondary.main
          },
          '&:active': {
            backgroundColor: '#08795A',
            color: 'white'
          },
          '&:disabled': {
            color: 'inherit',
            '&[type="submit"]': {
              background: theme.palette.primary.disabled,
              color: theme.palette.primary.inverse
            }
          }
        }
      }
    },
    MuiTableBody: {
      root: {
        fontSize: '1.4rem',
        '& tr:hover': {
          background: '#F9F9F9'
        },
        '& .link': {
          color: '#e5f2e3',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }
      }
    },
    MuiTableRow: {
      root: {
        background: '#fff',
        '&$selected': {
          background: 'transparent'
        },
        '&[mode="update"]': {
          background: '#F9F9F9'
        },
        '& .link': {
          '&:hover': {
            color: 'gr'
          }
        },
        '& .idx': {
          color: '#828282',
          wordBreak: 'initial'
        }
      },
      footer: {
        background: 'transparent'
      }
    },
    MuiTableCell: {
      root: {
        padding: '9px 16px',
        fontSize: '1.4rem',
        color: 'inherit',
        fontWeight: 400,
        border: 'none',
        borderBottom: '1px solid #E6EDF1',
        backgroundColor: 'transparent',
        background: 'transparent',
        height: '60px',
        minWidth: 'auto',
        textOverflow: 'ellipsis',
        '@media (max-width: 767px)': {
          height: '50px',
          borderTop: '1px solid #E6EDF1'
        },
        '& > button': {
          flexShrink: 0
        },
        '& [hidden]': {
          display: 'none'
        },
        '&:first-child': {
          paddingLeft: '30px',
          paddingRight: '20px'
        },
        '&:last-child': {
          paddingRight: '30px',
          paddingLeft: '20px'
        }
      },
      paddingNone: {
        '&:first-child': {
          paddingLeft: 0,
          paddingRight: 0
        },
        '&:last-child': {
          paddingRight: 0,
          paddingLeft: 0
        },
        '& div > button': {
          color: '#828282',
          maxWidth: 38,
          maxHeight: 38
        }
      },
      head: {
        color: '#828282',
        fontSize: '1.6rem',
        fontWeight: 400,
        '&$paddingCheckbox': {
          '&:last-child': {
            fontSize: 0,
            '& > *': {
              pointerEvents: 'auto'
            }
          }
        },
        '@media (max-width: 767px)': {
          fontSize: '1.4rem'
        }
      },
      body: {
        wordBreak: 'break-all'
      }
    },
    MuiPaper: {
      elevation2: {
        boxShadow: '0px 5px 10px #EBEBEB'
      },
      rounded: {
        borderRadius: '2px'
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          ...darkScrollbar(
            true
              ? {
                  track: theme.palette.primary.cardColor,
                  thumb: theme.palette.primary.main,
                  active: theme.palette.primary.main
                }
              : undefined
          ),
          //scrollbarWidth for Firefox
          scrollbarWidth: 'thin'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&$focused .MuiIconButton': {
            borderColor: theme.palette.primary.inverse,
            backgroundColor: 'white'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: 'Dancing Script',
          color: theme.palette.primary.inverse,
          caretColor: theme.palette.primary.inverse,
          maxHeight: 52
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: 'none',
          borderRadius: 5,
          width: '100%',
          '& .MuiOutlinedInput-root': {
            background: theme.palette.primary.backgroundLightGreen,
            '&:hover fieldset': {
              borderColor: theme.palette.primary.main
            }
          },
          '&:hover': {
            borderColor: 'transparent'
          },

          '&:focus': {
            borderColor: theme.palette.primary.main
          }
        }
      }
    },
    MuiPaginationItem: {
      root: {
        margin: '0 -1px',
        fontSize: '1.4rem',
        minWidth: '34px',
        borderRadius: 0,
        '@media (max-width: 767px)': {
          fontSize: '1rem'
        }
      },
      page: {
        '&:hover': {},
        '&$selected': {},
        '@media (max-width: 767px)': {
          height: '32px'
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#949494'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Dancing Script'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    }
  }
})

export default theme
