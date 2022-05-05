import { List, InputBase } from '@mui/material';
import { styled } from '@mui/system';
import theme from '../../../../../theme';

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
});

export const ImageWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '7.5px',
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

export const DropdownDivider = styled('div')({
    width: '100%',
    padding: '6.5px 0px',
    marginLeft: '16px',
});

export const styles = {};
