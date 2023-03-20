import Select from 'react-select'
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { perPageStyles } from './styles'
import theme from "../../config/theme/theme";

const customStyles = {
    control: (styles, state) => ({
        ...styles,
        margin: '0 5px',
        width: 65,
        height: 40,
        minHeight: 32,
        borderRadius: 2,
        border: state.isDisabled
            ? 0
            : state.isFocused
                ? '1px solid #B4BDC2 !important'
                : '1px solid #E6EDF1 !important',
        boxShadow: 'none',
        '@media (max-width: 767px)': {
            flexShrink: 0,
            width: '45px',
            height: 32
        }
    }),
    menu: styles => ({
        ...styles,
        width: 65,
        margin: '0 5px',
        maxHeight: 120
    }),
    indicatorsContainer: styles => ({
        ...styles,
        padding: '0 4px',
        color: theme.palette.primary.inverse,
        '@media (maxWidth: 767px)': {
            padding: '0 4px'
        }
    }),
    option: (styles, state) => ({
        ...styles,
        borderBottom: '0.5px solid #E6EDF1',
        '&:active': { background: theme.palette.primary.main },
        background: state.isFocused ? '#F9F9F9' : '#FFF',
        color: state.isSelected && theme.palette.primary.inverse,
        fontWeight: state.isSelected && 500,
        padding: '7px 14px',
        '&:last-child': {
            borderBottom: 'none'
        }
    }),
    valueContainer: styles => ({
        ...styles,
        '@media (maxWidth: 767px)': {
            padding: '2px'
        }
    })
}

const PerPage = ({ changed, ...props }) => {
    const classes = perPageStyles();
    const changedComponents = {
        IndicatorSeparator: () => null,
        DropdownIndicator: ArrowDropDownOutlinedIcon
    }
    return (
        <Select
            className={classes.select}
            styles={customStyles}
            components={changed ? changed : changedComponents}
            menuPlacement="auto"
            {...props}
        />
    )
}

export default (PerPage)
