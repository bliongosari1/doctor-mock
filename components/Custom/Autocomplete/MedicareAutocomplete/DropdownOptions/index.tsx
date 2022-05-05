import React, { useState } from 'react';
import Fuse from 'fuse.js';
import { ListItem, ListItemText } from '@mui/material';
import theme from '../../../../../theme';
import { DropdownDivider, DropdownOptionsList, DropdownWrapper } from './styles';

type Item = {
    label: string;
};

interface Props<T> {
    options: T[];
    selected?: T;
    searchValue: string;
    setSelected: (arg: T) => void;
    setSearchValue: (arg: string) => void;
}

const DropdownOptions = <T extends Item>(props: Props<T>) => {
    const { options = [], setSelected = () => {}, searchValue = '' } = props;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [dropdownList, setDropdownList] = useState<T[]>(options);

    const handleItemClick = (item: T) => {
        setSelected(item);
    };

    // const addNewItem = (searchValue: string) => {
    //     setSelected(searchValue);
    // };

    // const checkExist = (list: T[], elem: string) => {
    //     if (list instanceof Array) {
    //         if (list.some((e) => e.label === elem)) {
    //             return true;
    //         }
    //         return;
    //     }
    // };

    const fuseSettings = {
        threshold: 0.2,
        keys: ['label'],
    };

    const fuse = new Fuse(dropdownList, fuseSettings);

    const searchResult = fuse.search(searchValue).map((result) => result.item);

    return (
        <DropdownOptionsList>
            <DropdownWrapper>
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
                        {/* <AddNewDiagnosis onClick={() => addNewItem(searchValue)}>
                            <Image src={PlusIcon} height={20} width={20} alt="" />
                            Add "{searchValue}" as medicare
                        </AddNewDiagnosis> */}
                    </ListItem>
                )}
                {searchResult.map((dia, index) => (
                    <ListItem
                        key={index}
                        button
                        onClick={() => handleItemClick(dia)}
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
                                primary={dia.label}
                            />
                        </DropdownDivider>
                    </ListItem>
                ))}
            </DropdownWrapper>
        </DropdownOptionsList>
    );
};

export default DropdownOptions;
