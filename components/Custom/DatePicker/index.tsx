import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ClickAwayListener } from '@mui/material';
import { CalendarButton, StyledInput } from './styles';
import StyledSVG from '../../StyledSVG';
import CalendarIcon from '../../../public/assets/icons/calendar.svg';
import theme from '../../../theme';

interface Props {
    width?: number;
    warning?: boolean;
    value?: Date | null;
    setValue?: (arg: Date | null) => void;
}

export const Datepicker: React.FC<Props> = (props) => {
    const [localValue, setLocalValue] = useState<Date | null>(new Date());
    const { width, warning = false, value = localValue, setValue = setLocalValue } = props;
    const [open, setOpen] = useState(false);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <ClickAwayListener onClickAway={() => setOpen(false)}>
                <DatePicker
                    value={value}
                    open={open}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    onClose={() => setOpen(false)}
                    renderInput={({ inputRef, inputProps }) => (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                border: `1px solid ${warning ? theme.palette.text.red : '#C5CEE0'}`,
                                background: 'white',
                                padding: '6px 4px',
                                borderRadius: '12px',
                            }}
                        >
                            <CalendarButton onClick={() => setOpen(true)}>
                                <StyledSVG
                                    src={CalendarIcon}
                                    color={warning ? theme.palette.text.red : theme.palette.text.secondary}
                                    style={{ marginRight: '5px', marginLeft: '5px' }}
                                />
                            </CalendarButton>
                            <StyledInput
                                warning={warning}
                                ref={inputRef}
                                {...inputProps}
                                style={{ border: 'none', width: width }}
                            />
                        </Box>
                    )}
                />
            </ClickAwayListener>
        </LocalizationProvider>
    );
};

export default Datepicker;
