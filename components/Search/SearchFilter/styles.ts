import { Menu, MenuItem, InputBase } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../theme';

export const MenuItemStyled = styled(MenuItem)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Lato',
    fontSize: '13px',
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    padding: '0px',
});

export const MenuItemStyledWrapper = styled('div')({
    width: '100%',
    padding: '10px 0px',
    marginLeft: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
});

export const MenuStyled = styled(Menu)({
    '& .MuiList-root': {
        padding: '0px',
    },
});

export const MenuItemText = styled('span')({
    marginLeft: '10px',
});

export const Dropdown = styled(InputBase)({
    fontFamily: 'Lato',
    // backgroundColor: '#F7F9FC',
    // padding: '6px 0px 6px 15px',
    fontSize: '16px',
    color: theme.palette.primary.main,
    fontWeight: '700',
    '& .Mui-focused': {
        textOverflow: 'ellipsis',
    },
    '& .MuiInputBase-input': {
        color: theme.palette.primary.main,
        fontWeight: '700',
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
});

export const DisplayedLabelWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ':hover': {
        cursor: 'pointer',
    },
});

export const DisplayedLabelText = styled('span')({
    fontSize: '16px',
    color: theme.palette.primary.main,
    fontWeight: '700',
    marginRight: '5px',
});
