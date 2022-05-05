import React, { useState } from 'react';
import { ClickAwayListener } from '@mui/material';
import {
    MenuItemStyled,
    MenuStyled,
    MenuItemText,
    ImageWrapper,
    MenuItemStyledWrapper,
    DisplayedLabelWrapper,
    DisplayedLabelText,
} from './styles';
import ArrowDownIcon from '../../../public/assets/icons/arrow_down_lg.svg';
import ArrowUpIcon from '../../../public/assets/icons/arrow_up_lg.svg';
import theme from '../../../theme';
import Image from 'next/image';

interface Props {
    options: {
        label: string;
        icon?: string;
    }[];
    placeholder?: string;
    defaultValue?: string;
}

export const SearchFilter: React.FC<Props> = (props) => {
    const { options, defaultValue = '' } = props;
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
    const [value, setValue] = useState<string>(defaultValue);

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
                <DisplayedLabelWrapper
                    onClick={(e) => {
                        openDropdown(e);
                    }}
                >
                    <DisplayedLabelText>Sort by {value.toLowerCase()}</DisplayedLabelText>
                    <ImageWrapper>
                        <Image src={open ? ArrowUpIcon : ArrowDownIcon} height={25} width={25} alt="" />
                    </ImageWrapper>
                </DisplayedLabelWrapper>
                <MenuStyled
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
