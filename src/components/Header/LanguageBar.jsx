import { useState, useEffect, } from "react";
import { useTranslation } from 'react-i18next'
import Select from 'react-select'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { languageBarStyles } from "./styles";

const customStyles = {
    control: styles => ({
        ...styles,
        width: 75,
        height: 40,
        borderRadius: 2,
        border: 0,
        boxShadow: 'none',
        textTransform: 'uppercase',
        backgroundColor: 'transparent',
        '@media (max-width: 767.95px)': {
            width: '70px'
        }
    }),
    menu: styles => ({
        ...styles,
        marginTop: 0,
        width: 120,
        marginBottom: 0,
        borderRadius: 2,
        boxShadow: '0px 2px 4px rgba(204, 204, 204, 0.25)',
        border: '1px solid #e5f2e3',
        marginLeft: 22,
        '@media (max-width: 767.95px)': {
            margin: 0,
            left: '50%',
            transform: 'translate(-50%, 0)'
        }
    }),
    menuList: styles => ({ ...styles, margin: 0, padding: 0 }),
    option: (styles, state) => ({
        ...styles,
        '& span:first-of-type': {
            fontWeight: 500,
            width: 30
        },
        borderBottom: '0.5px solid #E6EDF1',
        '&:active': { background: '#F9F9F9' },
        background: state.isFocused ? '#e5f2e333' : '#FFF',
        color: state.isSelected ? '#1AAA8D' : '#333333 !important',
        fontWeight: state.isSelected && 500,
        padding: '12px 10px',
        '&:last-child': {
            borderBottom: 'none'
        }
    })
}

const LanguageBar = () => {
    const { i18n } = useTranslation()
    const classes = languageBarStyles();
    const [value, setValue] = useState(
        localStorage.getItem("i18nextLng") || "EN"
    );


    useEffect(() => {
        i18n.changeLanguage(value);
    }, [value]);

    const changeLang = ({ value }) => {
        setValue(value)
    }
    const languagesList = [
        { value: 'EN', name: "English" },
        { value: 'BG', name: "Bulgarian" }
    ]

    const options = languagesList.map(el => ({
        value: el.value,
        label: (
            <div style={classes.option}>
                <span>{el.shortName}</span>
                <span>{el.name}</span>
            </div>
        )
    }))

    const label = (
        <div style={classes.control}>
            <LanguageOutlinedIcon />
            <span> {i18n.language}</span>
        </div>
    )

    const changedComponents = {
        IndicatorSeparator: () => null,
        DropdownIndicator: null
    }
    return (
        <>
            <Select
                value={{ value: i18n.language, label: label }}
                onChange={changeLang}
                options={options}
                styles={customStyles}
                components={changedComponents}
                isSearchable={false}
            />
        </>
    )
}

export default (LanguageBar)
