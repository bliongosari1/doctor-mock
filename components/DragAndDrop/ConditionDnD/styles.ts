import { styled } from '@mui/system';
// import theme from '../../../theme';

export const styles = {};

export const ItemWrapper = styled('div')({
    background: '#D0E9F1',
    display: 'flex',
    padding: '12px 16px',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: '12px',
});

export const ItemText = styled('div')({
    color: '#1C4574',
    fontSize: '14px',
    lineHeight: '18px',
    marginLeft: '10px',
    fontWeight: '700',
    maxWidth: '100%',
    overflow: 'ellipsis',
});

export const FlexDivider = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
});

export const DeleteBtnWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        cursor: 'pointer',
        opacity: '0.92',
    },
});
