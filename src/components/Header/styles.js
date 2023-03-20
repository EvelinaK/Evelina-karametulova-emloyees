import theme from "config/theme/theme";

export const useStyles = () => ({
  content: {
    padding: "2% 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",

    [theme.breakpoints.down(theme.breakpoints.values.xl)]: {
      width: "100%",
    },
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      width: "100%",
    },
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      width: "100%",
    },
  },

  header: {
    "&.MuiAppBar-positionStatic": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.inverse,
      boxShadow: "none",
      borderBottom: `1px solid ${theme.palette.primary.main}`,
      display: "flex",
      justifyContent: "flex-end",
      "& > div": {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingLeft: "60px!important",
        paddingRight: "60px!important",
     
      [theme.breakpoints.down(theme.breakpoints.values.xl)]: {
        paddingLeft: "40px!important",
        paddingRight: "40px!important",
      },
      [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
        paddingLeft: "40px!important",
        paddingRight: "40px!important",
      },
      [theme.breakpoints.down(theme.breakpoints.values.md)]: {
        paddingLeft: "30px!important",
        paddingRight: "30px!important",
        position: "relative",
      },
      [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
        paddingLeft: "20px!important",
        paddingRight: "20px!important",
        position: "relative",
      },
    },
    },
  },

  box: {
    display: "flex",
  },
  contentHead: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down(theme.breakpoints.values.xl)]: {
      width: "110%",
    },
    [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
      width: "95%",
    },
  },
});

export const languageBarStyles = () => ({
  control: {
    display: "flex",
    color: theme.palette.primary.inverse,
    cursor: "pointer",
    alignItems: "center",
    "& svg": {
      marginRight: 5,
      [theme.breakpoints.down("xs")]: {},
    },
    "&:hover": {
      color: theme.palette.primary.inverse,
    },
  },

  option: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  code: {
    width: 20,
    fontWight: " 500 !important",
  },
});
