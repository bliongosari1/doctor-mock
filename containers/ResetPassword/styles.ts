import { styled } from '@mui/system';
import { InputBase } from '@mui/material';
import theme from '../../theme';

export const styles = {};

export const LoginBoxWrapper = styled('div')({
    background: 'white',
    boxShadow: '0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08)',
    borderRadius: '16px',
    padding: '48px 32px 32px',
    // width: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '406px',
    width: '25vw',
});

export const LinkText = styled('a')({
    color: theme.palette.primary.main,
    fontSize: '12px',
});

export const SingleLineInput = styled(InputBase)((props: { warning?: boolean }) => ({
    fontFamily: 'Lato',
    padding: '6px 0px 6px 15px',
    fontSize: '16px',
    width: '100%',
    margin: '5px 0 5px',
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
        color: props.warning ? theme.palette.text.secondary : theme.palette.text.red,
    },
}));

export const FormTitle = styled('span')((props: { warning?: boolean }) => ({
    fontWeight: 700,
    fontSize: 15.5,
    lineHeight: '24px',
    color: props.warning ? theme.palette.text.red : theme.palette.text.main,
}));

export const FormWarning = styled('span')({
    fontSize: 12,
    lineHeight: '16px',
    color: theme.palette.text.red,
});

export const FormWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: '10px',
});

export const ImageWrapper = styled('div')({
    display: 'flex',
    marginRight: '10px',
    '&:hover': {
        cursor: 'pointer',
        opacity: '0.92',
    },
});

export const PincodeWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    maxWidth: '100px',
});

export const TickWrapper = styled('div')({
    display: 'flex',
    height: '80px',
    width: '80px',
    marginBottom: '20px',
    borderRadius: '50%',
    background: '#05c880',
    alignItems: 'center',
    justifyContent: 'center',
});

export const AvatarWrapper = styled(`div`)({
    width: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '25px',
    marginBottom: '3px',
    marginRight: '7.5px',
    position: 'relative',
    justifyContent: 'center',
});

export const AvatarBackground = styled(`div`)({
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    // background: 'grey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const TextTitle = styled('span')({
    color: theme.palette.text.primary,
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: '700',
});

export const TextSubtitle = styled('span')({
    color: theme.palette.text.secondary,
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '700',
});

export const Text = styled('span')({
    color: theme.palette.text.secondary,
    fontSize: '14px',
    lineHeight: '18px',
    fontWeight: '700',
    textAlign: 'center',
});
