import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { CalendarButton, StyledBox, StyledInput } from './styles';
import StyledSVG from '../../StyledSVG';
import CalendarIcon from '../../../public/assets/icons/calendar.svg';
import theme from '../../../theme';

interface Props {
    width?: number;
    warning?: boolean;
    value?: [Date | null, Date | null];
    setValue?: (arg: [Date | null, Date | null]) => void;
}

export const DateRangepicker: React.FC<Props> = (props) => {
    const [localValue, setLocalValue] = useState<[Date | null, Date | null]>([new Date(), null]);
    const { width, warning = false, value = localValue, setValue = setLocalValue } = props;

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
                value={value}
                onChange={(newValue) => setValue(newValue)}
                renderInput={(startProps, endProps) => (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <StyledBox warning={warning}>
                            <CalendarButton onClick={() => {}}>
                                <StyledSVG
                                    src={CalendarIcon}
                                    color={warning ? theme.palette.text.red : theme.palette.text.secondary}
                                    style={{ marginRight: '5px', marginLeft: '5px' }}
                                />
                            </CalendarButton>
                            <StyledInput
                                ref={startProps.inputRef}
                                {...startProps.inputProps}
                                warning={warning}
                                style={{ width: width }}
                            />
                        </StyledBox>
                        <Box
                            sx={{
                                margin: '0px 5px',
                                fontSize: '12px',
                                color: warning ? theme.palette.text.red : theme.palette.text.main,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            to
                        </Box>
                        <StyledBox warning={warning}>
                            <CalendarButton onClick={() => {}}>
                                <StyledSVG
                                    src={CalendarIcon}
                                    color={warning ? theme.palette.text.red : theme.palette.text.secondary}
                                    style={{ marginRight: '5px', marginLeft: '5px' }}
                                />
                            </CalendarButton>
                            <StyledInput
                                ref={endProps.inputRef}
                                {...endProps.inputProps}
                                warning={warning}
                                style={{ width: width }}
                            />
                        </StyledBox>
                    </div>
                )}
            />
        </LocalizationProvider>
    );
};

export default DateRangepicker;
