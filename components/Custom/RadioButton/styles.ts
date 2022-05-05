// import { InputBase } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../theme';

export const CircleButton = styled('div')((props: { selected?: boolean; disabled?: boolean }) => ({
    border: props.selected
        ? `1px solid ${theme.palette.primary.main}`
        : props.disabled
        ? `1px solid ${theme.palette.text.red}`
        : '1px solid #C5CEE0',
    background: props.selected
        ? theme.palette.primary.white
        : props.disabled
        ? `${theme.palette.text.red}1A`
        : '#f5f7f9',
    padding: props.selected ? '3.5px' : '0px',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    '&:hover': {
        cursor: 'pointer',
        opacity: 0.92,
    },
}));

export const SelectedButton = styled('div')((props: { selected: boolean }) => ({
    background: props.selected ? theme.palette.primary.main : '#f5f7f9',
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    '&:hover': {
        cursor: 'pointer',
        opacity: 0.92,
    },
}));
