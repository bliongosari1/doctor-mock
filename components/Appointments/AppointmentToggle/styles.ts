import { Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../theme';

export const styles = {};

export const StyledMenu = styled(Menu)({
    '& .MuiPaper-root': {
        borderRadius: '8px',
        maxHeight: '600px',
        minWidth: '180px',
        overflow: 'scroll',
        marginTop: '-10px',
        color: theme.palette.text.primary,
        fontFamily: 'Lato',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12)',
        '& .MuiMenu-list': {
            padding: '0px',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: 15,
            },
            '&:active': {
                // backgroundColor: 'red',
            },
        },
    },
});

export const MenuTitle = styled('span')({
    fontSize: '18px',
    fontWeight: '700',
    paddingLeft: '16px',
});

export const ButtonsWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px 0 10px',
    padding: '0 16px',
});

export const ClearButton = styled('span')((props: { active?: boolean }) => ({
    fontSize: '14px',
    fontWeight: '700',
    color: props.active ? theme.palette.primary.main : theme.palette.text.tertiary,
    '&:hover': {
        cursor: 'pointer',
        opacity: '0.92',
    },
}));

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
    padding: '12px 0px',
    marginLeft: '16px',
    paddingRight: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
});

export const MenuStyled = styled(Menu)({
    '& .MuiList-root': {
        padding: '0px',
    },
});

export const MenuItemSubheading = styled('div')({
    margin: '5px 0px',
    marginLeft: '17px',
    color: theme.palette.text.secondary,
    fontSize: '12px',
    fontHeight: '16px',
});

export const MenuItemText = styled('span')({
    fontSize: '15px',
    marginLeft: '10px',
    color: theme.palette.text.primary,
});
