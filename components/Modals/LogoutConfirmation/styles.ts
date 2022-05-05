import { styled } from '@mui/system';
import theme from '../../../theme';

export const ContentWrapper = styled('div')({
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 25px 15px',
    minWidth: '385px',
});

export const ModalTitle = styled('span')({
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: '700',
    color: theme.palette.text.primary,
});

export const GreySubtitle = styled('span')({
    fontSize: '16px',
    lineHeight: '22px',
    color: theme.palette.text.secondary,
});

export const TextArea = styled('textarea')({
    width: '95%',
    minHeight: 100,
    fontSize: 14,
    padding: '20px',
    background: '#F7F9FC',
    margin: '25px 0',
    borderRadius: '12px',
    border: '1px solid #C5CEE0',
    // '&.Mui-focused': {
    //     border: 'solid 2px #4a84ff',
    // },
    '&::placeholder': {
        fontSize: 16,
    },
});

export const ButtonsWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    width: '95%',
    margin: '25px 0 0',
    justifyContent: 'space-between',
});

export const styles = {};
