import { styled } from '@mui/system';
import { Checkbox, Alert } from '@mui/material';
import theme from '../../../theme';

export const styles = {};

export const FormWrapper = styled(`div`)({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    overflow: 'scroll',
});

export const FormTitle = styled('span')((props: { warning?: boolean }) => ({
    fontWeight: 700,
    fontSize: 13,
    lineHeight: '17px',
    color: props.warning ? theme.palette.text.red : theme.palette.text.main,
    marginBottom: '5px',
}));

export const AllInputWrapper = styled(`div`)({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    padding: '0px 12px 10px',
});

export const ColumnWrapper = styled(`div`)({
    display: 'flex',
    flexDirection: 'column',
});

export const RowWrapper = styled(`div`)({
    marginTop: '10px',
    display: 'flex',
    gap: '10px',
});

export const TextArea = styled('textarea')((props: { warning?: boolean }) => ({
    width: '100%',
    fontSize: 14,
    padding: '12px',
    background: 'white',
    borderRadius: '12px',
    border: `1px solid ${props.warning ? theme.palette.text.red : theme.palette.primary.border}`,
    // '& .Mui-focused': {
    //     border: `1px solid ${props.warning ? theme.palette.text.red : theme.palette.primary.border}`,
    // },
    '&::placeholder': {
        fontSize: 14,
        color: props.warning ? theme.palette.text.red : undefined,
    },
}));

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

export const ConfirmationText = styled('span')((props: { warning?: boolean }) => ({
    fontSize: '12px',
    lineHeight: '16px',
    color: props.warning ? theme.palette.text.red : theme.palette.text.main,
    ':hover': {
        cursor: 'pointer',
    },
}));

export const StyledAlert = styled(Alert)({
    background: 'white',
    boxShadow: '0px 8px 18px -6px rgba(24, 39, 75, 0.12), 0px 12px 42px -4px rgba(24, 39, 75, 0.12)',
    borderRadius: '12px',
});
