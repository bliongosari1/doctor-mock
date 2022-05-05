import React, { useState } from 'react';
import SearchIcon from '../../../../public/assets/icons/search_sm_grey.svg';
import { ClickAwayListener, InputAdornment } from '@mui/material';
import { Dropdown, ImageWrapper } from './styles';
import Image from 'next/image';
import DropdownOptions from './DropdownOptions';

type Item = {
    label: string;
};

interface Props<T> {
    options?: T[];
    selectedList?: T[];
    searchValue?: string;
    addToList?: (arg: string) => void;
    setSelectedList?: (arg: T[]) => void;
    setSearchValue?: (arg: string) => void;
    handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    style?: React.CSSProperties;
}

const ConditionAutocomplete = <T extends Item>(props: Props<T>) => {
    const [searchVal, setSearchVal] = useState('');
    const {
        options = [],
        selectedList = [],
        setSelectedList = () => {},
        addToList = () => {},
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
        setSearchValue('');
        setSystemClickAway(false);
    };

    // const clearAll = () => {
    //     setSelectedList([]);
    // };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
                <Dropdown
                    style={style}
                    placeholder={placeholder}
                    onChange={handleInputChange}
                    value={searchValue}
                    onFocus={() => {
                        setSystemClickAway(true);
                    }}
                    startAdornment={
                        <InputAdornment position="start">
                            <ImageWrapper>
                                <Image src={SearchIcon} height={20} width={20} alt="" />
                            </ImageWrapper>
                        </InputAdornment>
                    }
                />
                {searchVal.length > 0 && (
                    <DropdownOptions
                        options={options}
                        addToList={addToList}
                        searchValue={searchValue}
                        setSearchValue={setSearchVal}
                        selectedList={selectedList}
                        setSelectedList={setSelectedList}
                    ></DropdownOptions>
                )}
            </div>
        </ClickAwayListener>
    );
};

export default ConditionAutocomplete;
