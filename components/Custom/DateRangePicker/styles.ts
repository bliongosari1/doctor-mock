import { InputBase, Box } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../theme';

export const DateInput = styled(InputBase)({
    fontFamily: 'Lato',
    backgroundColor: '#F7F9FC',
    padding: '3px 9px',
    fontSize: '15px',
    color: theme.palette.text.secondary,
    borderRadius: '12px',
    marginBottom: '16px',
    '& .Mui-focused': {
        textOverflow: 'ellipsis',
    },
    '& .MuiInputBase-input': {
        color: theme.palette.text.secondary,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    '&:hover': {
        cursor: 'pointer',
        // border: `solid 2px ${theme.palette.primary.main}`,
    },
    '&.MuiInputBase-input': {
        '&:hover': {
            cursor: 'pointer',
        },
    },
    '::placeholder': {
        color: theme.palette.text.secondary,
    },
});

export const StyledInput = styled('input')((props: { warning?: boolean }) => ({
    border: 'none',
    color: props.warning ? theme.palette.text.red : theme.palette.text.main,
    ':focus': {
        outline: 'none',
    },
    '::placeholder': {
        color: props.warning ? theme.palette.text.red : 'undefined',
    },
}));

export const CalendarButton = styled('div')({
    '&:hover': {
        cursor: 'pointer',
        opacity: '0.92',
    },
});

export const StyledBox = styled(Box)((props: { warning?: boolean }) => ({
    display: 'flex',
    alignItems: 'center',
    border: `1px solid ${props.warning ? theme.palette.text.red : '#C5CEE0'}`,
    background: 'white',
    padding: '6px 4px',
    borderRadius: '12px',
}));

export const styles = {};
