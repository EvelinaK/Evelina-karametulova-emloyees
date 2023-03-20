import theme from "../../config/theme/theme";

export const searchStyles = () => ({
  inputStyles: {
    background: "rgba(44, 45, 46, 0.3)",
    border: "1px solid #C2D5B2",
    borderRadius: "6px",
    color: theme.palette.primary.inverse,
    margin: 0,
    padding: 0,
  },
  inputIconStyle: {
    height: "auto",
    width: "24px",
    zIndex: "100",
    fill: theme.palette.primary.inverse,
  },
});
