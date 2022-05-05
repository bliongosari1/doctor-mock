import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { ListItem, ListItemText } from '@mui/material';
import theme from '../../../../../theme';
import { AddNewDiagnosis, DropdownDivider, DropdownOptionsList } from './styles';
import Image from 'next/image';
import PlusIcon from '../../../../../public/assets/icons/plus_lg.svg';

type Item = {
    label: string;
};

interface Props<T> {
    options: T[];
    selectedList: T[];
    searchValue: string;
    addToList: (arg: string) => void;
    setSelectedList: (arg: T[]) => void;
    setSearchValue: (arg: string) => void;
}

const DropdownOptions = <T extends Item>(props: Props<T>) => {
    const {
        options = [],
        selectedList = [],
        setSelectedList = () => {},
        addToList = () => {},
        searchValue = '',
        setSearchValue = () => {},
    } = props;

    const [dropdownList, setDropdownList] = useState<T[]>([]);

    useEffect(() => {
        setDropdownList([...options]);
    }, []);

    const handleItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, item: T) => {
        if (!checkExist(selectedList, item)) {
            setSelectedList([...selectedList, item]);
        }
        setSearchValue('');
    };

    const addNewItem = (searchValue: string) => {
        addToList(searchValue);
        setSearchValue('');
    };

    const checkExist = (list: T[], elem: T) => {
        if (list instanceof Array) {
            if (list.some((e) => e.label === elem.label)) {
                return true;
            }
            return;
        }
    };

    const fuseSettings = {
        threshold: 0.2,
        keys: ['label'],
    };

    const fuse = new Fuse(dropdownList, fuseSettings);

    const searchResult = fuse.search(searchValue).map((result) => result.item);

    // When system is selected and search conditions under current system
    return (
        <DropdownOptionsList>
            <div style={{ maxHeight: '250px', overflow: 'scroll', width: '100%' }}>
                {searchResult.length === 0 && (
                    <ListItem>
                        <ListItemText
                            primaryTypographyProps={{
                                style: {
                                    fontSize: '13px',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    marginRight: '2px',
                                },
                            }}
                            primary={`No results found for "${searchValue}"`}
                        />
                        <AddNewDiagnosis onClick={() => addNewItem(searchValue)}>
                            <Image src={PlusIcon} height={20} width={20} alt="" />
                            Add "{searchValue}" as diagnosis
                        </AddNewDiagnosis>
                    </ListItem>
                )}
                {searchResult.map((item, index) => (
                    <ListItem
                        key={index}
                        button
                        onClick={(event) => handleItemClick(event, item)}
                        style={{
                            textOverflow: 'ellipsis',
                            padding: '0px',
                        }}
                    >
                        <DropdownDivider
                            style={{
                                borderBottom:
                                    index < searchResult.length - 1 ? `1px solid ${theme.palette.divider}` : 'unset',
                            }}
                        >
                            <ListItemText
                                primaryTypographyProps={{
                                    style: {
                                        fontSize: '13px',
                                        fontFamily: 'Lato',
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden',
                                        marginRight: '2px',
                                    },
                                }}
                                primary={item.label}
                            />
                        </DropdownDivider>
                    </ListItem>
                ))}
            </div>
        </DropdownOptionsList>
    );
};

export default DropdownOptions;
