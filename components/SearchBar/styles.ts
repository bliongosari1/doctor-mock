import { InputBase } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../theme';

export const styles = {};

export const SearchWrapper = styled('div')({
    display: 'flex',
});

export const HeaderSearchBar = styled(InputBase)({
    width: 343,
    height: 48,
    borderRadius: 12,
    fontSize: 16,
    marginRight: '7.5px',
    padding: '5px 20px',
    background: '#F7F9FC',
    '&.Mui-focused': {
        border: `solid 2px ${theme.palette.primary.main}`,
    },
    '::placeholder': {
        fontSize: 11,
        color: theme.palette.text.tertiary,
    },
});

export const SearchText = styled('span')({
    color: theme.palette.primary.main,
    fontSize: '16px',
    fontWeight: '700',
});
