import React, { useState, useEffect } from 'react';
import SearchIcon from '../../../../public/assets/icons/search_sm_grey.svg';
import CrossIcon from '../../../../public/assets/icons/grey_cross.svg';
import { ClickAwayListener, InputAdornment } from '@mui/material';
import { AutocompleteWrapper, Dropdown, ImageWrapper } from './styles';
import Image from 'next/image';
import DropdownOptions from './DropdownOptions';

type Item = {
    label: string;
};

interface Props<T> {
    options?: T[];
    selected?: T;
    searchValue?: string;
    setSelected?: (arg: T | undefined) => void;
    setSearchValue?: (arg: string) => void;
    handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    style?: React.CSSProperties;
}

const MedicareAutocomplete = <T extends Item>(props: Props<T>) => {
    const [searchVal, setSearchVal] = useState('');
    const {
        options = [],
        selected,
        setSelected = () => {},
        searchValue = searchVal,
        setSearchValue = setSearchVal,
        handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchVal(e.target.value);
        },
        placeholder = 'Search for a condition',
        style = {},
    } = props;

    // The state to control the presentation click away listener

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [systemClickAway, setSystemClickAway] = useState(false);

    // handles click outside the dropdown
    const handleClickAway = () => {
        setSearchValue(selected ? selected.label : '');
        setSystemClickAway(false);
    };

    const clearAll = () => {
        setSearchValue('');
        setSelected(undefined);
    };

    useEffect(() => {
        if (selected && selected.label.length > 0) {
            setSearchValue(selected.label);
        }
    }, [selected]);

    useEffect(() => {
        if (selected && searchValue !== selected.label) {
            setSelected(undefined);
        }
    }, [searchValue]);

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <AutocompleteWrapper>
                <Dropdown
                    style={style}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    value={selected && selected?.label !== '' ? selected?.label : searchValue}
                    onFocus={() => {
                        setSystemClickAway(true);
                    }}
                    startAdornment={
                        <InputAdornment position="start">
                            <ImageWrapper>
                                <Image src={SearchIcon} height={20} width={20} alt="searchIcon" />
                            </ImageWrapper>
                        </InputAdornment>
                    }
                    endAdornment={
                        selected?.label !== '' && (
                            <InputAdornment position="end" onClick={() => clearAll()}>
                                <ImageWrapper>
                                    <Image src={CrossIcon} height={25} width={25} alt="crossIcon" />
                                </ImageWrapper>
                            </InputAdornment>
                        )
                    }
                />
                {searchVal.length > 0 && searchVal !== selected?.label && (
                    <DropdownOptions
                        options={options}
                        searchValue={searchValue}
                        setSearchValue={setSearchVal}
                        selected={selected}
                        setSelected={setSelected}
                    ></DropdownOptions>
                )}
            </AutocompleteWrapper>
        </ClickAwayListener>
    );
};

export default MedicareAutocomplete;
