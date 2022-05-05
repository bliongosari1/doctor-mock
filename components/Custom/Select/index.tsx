import React, { useState } from 'react';
import { InputAdornment, ClickAwayListener } from '@mui/material';
import { MenuItemStyled, MenuStyled, MenuItemText, ImageWrapper, Dropdown, MenuItemStyledWrapper } from './styles';
import ArrowDownIcon from '../../../public/assets/icons/arrow_down_lg.svg';
import ArrowUpIcon from '../../../public/assets/icons/arrow_up_lg.svg';
import theme from '../../../theme';
import Image from 'next/image';

interface Props {
    options: {
        label: string;
        icon?: string;
    }[];
    value: string;
    setValue: (arg: string) => void;
    style?: React.CSSProperties;
    menuStyle?: React.CSSProperties;
    menuItemStyle?: React.CSSProperties;
    iconSize?: number;
    placeholder?: string;
    defaultValue?: string;
}
export const Select: React.FC<Props> = (props) => {
    const { defaultValue = '' } = props;

    const {
        options,
        placeholder = 'Search',
        value = defaultValue,
        setValue,
        style,
        menuStyle,
        menuItemStyle,
        iconSize = 33,
    } = props;
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const handleClick = (item: string) => {
        setValue(item);
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const openDropdown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <>
                <Dropdown
                    style={style}
                    placeholder={placeholder}
                    readOnly
                    value={value}
                    onClick={(e) => {
                        openDropdown(e);
                    }}
                    // onBlur={handleInputBaseActive}
                    endAdornment={
                        <InputAdornment position="start">
                            <ImageWrapper>
                                <Image
                                    src={open ? ArrowUpIcon : ArrowDownIcon}
                                    height={iconSize}
                                    width={iconSize}
                                    alt=""
                                />
                            </ImageWrapper>
                        </InputAdornment>
                    }
                />
                <MenuStyled
                    style={menuStyle}
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    PaperProps={{
                        style: {
                            width: anchorEl ? anchorEl.offsetWidth : 'unset',
                            borderRadius: '12px',
                        },
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {options.map((option, index) => (
                        <MenuItemStyled key={index} onClick={() => handleClick(option.label)}>
                            <MenuItemStyledWrapper
                                style={{
                                    ...menuItemStyle,
                                    borderBottom:
                                        index < options.length - 1 ? `1px solid ${theme.palette.divider}` : 'unset',
                                }}
                            >
                                {option.icon && <Image src={option.icon} height={23} width={23} alt="optionIcon" />}
                                <MenuItemText>{option.label}</MenuItemText>
                            </MenuItemStyledWrapper>
                        </MenuItemStyled>
                    ))}
                </MenuStyled>
            </>
        </ClickAwayListener>
    );
};
