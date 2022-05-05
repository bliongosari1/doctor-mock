import { styled } from '@mui/system';
import { Checkbox, InputBase, Radio } from '@mui/material';
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

export const FormTitlePlaceholder = styled('div')({
    width: '100%',
    height: '17px',
    marginBottom: '5px',
});

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
    // '&.Mui-focused': {
    //     border: 'solid 2px #4a84ff',
    // },
    '&::placeholder': {
        fontSize: 14,
        color: props.warning ? theme.palette.text.red : undefined,
    },
}));

export const CheckboxStyled = styled(Checkbox)({
    marginLeft: '-10px !important',
    marginRight: '-3px !important',
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

export const SingleLineInput = styled(InputBase)((props: { warning?: boolean }) => ({
    fontFamily: 'Lato',
    padding: '4px 0px 4px 15px',
    fontSize: '13px',
    minWidth: '100px',
    color: props.warning ? theme.palette.text.red : theme.palette.text.main,
    border: `1px solid ${props.warning ? theme.palette.text.red : '#C5CEE0'}`,
    background: 'white',
    borderRadius: '12px',
    '& .Mui-focused': {
        textOverflow: 'ellipsis',
    },
    '& .MuiInputBase-input': {
        color: props.warning ? theme.palette.text.red : theme.palette.text.main,
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
}));

export const RadioWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
});

export const Text = styled('span')({
    fontWeight: '400',
    fontSize: '13.5px',
    lineHeight: '18px',
    color: theme.palette.text.main,
});

export const StyledRadio = styled(Radio)({
    color: theme.palette.primary.main,
    '&.Mui-checked': {
        color: theme.palette.primary.main,
    },
});

export const OptionsWrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    marginRight: '15px',
    marginBottom: '-10px',
    marginTop: '5px',
    alignItems: 'center',
});
