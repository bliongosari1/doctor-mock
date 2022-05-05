import { InputBase } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../../theme';

export const Dropdown = styled(InputBase)({
    fontFamily: 'Lato',
    backgroundColor: '#F7F9FC',
    padding: '6px 9px 6px 19px',
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

export const ImageWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '7.5px',
});

export const styles = {};
