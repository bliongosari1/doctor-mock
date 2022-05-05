import React from 'react';
import Image from 'next/image';
import CheckedIcon from '../../../public/assets/icons/checkedIcon.svg';
import UncheckedIcon from '../../../public/assets/icons/unchecked.svg';
import {
    MenuTitle,
    StyledMenu,
    ButtonsWrapper,
    ClearButton,
    MenuItemStyled,
    MenuItemStyledWrapper,
    MenuItemText,
    CheckboxStyled,
    MenuItemSubheading,
    FilterGroupWrapper,
} from './styles';
import theme from '../../../theme';

interface Props {
    anchorEl: HTMLDivElement | null;
    open: boolean;
    handleClose: () => void;
    typeFilter: string[];
    statusFilter: string[];
    patientTypeFilter: string[];
    setTypeFilter: (arg: string[]) => void;
    setStatusFilter: (arg: string[]) => void;
    setPatientTypeFilter: (arg: string[]) => void;
}

const typeOptions = [
    {
        label: 'Phone',
        value: 'Voice Call',
    },
    {
        label: 'Video',
        value: 'Video Call',
    },
    {
        label: 'Chat',
        value: 'Chat',
    },
];

const statusOptions = [
    {
        label: 'Anytime',
        value: 'Anytime',
    },
    {
        label: 'Unread',
        value: 'Unread',
    },
    {
        label: 'In progress',
        value: 'In progress',
    },
    {
        label: 'Not started',
        value: 'Not started',
    },
    {
        label: 'Incomplete',
        value: 'Incomplete',
    },
];

const patientTypeOptions = [
    {
        label: 'Follow up appt',
        value: 'false',
    },
    {
        label: 'New patient',
        value: 'true',
    },
];

type Options = {
    label: string;
    value: string;
};

export const AppoinmentFilter: React.FC<Props> = (props) => {
    const {
        anchorEl,
        open,
        handleClose,
        typeFilter,
        statusFilter,
        patientTypeFilter,
        setTypeFilter,
        setStatusFilter,
        setPatientTypeFilter,
    } = props;

    const handleFilterChange = (filter: Options, list: string[], func: (arg: string[]) => void) => {
        if (list.includes(filter.value)) {
            func([...list.filter((l) => l != filter.value)]);
        } else {
            func([...list, filter.value]);
        }
    };

    const clearAllFilters = () => {
        setPatientTypeFilter([]);
        setTypeFilter([]);
        setStatusFilter([]);
    };

    const selectAllFilter = () => {
        setPatientTypeFilter([...patientTypeOptions.map((filter) => filter.value)]);
        setTypeFilter([...typeOptions.map((filter) => filter.value)]);
        setStatusFilter([...statusOptions.map((filter) => filter.value)]);
    };

    return (
        <StyledMenu
            id="styled-menu"
            MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            <MenuTitle>Filter Consults</MenuTitle>
            <ButtonsWrapper>
                <ClearButton
                    active={
                        typeFilter.length !== typeOptions.length ||
                        statusFilter.length !== statusOptions.length ||
                        patientTypeFilter.length !== patientTypeOptions.length
                    }
                    onClick={() => selectAllFilter()}
                >
                    Select all
                </ClearButton>
                <ClearButton active onClick={() => clearAllFilters()}>
                    Clear all
                </ClearButton>
            </ButtonsWrapper>
            <FilterGroupWrapper>
                <MenuItemSubheading>Type</MenuItemSubheading>
                {typeOptions.map((option, index) => (
                    <MenuItemStyled
                        key={index}
                        onClick={() => {
                            handleFilterChange(option, typeFilter, setTypeFilter);
                        }}
                    >
                        <MenuItemStyledWrapper
                            style={{
                                borderBottom: `1px solid ${theme.palette.divider}`,
                            }}
                        >
                            <CheckboxStyled
                                icon={<Image src={UncheckedIcon} height={18} width={18} alt="" />}
                                checkedIcon={<Image src={CheckedIcon} height={18} width={18} alt="" />}
                                disableRipple
                                checked={typeFilter.includes(option.value)}
                            />
                            <MenuItemText>{option.label}</MenuItemText>
                        </MenuItemStyledWrapper>
                    </MenuItemStyled>
                ))}
            </FilterGroupWrapper>
            <FilterGroupWrapper>
                <MenuItemSubheading>Status</MenuItemSubheading>
                {statusOptions.map((option, index) => (
                    <MenuItemStyled
                        key={index}
                        onClick={() => {
                            handleFilterChange(option, statusFilter, setStatusFilter);
                        }}
                    >
                        <MenuItemStyledWrapper
                            style={{
                                borderBottom: `1px solid ${theme.palette.divider}`,
                            }}
                        >
                            <CheckboxStyled
                                icon={<Image src={UncheckedIcon} height={18} width={18} alt="" />}
                                checkedIcon={<Image src={CheckedIcon} height={18} width={18} alt="" />}
                                disableRipple
                                checked={statusFilter.includes(option.value)}
                            />
                            <MenuItemText>{option.label}</MenuItemText>
                        </MenuItemStyledWrapper>
                    </MenuItemStyled>
                ))}
            </FilterGroupWrapper>
            <FilterGroupWrapper style={{ marginBottom: 0 }}>
                <MenuItemSubheading>Patient Type</MenuItemSubheading>
                {patientTypeOptions.map((option, index) => (
                    <MenuItemStyled
                        key={index}
                        onClick={() => {
                            handleFilterChange(option, patientTypeFilter, setPatientTypeFilter);
                        }}
                    >
                        <MenuItemStyledWrapper
                            style={{
                                borderBottom:
                                    index < patientTypeOptions.length - 1
                                        ? `1px solid ${theme.palette.divider}`
                                        : 'unset',
                            }}
                        >
                            <CheckboxStyled
                                icon={<Image src={UncheckedIcon} height={18} width={18} alt="" />}
                                checkedIcon={<Image src={CheckedIcon} height={18} width={18} alt="" />}
                                disableRipple
                                checked={patientTypeFilter.includes(option.value)}
                            />
                            <MenuItemText>{option.label}</MenuItemText>
                        </MenuItemStyledWrapper>
                    </MenuItemStyled>
                ))}
            </FilterGroupWrapper>
        </StyledMenu>
    );
};

export default AppoinmentFilter;
