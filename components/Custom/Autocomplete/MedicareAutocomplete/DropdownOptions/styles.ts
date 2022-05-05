import { List } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../../../theme';

export const DropdownOptionsList = styled(List)({
    overflow: 'hidden',
    background: 'white',
    marginTop: '42.5px',
    display: 'flex',
    width: '100%',
    zIndex: '200',
    position: 'absolute',
    padding: '0px',
    filter: 'drop-shadow(0px 2px 5px rgba(186, 186, 186, 0.3))',
    borderRadius: '0px 0px 8px 8px',
});

export const DropdownWrapper = styled('div')({
    maxHeight: '250px',
    overflow: 'scroll',
    width: '100%',
});

export const AddNewDiagnosis = styled('div')({
    color: theme.palette.primary.main,
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        cursor: 'pointer',
        opacity: '0.92',
    },
});

export const DropdownDivider = styled('div')({
    width: '100%',
    padding: '6.5px 0px',
    marginLeft: '16px',
});

export const styles = {};
