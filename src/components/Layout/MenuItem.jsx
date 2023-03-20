import { Box, Typography } from "@material-ui/core";
import { menuItemStyles } from "./styles";

const MenuItem = ({ title, icon, hideDescription, ...props }) => {
  const classes = menuItemStyles();


  const cnWrapper = !hideDescription ? classes.wrapperLight : classes.wrapper

  return (
    <Box sx={cnWrapper} {...props}>
      {icon}
      {hideDescription && <Typography variant="h6">{title}</Typography>}
    </Box>
  );
};

export default MenuItem;
