import { useTranslation } from "react-i18next";

import TextField from "@mui/material/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { searchStyles } from './styles'
import styled from "styled-components";
import theme from "../../config/theme/theme";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-input": {
    padding: 0,
    color: theme.palette.primary.inverse,
  },

  "& .MuiOutlinedInput-root": {
    borderRadius: "6px",
    color: theme.palette.primary.inverse,
    padding: "11px 12px",
    fontSize: 20,

    "& fieldset": {
      borderColor: "#C2D5B2",
    },

    "&:hover fieldset": {
      borderColor: "#C2D5B2",
    },
  },
});



const SearchInput = ({
  field,
  placeholder,
  icon: Icon,
  onChange,
  format = "toLowerCase",
  ...props
}) => {
  const { t } = useTranslation();

  const classes = searchStyles();

  const placeholderTranslated = placeholder
    ? t(placeholder)
    : t("shared:Search");
  const iconRender = {
    startAdornment: (
      <InputAdornment position="start">
        {Icon ? <Icon /> : <SearchOutlinedIcon />}
      </InputAdornment>
    ),
  };

  const handleChange = (e) => {
    if (onChange) {
      const value = e.target.value;
      const formatted =
        format && typeof value[format] === "function" ? value[format]() : value;
      onChange(formatted);
    }
  };

  return (
    <CssTextField
      {...field}
      {...props}
      onChange={handleChange}
      variant="outlined"
      fullWidth
      placeholder={placeholderTranslated}
      InputProps={iconRender}
      data-test
    />
  );
};

export default (SearchInput);
