import { Menu, MenuItem, Checkbox } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../theme';

export const styles = {
    AppoinmentPatientSummary__Required: {
        marginTop: '-6px',
        marginBottom: '10px',
        height: '15px',
    },
    AppoinmentPatientSummary__RowTags: {
        marginTop: '10px',
        height: '20px',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
    },
    AppoinmentPatientSummary__RowLeft: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        marginRight: 10,
    },
    AppoinmentPatientSummary__RowRight: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
    },
};

export const StyledMenu = styled(Menu)({
    '& .MuiPaper-root': {
        borderRadius: '8px',
        minWidth: 290,
        maxHeight: '600px',
        overflow: 'scroll',
        color: theme.palette.text.primary,
        fontFamily: 'Lato',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12)',
        '& .MuiMenu-list': {
            padding: '16px 0 0',
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
    padding: '8px 0px',
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

export const MenuItemSubheading = styled('div')({
    margin: '5px 0px',
    marginLeft: '17px',
    color: theme.palette.text.secondary,
    fontSize: '12px',
    fontHeight: '16px',
});

export const MenuItemText = styled('span')({
    marginLeft: '3px',
    fontSize: '15px',
    color: theme.palette.text.primary,
});

export const CheckboxStyled = styled(Checkbox)({
    marginLeft: '-10px !important',
    color: theme.palette.primary.main,
    fontSize: '20px !important',
    '& .MuiSvgIcon-root': {
        marginRight: '0px !important',
        fontSize: '18px !important',
        color: `${theme.palette.primary.main} !important`,
    },
});

export const FilterGroupWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '5px',
});
