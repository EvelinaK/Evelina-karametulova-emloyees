import theme from "../../config/theme/theme";
export const paginationStyles = () => ({
  root: {
    root: {
      margin: "0 15px",
      [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
        margin: "0 5px 10px",
      },
    },
    ul: {
      flexWrap: "nowrap",
    },
  },
  wrapper: {
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&.table-footer": {
      padding: "30px 0 0",
      [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
        padding: "20px 16px 0",
        display: "flex",
        justifyContent: "center",
      },
    },
    "& ul": {
      borderRadius: "2px",
      overflow: "hidden",
      "& svg": {
        color: theme.palette.primary.inverse,
      },
    },
    "& > button": {
      borderRadius: 0,
      border: "none",
      borderRight: `1px solid ${theme.palette.primary.inverse}`,
      background: "white",
      borderBottom: "2px solid transparent",
      "&.Mui-selected": {
        background: "white",
        borderBottom: `2px solid ${theme.palette.primary.inverse}`,
      },
    },
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      margin: " 0 -5px",
      flexWrap: "wrap",
      fontSize: "10px",
      "& div > div": {
        fontSize: "10px",
        "& svg": {
          color: "blue",
        },
      },
    },
  },
  perPageWrapper: {
    margin: "0 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      margin: " 0 5px 10px",
    },
  },
  selected: {
    backgroundColor: "none",
    color: "#30b78d",

    "&.Mui-selected:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-selected": {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "transparent",

      "&:after": {
        content: "''",
        backgroundColor: "#30b78d",
        width: "34px",
        height: "2px",
      },
    },
  },
});

export const perPageStyles = () => ({
  select: {
    width: "auto",
  },
});
